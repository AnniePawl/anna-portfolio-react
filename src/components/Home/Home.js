import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pom from '../../assets/pomegranate/Pom'
import './styles/Home.scss'

class Home extends React.Component {
  render() {
    return (

      <div>
        <h1>Home</h1>

        <div className='home_container'>
          {/* About Me */}
          <div>
            <Link to="/">
              <Pom />
            </Link>
            <h1>About Me</h1>
          </div>

          {/* CSS ANIMATIONS */}
          <div>
            <Link to="/">
              <Pom />
            </Link>
            <h1>CSS Animations</h1>
          </div>

          {/* Technical Projects */}
          <div>
            <Link to="/">
              <Pom />
            </Link>
            <h1>Technical Projects</h1>
          </div>


          {/* Written Work */}
          <div>
            <Link to="/">
              <Pom />
            </Link>
            <h1>Written Work</h1>
          </div>


          {/* Graphic Desin */}
          <div>
            <Link to="/">
              <Pom />
            </Link>
            <h1>Graphic Design</h1>
          </div>

          {/* Embroidery */}
          <div>
            <Link to="/">
              <Pom />
            </Link>
            <h1>Embroidery</h1>
          </div>
        </div>


      </div>
    )
  }
}

export default Home