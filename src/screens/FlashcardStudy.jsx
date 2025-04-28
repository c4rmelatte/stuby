import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaRegClock,
  FaRegAddressCard,
  FaRegStickyNote,
  FaMusic,
  FaBars,
  FaTimes,
  FaBook,
  FaSignOutAlt
} from 'react-icons/fa';
import '../styles/flashcardStudy.css';


export default function FlashcardStudy() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const navigate = useNavigate();

  const handleRatingClick = () => {
    setShowAnswer(false); // Reset back to question view
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


        <div className="sidebar-item" onClick={() => navigate("/")}>
            <FaSignOutAlt size={25} />
            <span>LOGOUT</span>
          </div>

      </div>

      {/* Main Content */}
      <main className="main-content5">
        <div className="flashcard-container">
          <div className="flashcard">
            <h3>Question</h3>
            <div className="flashcard-body">
            <p>------------------------------</p>
            <p className={`answer ${showAnswer ? 'show' : ''}`}>Answer</p>
            </div>

          </div>

          {/* Buttons under flashcard */}
          <div className="button-container">
          {!showAnswer ? (
            <button className="show-answer-btn" onClick={() => setShowAnswer(true)}>
                Show Answer
            </button>
            ) : (
            <div className="rating-buttons">
                <div className="rating-option">
                <div className="label">&lt;1m</div>
                <button onClick={handleRatingClick}>Again</button>
                </div>
                <div className="rating-option">
                <div className="label">&lt;6m</div>
                <button onClick={handleRatingClick}>Hard</button>
                </div>
                <div className="rating-option">
                <div className="label">&lt;10m</div>
                <button onClick={handleRatingClick}>Good</button>
                </div>
            </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
