import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegClock, FaRegAddressCard, FaRegStickyNote, FaMusic, FaBars, FaTimes,FaBook, FaSignOutAlt } from 'react-icons/fa';
import '../styles/flashcardCollection.css';
import '../styles/dashboard.css';

export default function FlashcardCollection1() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleStudyButtonClick = () => {
    navigate('/FlashcardStudy');
  };

  return (
    <div className="drawer-layout">
      
      {/* Header */}
      <header className="header">
        <button className="drawer-toggle" onClick={() => setDrawerOpen(!isDrawerOpen)}>
          {isDrawerOpen ? <FaTimes size={35} /> : <FaBars size={35} />}
        </button>
        <a href="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
        <div className="sidebar-logo">stuby</div>
        </a>
      </header>

      {/* Sidebar Drawer */}
      <div className={`drawer-sidebar ${isDrawerOpen ? 'open' : ''}`}>
        <div className="sidebar-item" onClick={() => navigate('/pomodoro')}>
          <FaRegClock size={25} />
          <span>POMODORO</span>
        </div>
        <div className="sidebar-item" onClick={() => navigate('/flashcard')}>
          <FaRegAddressCard size={25} />
          <span>FLASHCARD</span>
        </div>
        <div className="sidebar-item" onClick={() => navigate('/toDoList')}>
          <FaRegStickyNote size={18} />
          <span>TO DO LIST</span>
        </div>
        <div className="sidebar-item" onClick={() => navigate('/music')}>
          <FaMusic size={25} />
          <span>MUSIC</span>
        </div>
        <div className="sidebar-item" onClick={() => navigate('/notepad')}>
          <FaBook size={23} />
          <span>NOTEPAD</span>
        </div>



        <div className="sidebar-item" onClick={() => navigate("/login")}>
            <FaSignOutAlt size={25} />
            <span>LOGOUT</span>
          </div>

      </div>

      {/* Main Content */}
      <main className="main-content5">
        {/* Wrapping content inside .concon */}
        <div className="concon">  
          <div className="flashcard-header">
            <div className="header-left">
            <h2 className="flashcards-title">Flashcard</h2>
            <p className="flashcards-collection-label">Collection</p>
            </div>
            <button className="study-btn" onClick={handleStudyButtonClick}>Study Flashcards</button>
          </div>

          <div className="card-grid">
            <div className="card add-card">+</div>
            <div className="card">
              <strong>Question</strong><br />
              Answer
            </div>
            <div className="card">
              <strong>Question</strong><br />
              Answer
            </div>
            <div className="card">
              <strong>Question</strong><br />
              Answer
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
