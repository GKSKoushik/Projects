# Bird Intrusion Detection
This is a real-time Bird Detection System built using the MERN (MongoDB, Express, React, Node.js) stack. The system utilizes piezoelectric and radar sensors to monitor for bird activity, including motion and noise. The sensor data is processed by a Node.js server and displayed on a dynamic web interface.

## ✨ Key Features
- Real-time Sensor Data: Displays live status for motion and noise detection from the connected sensors.
  - Secure User Authentication: A login system to ensure only authorized users can view the sensor data.
  - Intuitive UI: A clean, responsive interface that provides a clear overview of the system status.

## 💻 Technologies Used
### Frontend (React)
- React: For building the single-page application and its components.
- React Router Dom: Manages routing between the login page and the status dashboard.
- useState: A React Hook to manage state for user input and error messages.

### Backend (Node.js & Express)
- Node.js: The server-side runtime environment.
- Express.js: A minimalist web framework for building the REST API.
- CORS: Middleware to handle cross-origin requests from the frontend.
- dotenv: To manage environment variables securely.

### Hardware
- Radar Sensor: Detects motion and an object's presence.
- Piezoelectric Sensor: Detects vibrations and is used here to measure noise levels.

---
## 🚀 Getting Started
To get the project running locally, follow these steps.

### Prerequisites
- Node.js and npm installed on your machine.
- The hardware setup (sensors) should be connected and configured to send data to the backend API.
#### Backend Setup
1. Navigate to your backend directory.
2. Install the server dependencies:
   ```bash
   npm install
   ```
3. Start the server. It will listen on port 5000 by default.
   ```bash
   node index.js
   ```
   The server provides two API endpoints:
   - POST /api/birdstatus: To receive data from your sensors.
   - GET /api/birdstatus: To fetch the latest sensor status.
#### Frontend Setup
1. Navigate to your frontend directory.
2. Install the React dependencies:
   ```bash
   npm install
   ```
3. Run the application. It will open in your browser on http://localhost:3000.
   ```bash
   npm start
   ```
## ➡️ Usage
1. Access the login page at http://localhost:3000.
2. Use the hardcoded credentials to log in:
   - Username: user
   - Password: password123
3. Upon successful login, you'll be redirected to the "Bird Detection Status" page, where you can monitor real-time data from your sensors.


