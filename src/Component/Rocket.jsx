import React from 'react'
import Rockes from "../svg/rocket-svgrepo-com.svg"
import "./Rocket.css"
function Rocket({shipAction}) {
  return (
    <div className='rocket-container'> 
      <img src={Rockes} alt="rocketimage" className={`rocket ${shipAction}`}  />
    </div>
  )
}

export default Rocket