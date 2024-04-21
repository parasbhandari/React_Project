import React from 'react'
import "./Space.css"
import Moon from "./Moon"
import Earth from './Earth'
import Rocket from './Rocket'
import {useState,useEffect} from 'react'
function Space() {
  const [shipAction,setShipAction]=useState();
  const startShip=()=>{
    setShipAction("fly")
  }
  const landShip=()=>{
    setShipAction("land")
  }
  return (
    <div className='space'> 
      
      <button onClick={startShip}>Launch</button>
       <section className='env'>
       <Rocket shipAction={shipAction}/>
       <Moon/>
       <Earth/> 
       
       
       </section>
      <button onClick={landShip}>Land</button>
      
    </div>
  )
}

export default Space