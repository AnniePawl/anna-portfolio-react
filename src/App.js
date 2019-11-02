// IMPORTS
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home';
import About from './About/About'
import TechPortfolio from './TechPortfolio/TechPortfolio'
import CreativePortfolio from './CreativePortfolio/CreativePortfolio'
import WritingPortfolio from './WritingPortfolio/WritingPortfolio'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>It's working</h1>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />

        <Route path="/TechPortfolio" component={TechPortfolio} />
        <Route path="/WritingPortfolio" component={WritingPortfolio} />
        <Route path="/CreativePortfolio" component={CreativePortfolio} />



      </div>
    </BrowserRouter >
  );
}

export default App
