import React, { useState } from 'react';
import axios from 'axios';
import '../AppTwo.css'; // Import the CSS file for styling

function LoginForm(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:17088/Login', { username, password });
            console.log(response.data[0]);
            let userId = response.data[1];
            console.log(userId);
            // Call redirection logic after successful login
            handleRedirect(response.data[0]); // Pass the userType to handleRedirect
        } catch (error) {
            setError('Invalid username or password😥');
            console.error('Login error:', error.response.data);
        }
    };

    const handleRedirect = (userType) => { // Receive userType as an argument
        if (userType === 'Admin') {
            window.open('http://localhost:3000/patient', '_self');
        } else if (userType === 'Patient') {
            window.open('http://localhost:3000/Request', '_self');
        }
    };






    return(
        <div className="login-container">
            <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}


export default LoginForm;