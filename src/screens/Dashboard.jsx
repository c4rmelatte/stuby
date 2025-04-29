import React, { useState, useEffect } from "react";
import {
  FaRegClock,
  FaRegAddressCard,
  FaRegStickyNote,
  FaMusic,
  FaBook,
  FaSignOutAlt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner.png';
import "../styles/landing.css";
import "../styles/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLandscape, setIsLandscape] = useState(window.matchMedia("(orientation: landscape)").matches);

  // Update orientation on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLandscape) {
    return (
      <div className="orientation-error">
        <div className="orientation-error-message">
          <h1>Please rotate your device</h1>
          <p>This application only works in <strong>landscape mode</strong>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="drawer-layout">
      {/* Top Header */}
      <header className="header">
        <div className="sidebar-logo">stuby</div>
        <div className="auth-buttons">
          <button className="signup-btn" onClick={() => navigate('/')}>Logout</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-main-content">
        <div className="dashboard-banner-container1">
          <img src={banner} alt="Banner" className="dashboard-banner-image" />
          <div className="dashboard-banner-text-center">
            <h1 className="dashboard-h1">Welcome, user!</h1>
            <div className="dashboard-features-grid">
              <div className="dashboard-feature-card" onClick={() => navigate('/pomodoro')}>
                <FaRegClock size={100} />
                <p className="dashboard-para">Pomodoro</p>
              </div>
              <div className="dashboard-feature-card" onClick={() => navigate('/flashcard')}>
                <FaRegAddressCard size={100} />
                <p className="dashboard-para">Flashcard</p>
              </div>
              <div className="dashboard-feature-card" onClick={() => navigate('/toDoList')}>
                <FaRegStickyNote size={100} />
                <p className="dashboard-para">To do List</p>
              </div>
              <div className="dashboard-feature-card" onClick={() => navigate('/notepad')}>
                <FaBook size={100} />
                <p className="dashboard-para">Notepad</p>
              </div>
              <div className="dashboard-feature-card" onClick={() => navigate('/music')}>
                <FaMusic size={100} />
                <p className="dashboard-para">Music</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
