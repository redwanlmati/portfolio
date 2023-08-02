import React from 'react';
// import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';


// Importing views
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import DriveTT from './Components/DriveTT';
import Tecso from './Components/Tecso';
import Decory from './Components/Decory';

import './App.css';

function App() {
  return (

    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/drivethroughtime" element={<DriveTT />} />
      <Route path="/tecso" element={<Tecso />} />
      <Route path="/decory" element={<Decory />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  );
}

export default App;
