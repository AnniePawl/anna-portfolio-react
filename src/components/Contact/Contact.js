import React from "react";
import Buttons from "./Buttons";
import "./styles/Contact.scss";
import ContactForm from "./Form";

function Contact() {
  return (
    <div className="contact-container">
      <div className="form-container">{/* <ContactForm /> */}</div>

      <div clasName="button-container">
        <Buttons />
      </div>
    </div>
  );
}

export default Contact;
