import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login'; // Ensure this file exists
import BirdStatus from './BirdStatus'; // Your previous BirdStatus component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/status" element={<BirdStatus />} />
            </Routes>
        </Router>
    );
};

export default App;
