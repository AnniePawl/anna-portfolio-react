// IMPORTS
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './Home/Home'
import './App.css'




function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <h1>It's working</h1>
        <Home />

        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/About" component={About} /> */}

      </BrowserRouter >
    </div>
  );
}

export default App
