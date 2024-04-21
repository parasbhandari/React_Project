import React from 'react'
import earths from "../svg/earth-svgrepo-com.svg"
import "./Earth.css"
function Earth() {
  return (
    <div>
      <img src={earths} alt="earth-image" className='earth'/>
    </div>
  )
}

export default Earth