import React from "react";
import Navbar from "../Navbar/Navbar";
import moth from "../../assets/portfolio-moth.svg";
import "./styles/LandingPage.scss";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="moth-container">
        <img className="moth" src={moth} />
      </div>
    </div>
  );
}

export default LandingPage;
