import React from 'react';
import Buttons from './Buttons';
import './styles/Contact.scss';

function Contact() {
	return (
		<div className="contact-container">
			<div className="about__content">
				<h1 className="contact__heading">Contact</h1>
			</div>
			<div className="contact__button_container">
				<Buttons />
			</div>
		</div>
	);
}

export default Contact;
