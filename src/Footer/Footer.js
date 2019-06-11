import React from 'react'
import './Footer.css'
import Test from '../Test'

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer_title">FOOTER</h1>
      <h2>Footer Content</h2>
      <Test title="Hey Title" url="111" />
      <Test title="Another one" url="222" />
      <Test title="yay" url="333" />
    </div>

  )
}

export default Footer

