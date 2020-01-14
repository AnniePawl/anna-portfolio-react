// IMPORTS
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home'
import PureCssAnimations from './components/PureCssAnimations/PureCssAnimations'
import About from './components/About/About'
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>

        {/* Home Route */}
        <Route path="/" >
          <Home />
        </Route>

        {/* Code Route */}
        {/* <Route path='/code' component={() => {
          window.open(window.href = 'https://github.com/AnniePawl');
          return null;
        }} /> */}

        {/* CSS Animation Route */}
        {/* <Route path='/css-animations' component={() => {
          window.open(window.href = 'https://anniepawl.github.io/Pure-CSS-Animations/');
          return null;
        }} /> */}


      </Router >
    </div>
  );
}

export default App
