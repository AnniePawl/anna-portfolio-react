import React from 'react'
import TechPortfolioItem from './TechnicalTPortfolioItem'

// Portfolio Items 
const items = [
  { name: "Anna", description: "Anna's Name", url: "" },
  { name: "More", description: "More more more", url: "" },
  { name: "Last One", description: "Last One", url: "" },
]


// Render Portfolio Items
const renderItems = () => {
  return items.map(({ name, description, url }) => {
    return (
      <CreativePortfolioItem
        name={name}
        description={description}
        url={url}
      />)
  })
};

const CreativePortfolio = (props) => {
  return (
    <h1>Tech Portfolio Page</h1>
  )

}

export default TechPortfolio 