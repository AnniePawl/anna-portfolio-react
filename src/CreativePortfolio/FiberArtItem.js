import React from 'react'
import './CreativePortfolio.css'

const fiberArtItem = ({ name, description }) => {
  return (
    <div className="fa__item">
      <h1 className="fa__name">{name}</h1>
      <p className="fa__description">{description}</p>
    </div >
  )
}

export default fiberArtItem