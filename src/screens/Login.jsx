import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form reload
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    // Example: You can uncomment below for basic login check
    // if (username === 'admin' && password === '123') {
      navigate('/dashboard'); // Navigate if login is successful
    // } else {
    //   alert('Invalid username or password');
    // }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${require('../assets/background.png')})`,
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="login-container">
        <div className="login-box">
          <h1 className="screen-text">stuby</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text">Forgot Password?</p>
            <button className="login-button" type="submit">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
