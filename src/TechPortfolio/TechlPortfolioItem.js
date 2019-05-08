import React from 'react'
import './TechPortfolio.css'
import Footer from '../Footer/Footer'

const TechPortfolioItem = ({ url, name, description, src }) => {
  return (
    <div className="tech-item">
      <a className="tech-item_a" href={url}>
        <h1 className="tech-item_name">{name}</h1>
        <p className="tech-item_description">{description}</p>
        <img src={src} />
      </a>

      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default TechPortfolioItem