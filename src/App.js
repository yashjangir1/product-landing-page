import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import './index.css'

export default function App(){
  return (
    <div>
      <div className = 'home-page-container'>
        <Navbar />
        <h1 className = 'home-page-title'>WE ARE CREATIVES</h1>
        <img className = 'arrow-down' src = "./images/icon-arrow-down.svg" alt = "arrow down" />
      </div>

      <About 
        title = "Tranform your brand"
        para = "We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        image = "/images/desktop/image-transform.jpg"
        orderI = "1"
        orderT = "0"
      />
      <About  
        title = "Stand out to the right audience"
        para = "using a collaboration formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places"
        image = "/images/desktop/image-stand-out.jpg"
        orderI = "0"
        orderT = "1"
      />

      <div className = 'services-main-container'>
          <Services />
          <Services />
      </div>
    </div>
  )
}
