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
// Publication Items 
const publications = [
  {
    name: "Leading the Way with Redi",
    description: "Checkout my piece published in Hacker Noon",
    url: "https://hackernoon.com/redis-gamification-60e49b5494ae",
  },

  {
    name: "Bringing Back the Barter Economy",
    description: "Published in UX Collective",
    url: "https://uxdesign.cc/bringbarterback-72b530ba1c59"
  },

  {
    name: "Testing",
    description: "Testing, testing, 123",
    url: ""
  },

]

export default WritingPortfolio

