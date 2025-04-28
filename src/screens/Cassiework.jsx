import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/aboutproj.css'; // Ensure this path is correct

export default function Cassiework() {
  const navigate = useNavigate();
  const [flippedIndex, setFlippedIndex] = useState(null);

  const members = [
    {
      imgpj1: require('../assets/cassie1.png'), // Front image
      imgpj2: require('../assets/cassie1.png'), // Back image
    },
    {
      imgpj1: require('../assets/cassie2.png'), // Front image for second member
      imgpj2: require('../assets/cassie2.png'), // Back image for second member
    },
  ];

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

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
      <main className="drawer-content101">
        <div className="about-page1">
          <h1 className="about-title1">
          DEVELOPER'S <span className="highlight1">WORKS</span>
          </h1>

          <div className="members-grid1">
            {members.map((member, index) => (
              <div
                key={index}
                className={`flip-card1 ${flippedIndex === index ? 'flipped' : ''}`}
                onClick={() => handleFlip(index)}
              >
                <div className="flip-card-inner1">
                  <div className="flip-card-front1">
                    <div className="member-photo-wrapper1">
                      <img src={member.imgpj1} alt="Member Front" className="member-photo3" />
                    </div>
                  </div>

                  <div className="flip-card-back1">
                    <img src={member.imgpj2} alt="Member Back" className="member-photo3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Go Back Button */}
          <button className="go-back-btn1" onClick={() => navigate('/about')}>
            BACK
          </button>
        </div>
      </main>
    </div>
  );
}
