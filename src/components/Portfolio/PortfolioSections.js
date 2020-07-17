import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './styles/Portfolio.scss';

function PortfolioSections() {
	return (
		<div className="portfolio_sections__container">
			{/* List of Projects */}
			<div className="projects__list">
				<h1 className="projects__heading"> Projects</h1>
				<HashLink smooth to="/portfolio/#dwc" className="projects__p">
					<p>Drawing With Code</p>
				</HashLink>

				<HashLink smooth to="/portfolio/#plates" className="projects__p">
					<p>Rejected Vanity Plates</p>
				</HashLink>
			</div>

			{/* List of Projects
			<div className="portfolio_sections__projects">
				<h1 className="portfolio_sections__heading">Projects</h1>
				<ul>
					<HashLink smooth to="/portfolio/#technical-section">
						<li>Drawing With Code</li>
					</HashLink>
					<li>Rejected Vanity Plates</li>
				</ul>
			</div> */}

			{/* Design Section */}
			<div className="projects__list">
				<HashLink smooth to="/portfolio/#design-section">
					<h1 className="projects__heading">Design</h1>
				</HashLink>
			</div>

			{/* Writing Section */}
			<div className="projects__list">
				<HashLink smooth to="/portfolio/#writing-section">
					<h1 className="projects__heading">Writing</h1>
				</HashLink>

				<a href="https://uxdesign.cc/bringbarterback-72b530ba1c59" target="blank">
					Bringing Back the Barter Economy
				</a>

				<a href="https://medium.com/hackernoon/redis-gamification-60e49b5494ae" target="blank">
					Leading the Way with Redis
				</a>
			</div>
		</div>
	);
}

export default PortfolioSections;
