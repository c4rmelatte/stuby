import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegClock, FaRegAddressCard, FaRegStickyNote, FaMusic, FaBars, FaTimes, FaBook, FaSignOutAlt } from 'react-icons/fa';
import '../styles/flashcard.css';
import '../styles/dashboard.css';

export default function Flashcard() {
  const navigate = useNavigate();

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const collections = [
    'Collection 1 - ENGLISH',
    'Collection 2 - MATH',
    'Collection 3 - SCIENCE',
  ];

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
      <div className="maincontent2">
      <main className="flashcards-drawer-content-main">
        <div className="flashcards-page-main-container">
          <h2 className="flashcards-title">Flashcard</h2>
          <p className="flashcards-collection-label">Collection</p>
          <div className="flashcards-collection-list">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="flashcards-collection-item"
                onClick={() => {
                  if (index === 0) navigate('/Collection1');
                  // Add more navigation logic for other collections if needed
                }}
              >
                {collection}
              </div>
            ))}

            <div className="flashcards-collection-item flashcards-add-collection-btn">
              + Add Collection
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
