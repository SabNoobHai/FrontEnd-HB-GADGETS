import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SchPost from './pages/SchPost'; // Import your scheduling component
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/schedulePost" element={<SchPost />} />
      </Routes>
    </Router>
  );
}

export default App;
