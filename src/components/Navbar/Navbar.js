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
          <Link to="/">Home</Link>
        </li>

        {/* About */}
        {/* <li>
          <Link to="/">About</Link>
        </li> */}
        <li>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>

        {/* Contact */}
        <li>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>

        {/* Portfolio */}
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        {/* Technical Projects*/}
        {/* <li>
          <Link to="/technical-projects">Technical Projects</Link>
        </li> */}

        {/* Graphic Design */}
        {/* <li>
          <Link to="/art-design">Art | Design</Link>
        </li> */}

        {/* CSS Animations: Link to GH Page */}
        {/* <li>
          <a
            target="blank"
            href="https://anniepawl.github.io/Pure-CSS-Animations/"
          >
            CSS Animations
          </a>
        </li> */}

        {/* Writing*/}
        {/* <li>
          <a target="blank" href="https://medium.com/@annapawl">
            Writing
          </a>
        </li> */}

        {/* Emrbroidery*/}
        {/* <li>
          <Link className="navbar__link" to="/">
            Embroidery
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default withRouter(Navbar);
