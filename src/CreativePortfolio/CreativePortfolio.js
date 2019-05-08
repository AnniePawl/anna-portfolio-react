import React from 'react'
import './CreativePortfolio.css'
import CreativePortfolioItem from './CreativePortfolioItem'
import Footer from '../Footer/Footer'

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
    <div className="cp">
      <h1 className="cp__title">Creative Portfolio Page</h1>
      {renderItems()}
      <Footer />
    </div>
  )

}

export default CreativePortfolio 