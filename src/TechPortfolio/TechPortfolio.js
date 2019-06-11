import React from 'react'
import TechPortfolioItem from './TechlPortfolioItem'

// Tech Portfolio Items 
const projects = [
  {
    name: "Calcmon",
    description: "An Educational Game for Kids!",
    url: "",
    // src: "./Images/happy-calcmon.png"
  },

  {
    name: "Toolbox",
    description: "More more more",
    url: ""
  },

  {
    name: "Squirrel Away",
    description: "Last One",
    url: ""
  },

  {
    name: "Last One 4 real",
    description: "Last One",
    url: ""
  },
  {
    name: "Publicztions",
    description: "Last One",
    url: ""
  },
]

// Tech Publication Items 
const publications = [
  {
    name: "Calcmon",
    description: "An Educational Game for Kids!",
    url: "",
    // src: "./Images/happy-calcmon.png"
  },

  {
    name: "Toolbox",
    description: "More more more",
    url: ""
  },

  {
    name: "Squirrel Away",
    description: "Last One",
    url: ""
  },

  {
    name: "Last One 4 real",
    description: "Last One",
    url: ""
  },
  {
    name: "Publicztions",
    description: "Last One",
    url: ""
  },
]


// Render Portfolio Items
const renderItems = (items) => {
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
      <h1 className="tp__title">Technical Portfolio</h1>
      <h2 className="tp__projectsHeading">Projects</h2>
      {renderItems(projects)}
      <h2 className="tp__publicationsHeading">Publications</h2>
      {renderItems(publications)}
      <style>{`body {background-color: red}`}</style>
    </div>
  )
}



export default TechPortfolio