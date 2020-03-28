import React from "react";
import Navbar from "../Navbar/Navbar";
import moth from "../../assets/portfolio-moth.svg";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./styles/LandingPage.scss";

function LandingPage() {
  return (
    <div className="landing-page">
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
    </div>
  );
}

export default LandingPage;
