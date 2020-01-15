import React from 'react'
import './styles/Home.scss'
import Navbar from '../Navbar/Navbar'
import Fog from './Fog/Fog'


class Home extends React.Component {
  render() {
    return (

      <div>
        <Navbar />
        <Fog />
      </div>
    )
  }
}

export default Home