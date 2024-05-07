// RegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';
import '../AppTwo.css'; // Import the CSS file for styling

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [error, setError] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to track if success popup should be shown
    const [showUserExistsPopup, setShowUserExistsPopup] = useState(false); // State to track if user exists popup should be shown

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validation
        // Check if all fields are filled
        if (!username || !password || !userType) {
            setError("Please fill all the fields 🙄");
            return;
        }

        // Check if password meets the length requirement
        if (password.length < 8) {
            setError("Password must be at least 8 characters long 😎");
            return;
        }

        try {
            const response = await axios.post('http://localhost:17088/Register', { username, password, userType });
            if (response.status === 201) {
                setError(""); // Clear error message
                setShowSuccessPopup(true); // Show success popup
                setUsername(""); // Clear input fields
                setPassword("");
                setUserType("");
            }
        }
        catch (error) {
            // Handle error response
            if (!error.response){
                setError('Server is down. Please try again later 😥');
            }
            else if (error.response.status === 400 ) {
                setShowUserExistsPopup(true); // Show popup indicating user already exists
            }
            else {
                setError("Server has issues. Please try again later 😥"); // Show general error message
                console.log('Register error:', error.response);

            }
        }
    };

    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    const closeUserExistsPopup = () => {
        setShowUserExistsPopup(false);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
            <h2>register</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="">Select a user role</option>
                    <option value="Admin">Admin</option>
                    <option value="Patient">Patient</option>
                </select>
                <button type="submit">Register</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            {showSuccessPopup && (
                <div className="success-popup">
                    <p>User registered successfully!😍</p>
                    <button onClick={closeSuccessPopup}>Close</button>
                </div>
            )}
            {showUserExistsPopup && (
                <div className="error-popup">
                    <p>User already exists!</p>
                    <button onClick={closeUserExistsPopup}>Close</button>
                </div>
            )}
        </div>
    );
}

export default RegistrationForm;
