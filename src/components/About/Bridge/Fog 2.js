import React from 'react';
import './styles/Fog.scss'
import bridge from '../../../assets/bridge3.svg'

function Fog() {
  return (

    <div className='sf_scene'>
      {/* Fog */}
      <div className='fog'>

        <div class="fog__img fog__img__first">
        </div>
        <div class="fog__img fog__img__second">
        </div>

        {/* Bridge SVG */}
        <img alt='bridge' className='bridge' src={bridge}></img>
      </div>



    </div>

  )
}


export default Fog