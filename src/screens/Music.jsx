import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegClock, FaRegAddressCard, FaRegStickyNote, FaMusic, FaBars, FaTimes, FaBook, FaSignOutAlt } from 'react-icons/fa';

import '../styles/dashboard.css';
import '../styles/music.css';

// Import images from the assets folder
import track1 from '../assets/track1.jpg';
import track2 from '../assets/track2.jpg';
import track3 from '../assets/track3.jpg';
import track4 from '../assets/track4.jpg';
import mc from '../assets/mc.jpg';  // Import mc.jpg

const Music = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const playlist = [
    { img: track1, title: "Name of the music", time: "3:13", artist: "Artist", album: "Album" },
    { img: track2, title: "Name of the music", time: "3:13", artist: "Artist", album: "Album" },
    { img: track3, title: "Name of the music", time: "3:13", artist: "Artist", album: "Album" },
    { img: track4, title: "Name of the music", time: "3:13", artist: "Artist", album: "Album" },
  ];

  return (
    <div className="drawer-layout">
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


      <main className="main-content3">
        <div className="forcenter">
        <div className="card-wrapper">
          <div className="top-section">
            <div>
              <div className="meta">
                <div className="meta-text">2025</div>
                <div className="meta-text right">Artist</div>
              </div>
              <h2 className="music-title">Name of the music</h2>
              <input className="range-slider" type="range" />
              <div className="control-buttons">
                <button className="control-btn">⏮</button>
                <button className="control-btn large">▶</button>
                <button className="control-btn">⏭</button>
              </div>
            </div>
            <img src={mc} alt="Album Art" className="album-image" />
          </div>

          <hr className="divider" />

          <h3 className="playlist-title">My Playlist</h3>
          <table className="playlist-table">
            <thead>
              <tr className="table-row">
                <th className="table-head"></th>
                <th className="table-head">Name of the music</th>
                <th className="table-head">Time</th>
                <th className="table-head">Artist</th>
                <th className="table-head">Album</th>
              </tr>
            </thead>
            <tbody>
              {playlist.map((song, index) => (
                <tr key={index} className="table-row">
                  <td className="table-data">
                    <img src={song.img} alt={song.title} className="track-image" />
                  </td>
                  <td className="table-data">{song.title}</td>
                  <td className="table-data">{song.time}</td>
                  <td className="table-data">{song.artist}</td>
                  <td className="table-data">{song.album}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Music;
