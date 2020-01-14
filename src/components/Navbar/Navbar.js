import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './styles/Navbar.scss'

function Navbar() {
  return (

    <div className="nav">
      <nav className='navbar'>
        <ul>

          {/* Code: Link to GH*/}
          <li>
            <a target='blank' href='https://github.com/AnniePawl'>Code</a>
          </li>

          {/* CSS Animations: Link to GH Page */}
          <li>
            <a target='blank' href='https://anniepawl.github.io/Pure-CSS-Animations/'>CSS Animations</a>
          </li>

          {/* Graphic Design */}
          <li>
            <Link className="navbar__link" to="/">Graphic Design</Link>
          </li>

          {/* Writing*/}
          <li>
            <Link className="navbar__link" to="/">Writing</Link>
          </li>

          {/* Emrbroidery*/}
          <li>
            <Link className="navbar__link" to="/">Embroidery</Link>
          </li>

        </ul>
      </nav>

    </div >

  )
}

export default withRouter(Navbar)

