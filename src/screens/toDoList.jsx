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
import '../styles/toDoList.css'; // Assuming your main styles are here
import '../styles/dashboard.css'; // Assuming your dashboard styles are here

export default function ToDoList() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

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
          <FaBook size={25} />
          <span>NOTEPAD</span>
        </div>

        <div className="sidebar-item" onClick={() => navigate("/login")}>
          <FaSignOutAlt size={25} />
          <span>LOGOUT</span>
        </div>

        
      </div>

      {/* To Do List Main Content */}
      <div className="maincontent10">
        <h1 className="screen-text">To Do List</h1>
        <p className="sub-text">Manage your tasks efficiently!</p>
        <div className="todo-container">
        <div className="addTask">
          
          <span  >+ Add task</span>
        </div>
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span>Task 2</span>
        </div>
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span>Task 3</span>
        </div>
        
      </div>

      </div>
    </div>
  );
}
