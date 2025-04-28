import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './screens/Login'; 
import Dashboard from './screens/Dashboard'; 
import Landing from './screens/Landing';
import Music from './screens/Music';
import ToDolist from './screens/toDoList';
import Pomodoro from './screens/Pomodoro';
import Flashcard from './screens/Flashcard';
import Register from './screens/Register'; 
import Collection1 from './screens/FlashcardCollection1';
import FlashcardStudy from './screens/FlashcardStudy';
import Notepad from './screens/Notepad'
import Note1 from './screens/Note1';
import AboutUs from './screens/AboutUs';

import Shandlerwork from './screens/Shandlerwork';
import Ninawork from './screens/Ninawork';
import Cassiework from './screens/Cassiework';
import Carmswork from './screens/Carmswork';



import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/music" element={<Music />} />
        <Route path="/toDoList" element={<ToDolist/>} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Collection1" element={<Collection1 />} />
        <Route path="/flashcardStudy" element={<FlashcardStudy />} />
        <Route path="/notepad" element={<Notepad />}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path='/Note1' element={<Note1 />} />
        

      
        <Route path="/shandlerwork" element={<Shandlerwork />} />
        <Route path="/ninawork" element={<Ninawork />} />
        <Route path="/cassiework" element={<Cassiework />} />
        <Route path="/carmswork" element={<Carmswork />} /> 

        <Route path="/flashcard" element={<Flashcard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
