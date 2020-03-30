import React from "react";
import Navbar from "../Navbar/Navbar";
import PortfolioSections from "./PortfolioSections";
import TechnicalSection from "./TechnicalSection/TechnicalSection";
import DesignSection from "./DesignSection/DesignSection";
import WritingSection from "./WritingSection/WritingSection";
import "./styles/Portfolio.scss";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio-container">
      <Navbar />

      {/* Portfolio Sections Hero */}
      <div className="portfolio-sections-container">
        <PortfolioSections />
      </div>

      {/* Technical Projects Section */}
      <div id="technical-section">
        <TechnicalSection />
      </div>

      {/* Design Section */}
      <div id="design-section">
        <DesignSection />
      </div>

      {/* Writing Section */}
      <div id="writing-section">
        <WritingSection />
      </div>
    </div>
  );
}

export default Portfolio;
