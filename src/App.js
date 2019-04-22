import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'

import NavBar from './NavBar/NavBar'
import Home from './Home';
import About from './About'
import Resume from './Resume'
import TechPortfolio from './TechPortfolio'
import CreativePortfolio from './CreativePortfolio'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Resume" component={Resume} />
        <Route path="/TechPortfolio" component={TechPortfolio} />
        <Route path="/CreativePortfolio" component={CreativePortfolio} />
      </div>
    </BrowserRouter >
  );
}

export default App
