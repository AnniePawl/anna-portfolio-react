// IMPORTS
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import TechnicalProjects from "./components/TechnicalProjects/TechnicalProjects";
import CreativePortfolio from "./components/CreativePortfolio/CreativePortfolio";

function App() {
  return (
    <div className="App">
      <Router>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        {/* Home Route */}
        <Route path="/" exact component={LandingPage} />

        {/* Technical Projects */}
        <Route path="/technical-projects" exact component={TechnicalProjects} />

        {/* Art/Design Route */}
        <Route path="/art-design" exact component={CreativePortfolio} />

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
