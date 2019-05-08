import React from 'react'
import './CreativePortfolio.css'
import CreativePortfolioItem from './CreativePortfolioItem'
import fiberArtItem from './FiberArtItem'

// Fiber Arts Items
const fiberArts = [
  {
    name: "Calcmon",
    description: "An Educational Game for Kids!",
  },

  {
    name: "Toolbox",
    description: "More more more"
  }
]

// Creative Project Items 
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

// Creative Publication Items 
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

// [{}, {}, {}].map() -> [<>, <>, <>]

// Render Portfolio Items
const renderItems = (items) => {
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
      <h1 className="cp__title">Creative Portfolio</h1>
      <h2 className="cp__fiberArtsHeading">Fiber Arts</h2>
      {renderItems(fiberArts)}
      <h2 className="cp__projectsHeading">Projects</h2>
      {renderItems(projects)}
      <h2 className="cp__publicationsHeading">CreativePublications</h2>
      {renderItems(publications)}
    </div>
  )

}

export default CreativePortfolio 