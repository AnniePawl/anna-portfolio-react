import React from "react";
import Navbar from "../Navbar/Navbar";
import moth from "../../assets/portfolio-moth.svg";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./styles/LandingPage.scss";

function LandingPage() {
  return (
    <div id="home" className="landing-page">
      <Navbar />
      <div className="moth-container">
        <img className="moth" src={moth} />
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <Contact />
      </div>
      {/* <div className="stars">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div> */}
    </div>
  );
}

export default LandingPage;
