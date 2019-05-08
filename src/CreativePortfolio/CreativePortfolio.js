import React from 'react'
import './CreativePortfolio.css'
import CreativePortfolioItem from './CreativePortfolioItem'

// Creative Portfolio Items 
const items = [
  { name: "Jellyfish", description: "Anna's Name", url: "" },
  { name: "Polar Bear", description: "More more more", url: "" },
  { name: "Cruisin' Poodles", description: "A patch inspired by..", url: "" },
  { name: "Last One 4 real", description: "Last One", url: "" },
]

// [{}, {}, {}].map() -> [<>, <>, <>]

// Render Portfolio Items
const renderItems = () => {
  const CreativePortfolioItems = items.map(({ name, description, url }) => {
    return (
      <CreativePortfolioItem
        name={name}
        description={description}
        url={url}
      />)
  })

  return CreativePortfolioItems
};

const CreativePortfolio = (props) => {
  return (
    <div className="cp">
      <h1 className="cp__title">Creative Portfolio Page</h1>
      {renderItems()}
    </div>
  )

}

export default CreativePortfolio 