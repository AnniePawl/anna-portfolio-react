import React from 'react'
import CreativePortfolioItem from './CreativePortfolioItem'
import foot from '../Footer'

// Portfolio Items 
const items = [
  { name: "Anna", description: "Anna's Name", url: "" },
  { name: "More", description: "More more more", url: "" },
  { name: "Last One", description: "Last One", url: "" },
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
    <div>
      <h1>Creative Portfolio Page</h1>
      {renderItems()}
      <foot />
    </div>
  )

}

export default CreativePortfolio 