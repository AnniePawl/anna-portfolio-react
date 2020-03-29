import React from "react";
import "./styles/About.scss";
import Bridge from "./Bridge/Bridge";

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1 className="about-heading">About</h1>
        <p>I am a software engineer, designer and illustrator living in NY.</p>
      </div>

      <Bridge />
    </div>
  );
}
export default About;
