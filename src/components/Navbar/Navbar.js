import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './styles/Navbar.scss'

function Navbar() {
  return (

    <div className="nav">
      <nav className='navbar'>
        <ul>

          {/* Code */}
          <li>
            <Link className="navbar__link" to="/css-animations">Code</Link>
          </li>

          {/* CSS Animations */}
          <li>
            <Link className="navbar__link" to="/css-animations">CSS Animations</Link>
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

