import React from 'react'
import Fog from '../components/Home/Fog/Fog'
import sf from '../assets/sf.svg'
import './Home.css'

const Home = (props) => {
  return (
    <div>
      <h1 className="home__title">
        This is the Home Page!
      </h1>

      <Fog />

    </div >
  )
}


export default Home