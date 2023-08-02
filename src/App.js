import React from 'react';
// import { useState, useEffect } from 'react';

import { Routes, Route, Navigate  } from 'react-router-dom';


// Importing views
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import DriveTT from './Components/DriveTT';
import Tecso from './Components/Tecso';
import Decory from './Components/Decory';

//components
import Header from './Components/pageComponents/Header';
import Footer from './Components/pageComponents/Footer';

import './App.css';


function App() {
  return (

    <Routes>
      <Route path="*" element={
        <>
        <Navigate to='/portfolio' />
        </>
      }/>
      <Route path="/portfolio" element={
        <>
        <Header />
        <Home />
        <Footer />
        </>
      }/>
      <Route path="/drivethroughtime" element={
      <>
      <Header />
      <DriveTT />
      <Footer />
      </>
      } />
      <Route path="/tecso" element={
      <>
      <Header />
      <Tecso />
      <Footer />
      </>
      } />
      <Route path="/decory" element={
      <>
      <Header />
      <Decory />
      <Footer />
      </>
      } />
      <Route path="/about" element={
      <>
      <Header />
      <About />
      <Footer />
      </>
      } />
      <Route path="/contact" element={
      <>
      <Header />
      <Contact />
      <Footer />
      </>
      } />
    </Routes>

  );
}

export default App;
