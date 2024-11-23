// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MediumForm from './components/mediumForm';
import MediumPublication from './components/MediumPublication';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MediumForm />} />
          <Route path="/medium-publication" element={<MediumPublication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;