// IMPORTS
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TechnicalProjects from "./components/TechnicalProjects/TechnicalProjects";
import CreativePortfolio from "./components/CreativePortfolio/CreativePortfolio";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Home Route */}
        <Route path="/">
          <Home />
        </Route>

        {/* Technical Projects */}
        <Route path="/technical-projects">
          <TechnicalProjects />
        </Route>

        {/* Art/Design Route */}
        <Route path="/art-design">
          <CreativePortfolio />
        </Route>

        {/* CSS Animation Route */}
        {/* <Route path='/css-animations' component={() => {
          window.open(window.href = 'https://anniepawl.github.io/Pure-CSS-Animations/');
          return null;
        }} /> */}
      </Router>
    </div>
  );
}

export default App;
