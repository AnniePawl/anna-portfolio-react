import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './styles/portfolioNav.scss';

function PortfolioNav() {
	return (
		<div className="navbar">
			<ul>
				{/* Home */}
				<li>
					<HashLink smooth to="/#home">
						Home
					</HashLink>
				</li>

				{/* Projects */}
				<li>
					<HashLink smooth to="/portfolio/#portfolio-section">
						Projects
					</HashLink>
				</li>

				{/* Writing */}
				<li>
					<HashLink smooth to="/portfolio/#writing-section">
						Writing
					</HashLink>
				</li>
			</ul>
		</div>
	);
}

export default withRouter(PortfolioNav);
