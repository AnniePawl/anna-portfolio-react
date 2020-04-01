import React from "react";
import moth from "../../assets/portfolio-moth.svg";
import "./styles/Home.scss";

function Home() {
  return (
    <div className="home-container">
      <div className="moth-container">
        <img alt="moth" className="moth" src={moth} />
      </div>
      <div className="stars">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
    </div>
  );
}

export default Home;
