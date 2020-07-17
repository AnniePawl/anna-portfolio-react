import React from 'react';
import PortfolioNav from './PortfolioNav/portfolioNav';
import PortfolioSections from './PortfolioSections';
import TechnicalSection from './Projects/Projects';
import DesignSection from './DesignSection/DesignSection';
import WritingSection from './WritingSection/WritingSection';
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
