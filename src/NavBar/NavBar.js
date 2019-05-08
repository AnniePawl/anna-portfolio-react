import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = (props) => {
  return (
    <div className="navbar">
      <Link className="navbar__link" to="/" >Home</Link>
      <Link className="navbar__link" to="/About">About</Link>
      <Link className="navbar__link" to="/Contact" >Contact</Link>
      <Link className="navbar__link" to="/TechPortfolio" >TechPortfolio</Link>
      <Link className="navbar__link" to="/CreativePortfolio">Creative Portfolio</Link>
      <Link className="navbar__link" to="/WritingPortfolio">Writing Portfolio</Link>
    </div >
  )
}

export default NavBar