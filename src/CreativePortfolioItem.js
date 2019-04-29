import React from 'react'
import 'CreativePortfolioItem.css'

const CreativePortfolioItem = ({ url, name, description }) => {
  return (
    <div className="portfolio-item">
      <a className="portfolio-item_a" href={url}>
        <h1 className="portfolio-item_name">{name}</h1>
        <p className="portfolio-item_description">{description}</p>
      </a>
    </div>
  )
}

export default CreativePortfolioItem