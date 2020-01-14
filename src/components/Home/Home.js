import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pom from '../../assets/pomegranate/Pom'
import TechnicalProjects from '../TechnicalProjects/TechnicalProjects'
import WrittenWork from '../WrittenWork/WrittenWork'
import './styles/Home.scss'
import Navbar from '../Navbar/Navbar'

class Home extends React.Component {
  render() {
    return (

      <div>
        <Navbar />

        <div className='home__container'>


          {/* Technical Projects Section  */}
          {/* <div>
            < TechnicalProjects />
          </div> */}

          {/* Writing Portfolio Section */}
          {/* <div>
            <WrittenWork />
          </div> */}
        </div>


      </div>
    )
  }
}

export default Home