import React from 'react'
import Moons from "../svg/full-moon-moon-svgrepo-com.svg"
import "./Moon.css"
function Moon() {
  return (
    <div className='moon-div'>
      <img src={Moons} alt="moon" className='moon' />
      
    </div>
  )
}

export default Moon