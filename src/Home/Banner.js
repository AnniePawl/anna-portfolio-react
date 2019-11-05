import React from 'react'
import './Banner.scss'

function Banner() {
  return (
    <div>
      <div className='banner_container'>

        {/* TRIANGLES */}
        <div className='triangle1'></div>

        {/* BULLSEYE ONE*/}
        <div className='target target1'>
          <div className='inner_target1'></div>
        </div>

        {/* BULLSEYE2 */}
        <div className='target target2'>
          <div className='inner_target2'></div>
        </div>

      </div>

    </div>

  )
}

export default Banner