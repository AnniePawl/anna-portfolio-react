import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div home_bottom_container>


        <div className='home_bottom_rectangle'>

          {/* HOME CIRCLES Full  */}
          <div className='home_circles'>

            {/* CIRCLE ONE - CSS ANIMATIONS */}
            <div className='home_circle home_circle1'>
            </div>

            {/* CIRCLE TWO */}
            <div className='home_circle home_circle2'>
            </div>

            {/* CIRCLE THREE */}
            <div className='home_circle home_circle3'>

            </div>


            {/* CIRCLE FOUR */}
            <div className='home_circle home_circle4'>

            </div>

            {/* CIRCLE FIVE */}
            <div className='home_circle home_circle5'>

            </div>



          </div>

        </div>


        {/* RED HALF CIRCLES */}
        <div className='home_half_circles'>
          {/* Circle 1 */}
          <div className='half_circle'>
            <div className='inner_circle'></div>
          </div>

          {/* Circle 2 */}
          <div className='half_circle'>
            <div className='inner_circle'></div>
          </div>

          {/* Circle 3 */}
          <div className='half_circle'>
            <div className='inner_circle'></div>
          </div>

          {/* Cirlce 4 */}
          <div className='half_circle'>
            <div className='inner_circle'></div>
          </div>

          {/* Circle 5 */}
          <div className='half_circle'>
            <div className='inner_circle'></div>
          </div>

        </div>


      </div>
    </div>

  )
}

export default Home