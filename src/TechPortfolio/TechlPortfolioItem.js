import React from 'react'
import './TechPortfolio.css'

const TechPortfolioItem = ({ url, name, description, src }) => {
  return (
    <div className="tech-item">
      <a className="tech-item_a" href={url}>
        <h1 className="tech-item_name">{name}</h1>
        <p className="tech-item_description">{description}</p>
        <img src={src} />
      </a>
    </div>
  )
}


export default TechPortfolioItem