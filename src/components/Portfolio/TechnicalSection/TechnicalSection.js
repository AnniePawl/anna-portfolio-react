import React from "react";
import TechnicalWriting from "./TechnicalWriting/TechnicalWriting";
import "./styles/TechnicalProjects.scss";

function TechnicalSection() {
  return (
    <div className="technical__container">
      <h1> Technincal Projects </h1>
      <a target="blank" href="https://anniepawl.github.io/Pure-CSS-Animations/">
        CSS Animations
      </a>
      <h2>Technical Writing</h2>
      <TechnicalWriting />
    </div>
  );
}

export default TechnicalSection;
