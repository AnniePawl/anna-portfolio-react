// IMPORTS
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage/LandingPage";
import Portfolio from "../src/components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}

        {/* Home Route */}
        <Route path="/" exact component={LandingPage} />

        {/* Portfolio Route */}
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
