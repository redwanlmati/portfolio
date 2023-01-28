import React from 'react';
// import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom"

import Home from './Components/Home'

const App = () => {
  return (
    
    <Router>
        <Home />
    </Router>

  );
}

export default App;
