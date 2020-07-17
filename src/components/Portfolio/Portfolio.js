import React from 'react';
import PortfolioNav from './PortfolioNav/portfolioNav';
import PortfolioSections from './PortfolioSections';
import DesignSection from './DesignSection/DesignSection';
import WritingSection from './WritingSection/WritingSection';
import Plates from './Plates/Plates';
import './styles/Portfolio.scss';

function Portfolio() {
	return (
		<div id="portfolio" className="portfolio__container">
			{/* Portfolio Navbar */}
			<PortfolioNav />

			{/* Portfolio Sections Hero */}
			<div id="portfolio-section" className="portfolio__section">
				<PortfolioSections />
			</div>
			{/* Projects - Plates */}
			<div id="plates">
				<Plates />
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
