import React from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './Home';
import About from './About'
import Resume from './Resume'
import TechPortfolio from './TechPortfolio'
import CreativePortfolio from './CreativePortfolio'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/" >Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Resume">Resume</Link>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Resume" component={Resume} />
        <Route path="/TechPortfolio" component={TechPortfolio} />
        <Route path="CreativePortfolio" component={CreativePortfolio} />
      </div>
    </BrowserRouter>
  );
}

export default App
