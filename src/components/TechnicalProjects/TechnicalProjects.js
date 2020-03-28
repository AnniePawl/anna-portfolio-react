import React from "react";
import Navbar from "../Navbar/Navbar";
import TechnicalWriting from "./TechnicalWriting/TechnicalWriting";
import "./styles/TechnicalProjects.scss";

function TechnicalProjects() {
  return (
    <div className="technical__container">
      <Navbar />
      <h1> Technincal Projects </h1>
      <a target="blank" href="https://anniepawl.github.io/Pure-CSS-Animations/">
        CSS Animations
      </a>
      <h2>Technical Writing</h2>
      <TechnicalWriting />
    </div>
  );
}

export default TechnicalProjects;
