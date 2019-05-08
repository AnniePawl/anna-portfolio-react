import React from 'react'
import TechPortfolioItem from './TechlPortfolioItem'


// Portfolio Items 
const items = [
  {
    name: "Calcmon",
    description: "An Educational Game for Kids!",
    url: "",
    src: "./Images/happy-calcmon.png"
  },
  { name: "More", description: "More more more", url: "" },
  { name: "Last One", description: "Last One", url: "" },
  { name: "Last One 4 real", description: "Last One", url: "" },
]


// Render Portfolio Items
const renderItems = () => {
  const TechPortfolioItems = items.map((item) => {
    return (
      <TechPortfolioItem
        {...item}
      />)
  })

  return TechPortfolioItems
};


const TechPortfolio = (props) => {
  return (
    <div>
      <h1 className="tp__title">Technical Portfolio Page</h1>
      {renderItems()}
    </div>
  )
}

export default TechPortfolio