import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegClock,
  FaRegAddressCard,
  FaRegStickyNote,
  FaMusic,
  FaBars,
  FaTimes,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/dashboard.css";
import "../styles/pomodoro.css";

export default function Pomodoro() {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const DURATIONS = {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  };

  const [mode, setMode] = useState("pomodoro");
  const [secondsLeft, setSecondsLeft] = useState(DURATIONS.pomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            alert("Time's up! Take a break.");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const switchMode = (selectedMode) => {
    clearInterval(timerRef.current);
    setMode(selectedMode);
    setSecondsLeft(DURATIONS[selectedMode]);
    setIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

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
        <a href="/dashboard" style={{ textDecoration: "none", color: "white" }}>
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

      {/* Main content */}
      <div className="main-content1">
        <main className="drawer-content">
          <div className="container">
            {/* Mode Buttons */}
            <div className="mode-buttons">
              <button
                className={`mode-btn ${mode === "pomodoro" ? "active" : ""}`}
                onClick={() => switchMode("pomodoro")}
              >
                Pomodoro
              </button>
              <button
                className={`mode-btn ${mode === "short" ? "active" : ""}`}
                onClick={() => switchMode("short")}
              >
                Short Break
              </button>
              <button
                className={`mode-btn ${mode === "long" ? "active" : ""}`}
                onClick={() => switchMode("long")}
              >
                Long Break
              </button>
            </div>

            {/* Timer Display */}
            <h1 className="timer">{formatTime(secondsLeft)}</h1>

            {/* Controls */}
            <div className="controls">
              <button className="btn start" onClick={() => setIsRunning(true)}>
                Start
              </button>
              <button
                className="btn pause"
                onClick={() => {
                  clearInterval(timerRef.current);
                  setIsRunning(false);
                }}
              >
                Pause
              </button>
              <button
                className="btn reset"
                onClick={() => {
                  clearInterval(timerRef.current);
                  setSecondsLeft(DURATIONS[mode]);
                  setIsRunning(false);
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </main>
      </div>
      <footer className="footer1"></footer>
    </div>
  );
}
