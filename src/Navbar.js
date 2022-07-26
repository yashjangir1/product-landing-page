import React from 'react'
import "./index.css"

export default function Navbar(){
    return (
        <div className = "navbar-container">
           <img src = '/images/logo.svg' alt = "logo" className = 'logo' />
           <div className = 'navbar-contents-container'>
                <ul className = 'navbar-items-container'>
                    <li className = 'navbar-item'>About</li>
                    <li className = 'navbar-item'>Services</li>
                    <li className = 'navbar-item'>Projects</li>
                </ul>
                <button className = 'contact-button'>Contact</button>
           </div>
        </div>
    )
}