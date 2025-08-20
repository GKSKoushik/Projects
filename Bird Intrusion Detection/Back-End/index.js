const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));  // Allow CORS for specified origin or all origins
app.use(express.json());

let birdStatus = {
  motionDetected: false,
  noiseLevel: 0,
  updatedAt: null,  // Add a timestamp to indicate the last update time
};

// POST endpoint to receive bird status updates from the ESP32
app.post('/api/birdstatus', (req, res) => {
  const { motionDetected, noiseLevel } = req.body;

  if (typeof motionDetected === 'undefined' || typeof noiseLevel === 'undefined') {
    return res.status(400).json({ error: 'motionDetected and noiseLevel are required' });
  }

  birdStatus = { 
    motionDetected, 
    noiseLevel, 
    updatedAt: new Date()  // Record the current time for each update
  };

  console.log("Bird status updated:", birdStatus);
  res.json({ message: "Status received", data: birdStatus });
});

// GET endpoint to retrieve the latest bird status
app.get('/api/birdstatus', (req, res) => {
  res.json(birdStatus);
});

// Basic error handling for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
