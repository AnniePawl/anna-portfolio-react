import React from 'react'
import './CreativePortfolio.css'

const CreativePortfolioItem = ({ url, name, description, src }) => {
  let img = undefined
  if (src !== undefined) {
    img = <img src={src} />
  }
  return (
    <div className="portfolio-item">
      <a className="portfolio-item_a" href={url}>
        {img}
        <h1 className="portfolio-item_name">{name}</h1>
        <p className="portfolio-item_description">{description}</p>
      </a>
    </div>
  )
}

export default CreativePortfolioItem