import React from 'react'
import './About.css'
import Footer from '../Footer/Footer'


const About = (props) => {
    return (
        <div className="about">
            <h1 className="about__title">
                The About Page!
            </h1>

            {/* Footer */}
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default About