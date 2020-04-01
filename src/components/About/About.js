import React from "react";
import "./styles/About.scss";
import Bridge from "./Bridge/Bridge";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About</h1>
        <p>
          I am a software engineer and designer, living and working in San
          Francisco.{" "}
        </p>
      </div>

      <div className="bridge-container">
        <Bridge />
      </div>
    </div>
  );
}
export default About;
