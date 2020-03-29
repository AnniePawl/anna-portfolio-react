import React from "react";
import { HashLink } from "react-router-hash-link";
import "./styles/Portfolio.scss";

function PortfolioSections() {
  return (
    <div className="portfolio-sections">
      <ul>
        {/* Technical Section */}
        <li>
          <HashLink smooth to="/#technical-section">
            Technical Section
          </HashLink>
        </li>

        {/* Design Section */}
        <li>
          <HashLink smooth to="/#design-section">
            Design Section
          </HashLink>
        </li>

        {/* Writing Section */}
        <li>
          <HashLink smooth to="/#writing-section">
            Writing Section
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

export default PortfolioSections;
