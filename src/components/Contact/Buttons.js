import React from "react";
// CUSTOM BUTTON IMPORTS
import codepen from "../../assets/custom_media_buttons/codepen.svg";
import dribbble from "../../assets/custom_media_buttons/dribbble.svg";
import github from "../../assets/custom_media_buttons/github.svg";
import linkedin from "../../assets/custom_media_buttons/linkedin.svg";
import medium from "../../assets/custom_media_buttons/medium.svg";
import insta from "../../assets/custom_media_buttons/insta.svg";

import "./styles/Contact.scss";

function Buttons() {
  return (
    <div className="media-buttons">
      {/* Github Button */}
      <a
        className="profile__link"
        href="https://github.com/AnniePawl"
        target="_blank"
      >
        <img alt="github" className="media-button" src={github} />
      </a>

      {/* LinkedIn Button */}
      <a
        className="profile__link"
        href="https://www.linkedin.com/in/annapawl/"
        target="_blank"
      >
        <img alt="linkedin" className="media-button" src={linkedin} />
      </a>

      {/* Medium Button */}
      <a
        className="profile__link"
        href="https://medium.com/@annapawl"
        target="_blank"
      >
        <img alt="medium" className="media-button" src={medium} />
      </a>

      {/* Dribbble Button */}
      <a
        className="profile__link"
        href="https://dribbble.com/annapawl"
        target="_blank"
      >
        <img alt="dribbble" className="media-button" src={dribbble} />
      </a>

      {/* CodePen Button */}
      <a
        className="profile__link"
        href="https://codepen.io/annampawl"
        target="_blank"
      >
        <img alt="codepen" className="media-button" src={codepen} />
      </a>

      {/* Insta Button */}
      <a
        className="profile__link"
        href="https://instagram.com/feltthing"
        target="_blank"
      >
        <img alt="instagram" className="media-button" src={insta} />
      </a>
    </div>
  );
}

export default Buttons;
