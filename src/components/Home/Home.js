import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pom from './Pom/Pom'
import './styles/Home.scss'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {/* Pom div to CSS Animations */}
        <div>
          <Link to="/">
            <Pom />
          </Link>

        </div>

      </div>
    )
  }
}

export default Home