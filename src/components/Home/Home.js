import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pom from '../../assets/pomegranate/Pom'
import TechnicalProjects from '../TechnicalProjects/TechnicalProjects'
import WrittenWork from '../WrittenWork/WrittenWork'
import './styles/Home.scss'
import Navbar from '../Navbar/Navbar'

import binary_heart from '../../assets/blue-binary-heart.svg'
class Home extends React.Component {
  render() {
    return (

      <div>
        <Navbar />

        <div className='home__container'>
          {/* About Me */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1 className='home__header'>About Me</h1>
          </div>

          {/* CSS ANIMATIONS */}
          <div className='home__button'>
            <Link to="/css-animations">
              <img src={binary_heart}></img>
            </Link>
            <h1 className='home__header'>CSS Animations</h1>
          </div>

          {/* Technical Projects */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1 className='home__header'>Technical Projects</h1>
          </div>


          {/* Written Work */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1 className='home__header'>Written Work</h1>
          </div>


          {/* Graphic Desin */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1 className='home__header'>Graphic Design</h1>
          </div>

          {/* Embroidery */}
          <div className='home__button'>
            <Link to="/">
              <Pom />
            </Link>
            <h1 className='home__header'>Embroidery</h1>
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