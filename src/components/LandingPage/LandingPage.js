import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import "./styles/LandingPage.scss";

function LandingPage() {
  return (
    <div id="home" className="landing-page">
      <Navbar />

      {/* Home Section */}
      <div id="home" className="home-section">
        <Home />
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <Contact />
      </div>
<<<<<<< HEAD
      <div className="stars">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
=======
>>>>>>> AnniePawl/Portfolio
    </div>
  );
}

export default LandingPage;
