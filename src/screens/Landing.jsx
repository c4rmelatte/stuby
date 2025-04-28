import React from "react";
import {
  FaRegClock,
  FaRegAddressCard,
  FaMusic,
  FaBook,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaRegStickyNote
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner.png';
import coverphoto from '../assets/coverphoto.png';
import "../styles/landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="drawer-layout">
      {/* Top Header */}
      <header className="header">
        <div className="sidebar-logo">stuby</div>

        {/* Auth buttons */}
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="signup-btn" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">

        {/* Banner Section */}
        <div className="banner-container">
          <img src={coverphoto} alt="Banner" className="banner-image-trans" />
          <div className="banner-text-left">
            <h1>Where learning does <br />not have to be boring.</h1>
            <p>
              Master your time, boost retention, and stay in the zone with <br />
              customizable tools designed for deep, distraction-free learning. <br />
              Whether you're cramming for exams or building daily study habits, <br />
              stuby helps you stay organized, focused, and in control of your learning journey. <br />
              It's not just about studying—it's about studying smarter, every single day.
            </p>
            <button className="learn-btn" onClick={() => navigate('/')}>Learn More...</button>
          </div>
        </div>

        {/* Features Section */}
        <div className="banner-container1">
          <img src={banner} alt="Banner" className="banner-image" />
          <div className="banner-text-center">
            <h1 className="h1">Features</h1>

            <div className="features-grid">
              <div className="feature-card">
                <FaRegClock size={100} />
                <p className="para">Pomodoro</p>
              </div>
              <div className="feature-card">
                <FaRegAddressCard size={100} />
                <p className="para">Flashcard</p>
              </div>
              <div className="feature-card">
                <FaRegStickyNote size={100} />
                <p className="para">To do List</p>
              </div>
              <div className="feature-card">
                <FaBook size={100} />
                <p className="para">Notepad</p>
              </div>
              <div className="feature-card">
                <FaMusic size={100} />
                <p className="para">Music</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="banner-container2">
          <footer className="custom-footer">
            <div className="footer-top">
              <div className="footer-logo">stuby</div>
              <div className="footer-socials">
                <FaFacebookF className="social-icon" />
                <FaEnvelope className="social-icon" />
                <FaInstagram className="social-icon" />
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-section">
                <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                  <h4>About</h4>
                </a>
                <p>Contact Us</p>
                <p>Terms and Policies</p>
                <p>Legal</p>
              </div>
              <div className="footer-section">
                <h4>Information</h4>
                <p>Contact Us</p>
                <p>Terms and Policies</p>
                <p>Legal</p>
              </div>
              <div className="footer-section">
                <h4>POOKIES</h4>
                <p>est. 2025</p>
              </div>
            </div>
          </footer>
        </div>

        {/* Bottom Footer */}
        <footer className="footer">
          <p>&copy; 2025 stuby. All Rights Reserved.</p>
          <div className="footer-links">
          </div>
        </footer>

      </div>
    </div>
  );
}
