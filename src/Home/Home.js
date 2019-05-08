import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'

const Home = (props) => {
  return (
    <div>
      <h1 className="home__title">
        This is the Home Page!
      </h1>
      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}


export default Home