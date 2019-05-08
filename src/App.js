// IMPORTS
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home';
import About from './About/About'
import Contact from './Contact/Contact'
import TechPortfolio from './TechPortfolio/TechPortfolio'
import CreativePortfolio from './CreativePortfolio/CreativePortfolio'
import WritingPortfolio from './WritingPortfolio/WritingPortfolio'
import Footer from './Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/TechPortfolio" component={TechPortfolio} />
        <Route path="/WritingPortfolio" component={WritingPortfolio} />
        <Route path="/CreativePortfolio" component={CreativePortfolio} />
        {/* Should footer haver route? */}
        <Route path="/Footer" component={Footer} />
      </div>
    </BrowserRouter >
  );
}

export default App
