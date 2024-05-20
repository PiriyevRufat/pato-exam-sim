import React from 'react'
import './Welcome.css'
const Welcome = () => {
  return (
   <div className='welcomesect'>
   <div className="container">
   <div className="row">
   <div className="col-md-6 p-t-45 p-b-30">
   <div className='cardwelcome'>
   <span>Italian Restaurant</span>
   <h3>WELCOME</h3>
   <p>
   Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
   </p>
   <a href="">OUR STORY</a>
   </div>
   </div>
   <div className="col-6">
   <div className='imagecard-welcome'>
   <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" width='390px' height='390px' alt="" />
   </div>
   </div>
   </div>
   </div>
   </div>
  )
}

export default Welcome
