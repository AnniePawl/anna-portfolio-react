import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pom from '../../assets/pomegranate/Pom'
import TechnicalProjects from '../TechnicalProjects/TechnicalProjects'
import WrittenWork from '../WrittenWork/WrittenWork'
import './styles/Home.scss'
import Navbar from '../Navbar/Navbar'
import Fog from './Fog/Fog'
import sf from '../../assets/sf.svg'

class Home extends React.Component {
  render() {
    return (

      <div>
        <Navbar />

        <Fog />
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