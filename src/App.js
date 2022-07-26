import React from 'react'
import Navbar from './Navbar'
import './index.css'

export default function App(){
  return (
    <div className = 'main-container'>
      <Navbar />
      <h1 className = 'home-page-title'>WE ARE CREATIVES</h1>
      <img className = 'arrow-down' src = "./images/icon-arrow-down.svg" alt = "arrow down" />
    </div>
  )
}
