import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegClock, FaRegAddressCard, FaRegStickyNote, FaMusic, FaBars, FaTimes, FaArrowLeft, FaBook, FaSignOutAlt } from 'react-icons/fa';
import '../styles/dashboard.css';
import '../styles/Note1.css';

const Note1 = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const [notes] = useState([
    {
      title: 'Things To Do in Subject: Computer Science',
      tasks: [
        {
          text: 'Things To Do in Subject: Computer Science',
          subtext: 'Focus on arrays and linked lists',
        },
        {
          text: 'Finish Assignment #2',
          subtext: 'Deadline: April 12, 2025',
        },
        {
          text: 'Review lecture notes from April 8',
        },
        {
          text: 'Watch tutorial on recursion (YouTube)',
        },
        {
          text: 'Prepare for quiz on Monday',
          subtext: 'Topics: Sorting algorithms, complexity',
        },
      ],
    },
  ]);

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

      {/* Sidebar */}
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
      <main className="main-content9">
        <div className="notepad-container">
          
          {/* Yellow header bar (outside card) */}
          <div className="note-header" >
            <FaArrowLeft size={20} onClick={() => navigate('/notepad')} style={{ marginRight: '10px' }} />
            <span className="add-note-title">Add Note</span>
          </div>


          {/* White note card below */}
          <div className="note-card">
            <h3 className="note-title">{notes[0].title}</h3>
            <ol className="note-tasks">
              {notes[0].tasks.map((task, index) => (
                <li key={index} className="note-task-item">
                  {task.text}
                  {task.subtext && <div className="note-subtext">- {task.subtext}</div>}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Note1;
