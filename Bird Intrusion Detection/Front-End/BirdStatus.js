import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BirdStatus = () => {
    const [birdData, setBirdData] = useState({ motionDetected: 0, noiseLevel: 0 });

    useEffect(() => {
        // Fetch the latest data
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.117.95:5000/api/birdstatus');
                setBirdData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data every 5 seconds
        fetchData();
        const interval = setInterval(fetchData, 5000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Bird Detection Status</h2>
            <div style={styles.statusBox}>
                <p style={styles.statusText}>Motion Detected:</p>
                <p style={styles.statusValue}>{birdData.motionDetected ? 'Yes' : 'No'}</p>
            </div>
            <div style={styles.statusBox}>
                <p style={styles.statusText}>Noise Level:</p>
                <p style={styles.statusValue}>{birdData.noiseLevel}</p>
            </div>
        </div>
    );
};

// Inline CSS for the component
const styles = {
    container: {
        backgroundColor: '#1d1f27',
        color: '#f5f5f5',
        padding: '2rem 3rem',
        width: '500px',
        margin: '50px auto',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '6px 6px 12px #131317, -6px -6px 12px #2b2d35',
        fontFamily: 'Roboto, sans-serif',
    },
    header: {
        fontSize: '2rem',
        color: '#ff4081',
        marginBottom: '1.5rem',
    },
    statusBox: {
        backgroundColor: '#1a1c23',
        padding: '1.5rem',
        borderRadius: '10px',
        marginTop: '1.5rem',
        boxShadow: 'inset 4px 4px 8px #14151a, inset -4px -4px 8px #20222a',
    },
    statusText: {
        fontSize: '1.2rem',
        color: '#a3a7bd',
    },
    statusValue: {
        fontSize: '2.5rem',
        color: '#50fa7b',
        fontWeight: 'bold',
        marginTop: '0.5rem',
        transition: 'color 0.3s ease',
    },
};

export default BirdStatus;
