#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Koushik";
const char* password = "123456799";
const char* serverUrl = "http://192.168.117.95:5000/api/birdstatus"; 

int buzzerPin = 26;        
int motionSensorPin = 27;  
int piezoSensorPin = 34;   

void setup() {
  Serial.begin(115200);
  pinMode(buzzerPin, OUTPUT);
  pinMode(motionSensorPin, INPUT); 
  pinMode(piezoSensorPin, INPUT);  
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  int motionDetected = digitalRead(motionSensorPin); 
  int noiseLevel = analogRead(piezoSensorPin);       

 
  if (motionDetected || noiseLevel > 200) {  
    digitalWrite(buzzerPin, HIGH);
  } else {
    digitalWrite(buzzerPin, LOW);
  }

  sendDataToServer(motionDetected, noiseLevel);

  delay(5000); 
}

void sendDataToServer(int motion, int noise) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");

    String payload = "{\"motionDetected\": " + String(motion) + ", \"noiseLevel\": " + String(noise) + "}";
    int httpResponseCode = http.POST(payload);

    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode); 

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Server response: " + response);
    } else {
      Serial.println("Error in sending POST request, code: " + String(httpResponseCode));
    }

    http.end();
  } else {
    Serial.println("WiFi not connected");
  }
}
