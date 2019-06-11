import React from 'react'
import './CreativePortfolio.css'
import CreativePortfolioItem from './CreativePortfolioItem'
import fiberArtItem from './FiberArtItem'

// Fiber Arts Items
const fiberArts = [
  {
    src: "./CreativeImages/poodles.png",
    name: "Poodle",
    description: "Poodle Embroidery"
  },

  {
    src: "./CreativeImages/jellyfish.png",
    name: "Jellyfish",
    description: "An Educational Game for Kids!",
  },

  {
    src: "./CreativeImages/music-note.png",
    name: "Music Note",
    description: "An Educational Game for Kids!",
  },

  {
    src: "./CreativeImages/ boo.png",
    name: "Boo",
    description: "I'm here for the boos",
  },

  {
    src: "./CreativeImages/ bamboo.png",
    name: "Bamboo",
    description: "Bamboo",
  },

  {
    src: "./CreativeImages/ hamsa.png",
    name: "Hamsa",
    description: "Hamsa",
  },

  {
    src: "./CreativeImages/ polarbear.png",
    name: "Polar Bear",
    description: "A bear!",
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
  const CreativePortfolioItems = items.map(({ src, name, description, url }) => {
    return (
      <CreativePortfolioItem
        src={src}
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