import React from 'react'
import WritingPortfolioItem from './WritingPortfolioItem'

// Portfolio Items 
const items = [
  { name: "Anna", description: "Anna's Name", url: "" },
  { name: "More", description: "More more more", url: "" },
  { name: "Last One", description: "Last One", url: "" },
  { name: "Last One 4 real", description: "Last One", url: "" },
]


// Render Portfolio Items
const renderItems = () => {
  const WritingPortfolioItems = items.map(({ name, description, url }) => {
    return (
      <WritingPortfolioItem
        name={name}
        description={description}
        url={url}
      />)
  })

  return WritingPortfolioItems
};

const WritingPortfolio = (props) => {
  return (
    <div>
      <h1 className="wp__title">
        Welcome to my Writing Portfolio!
      </h1>
    </div>
  )
}


export default WritingPortfolio

