import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    school: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill out all required fields.');
      return;
    }

    console.log('Registration Data:', formData);
    navigate('/dashboard');
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
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit} className="register-form">
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="input-field"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              className="input-field"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <input
              className="input-field"
              type="text"
              name="school"
              placeholder="School (Optional)"
              value={formData.school}
              onChange={handleChange}
            />
            <button className="login-button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
