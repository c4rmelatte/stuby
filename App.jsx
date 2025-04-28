import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard'; // Correctly import Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Adjusted to Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
