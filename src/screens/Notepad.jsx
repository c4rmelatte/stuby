import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegClock, FaRegAddressCard, FaRegStickyNote, FaMusic, FaBars, FaTimes, FaArrowLeft, FaPlus, FaBook, FaSignOutAlt } from 'react-icons/fa'; 
import '../styles/dashboard.css';
import '../styles/notepad.css';

const Notepad = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    return (
      <div className="drawer-layout">
        {/* Header */}
        <header className="header">
          <button
            className="drawer-toggle"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            {isDrawerOpen ? <FaTimes size={35} /> : <FaBars size={35} />}
          </button>
          <a
            href="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="sidebar-logo">stuby</div>
          </a>
        </header>

        {/* Sidebar Drawer */}
        <div className={`drawer-sidebar ${isDrawerOpen ? "open" : ""}`}>
          <div className="sidebar-item" onClick={() => navigate("/pomodoro")}>
            <FaRegClock size={25} />
            <span>POMODORO</span>
          </div>
          <div className="sidebar-item" onClick={() => navigate("/flashcard")}>
            <FaRegAddressCard size={25} />
            <span>FLASHCARD</span>
          </div>
          <div className="sidebar-item" onClick={() => navigate("/toDoList")}>
            <FaRegStickyNote size={18} />
            <span>TO DO LIST</span>
          </div>
          <div className="sidebar-item" onClick={() => navigate("/music")}>
            <FaMusic size={25} />
            <span>MUSIC</span>
          </div>
          <div className="sidebar-item" onClick={() => navigate("/notepad")}>
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
          <div className="concon">
            <div className="flashcard-header">
              <div className="header-left">
                <h2 className="flashcards-title">Notepad</h2>
                <p className="flashcards-collection-label">Notes</p>
              </div>
            </div>

            <div className="card-grid">
              <div className="card add-card">+</div>
              <div className="card1" onClick={() => navigate("/Note1")}>
                <strong>Things To Do in Subject: Computer Science</strong>
                <p>
                  <strong>Focus on arrays and linked lists</strong> <br />{" "}
                  Finish Assignment #2
                </p>
              </div>
              <div className="card1">
                <strong>Finish Assignment #2</strong>
                <br />
                <p>Deadline: April 12, 2025</p>
              </div>
              <div className="card1">
                <strong>Review lecture notes from April 8</strong>
                <br />
                <p>Watch tutorial on recursion</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
};

export default Notepad;
