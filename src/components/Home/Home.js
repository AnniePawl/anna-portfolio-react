import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pom from '../../assets/pomegranate/Pom'
import TechnicalProjects from '../TechnicalProjects/TechnicalProjects'
import WrittenWork from '../WrittenWork/WrittenWork'
import './styles/Home.scss'

class Home extends React.Component {
  render() {
    return (

      <div>

        <div className='home_container'>
          {/* About Me */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1>About Me</h1>
          </div>

          {/* CSS ANIMATIONS */}
          <div className='home__button'>
            <Link to="/css-animations">
              <Pom />
            </Link>
            <h1>CSS Animations</h1>
          </div>

          {/* Technical Projects */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1>Technical Projects</h1>
          </div>


          {/* Written Work */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1>Written Work</h1>
          </div>


          {/* Graphic Desin */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1>Graphic Design</h1>
          </div>

          {/* Embroidery */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1>Embroidery</h1>
          </div>
        </div>

        {/* Technical Projects Section  */}
        <div>
          < TechnicalProjects />
        </div>

        {/* Writing Portfolio Section */}
        <div>
          <WrittenWork />
        </div>


      </div>
    )
  }
}

export default Home