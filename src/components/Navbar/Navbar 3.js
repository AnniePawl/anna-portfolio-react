import React from "react";
import { withRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        {/* Home */}
        <li>
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>

        {/* About Section*/}
        <li>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>

        {/* Contact Section */}
        <li>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>

        {/* Portfolio */}
        <li>
          <HashLink smooth to="/portfolio/#portfolio-section">
            Portfolio
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Navbar);
