import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/about.css'; // Ensure this path is correct

export default function About() {
  const navigate = useNavigate();
  const [flippedIndex, setFlippedIndex] = useState(null);

  const members = [
    {
      name: 'Shandler Erynne Canoza',
      role: 'Group Leader',
      description: 'Leader and coordinator of the team, ensuring smooth collaboration and project management.',
      img: require('../assets/shandler.jpg'),
      workPage: '/shandlerwork'
    },
    {
      name: 'Nina Carmela Nambio',
      role: 'Member',
      description: 'Contributing her skills and creativity to all aspects of the project.',
      img: require('../assets/nina.jpg'),
      workPage: '/ninawork'
    },
    {
      name: 'Cassandra Miranda',
      role: 'Member',
      description: 'Responsible for design and UI/UX, ensuring the user experience is top-notch.',
      img: require('../assets/cassie.jpg'),
      workPage: '/cassiework'
    },
    {
      name: 'Carmel Loresiane Berber',
      role: 'Member',
      description: 'Focused on backend and functionality, ensuring everything works seamlessly.',
      img: require('../assets/carms.jpg'),
      workPage: '/carmswork', // Add the page link for Carmel
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
      <main className="drawer-content10">
        <div className="about-page">
          <h1 className="about-title">
            MEET THE <span className="highlight">STUBIES</span>
          </h1>

          <div className="members-grid">
            {members.map((member, index) => (
              <div
                key={index}
                className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
                onClick={() => handleFlip(index)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="member-photo-wrapper">
                      <img src={member.img} alt={member.name} className="member-photo" />
                    </div>
                    <div className="member-info">
                      <h2 className="member-name">{member.name}</h2>
                      <p className="member-role">{member.role}</p>
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <h2 className="member-name">{member.name}</h2>
                    <p className="member-description">{member.description}</p>
                  </div>
                </div>
                {/* Move See More Button outside the flip-card */}
                <button
                  className="see-more-btn"
                  style={{
                    padding: '12px 25px',
                    backgroundColor: '#f5f5dc',
                    color: '#2e402d',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    fontWeight: 'bold', 
                    transition: 'background-color 0.3s ease',
                    marginTop: '20px',
                    width: '100%', // Full width for better visibility
                    
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (member.workPage) {
                      navigate(member.workPage); // Navigate to Carmel's work page
                    } else {
                      alert(`See more about ${member.name}`);
                    }
                  }}
                >
                  See More
                </button>
              </div>
            ))}
          </div>

          {/* Go Back Button */}
          <button className="go-back-btn" onClick={() => navigate('/')}>
            HOME
          </button>
        </div>
      </main>
    </div>
  );
}
