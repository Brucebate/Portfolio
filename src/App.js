
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
      </Routes>
    </Router>
    
  );
}

export default App;
