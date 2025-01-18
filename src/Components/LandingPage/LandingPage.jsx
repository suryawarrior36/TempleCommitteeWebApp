import React from 'react'
import './LandingPage.css';
import Nagland from '../../assets/land-amman.jpg';
const LandingPage = () => {
  return (
    <>
      <div className='land-el'>
        <div className='land-left'>
          {/* <h1 className='greet1'>Welcome to</h1> */}
          <h1 className='greet2'>Sri Nagathamman Kovil</h1>
          <h1 className='connect'><b>"Divine Blessings Await"</b></h1>
          <p className='land-text'>"Welcome to Sri Nagathamman Kovil", a place of devotion, peace, and divine blessings. Join us in honoring tradition through special poojas, temple events, and spiritual services. May Sri Nagathamman’s grace guide and protect you."</p>
        </div>
        <div className='land-right'>
          <img className='land-img' src={Nagland} alt='landing Image'/>
        </div>
      </div>
    </>
  )
}

export default LandingPage