import React from 'react'
import "./index.css"

export default function Navbar(){
    return (
        <div className = "navbar-container">
           <img src = '/images/logo.svg' alt = "logo" className = 'logo' />
           <div className = 'navbar-contents-container'>
                <ul className = 'navbar-items-container'>
                    <li className = 'navbar-item'><a className = 'navbar-links' href = "google.com">About</a></li>
                    <li className = 'navbar-item'><a className = 'navbar-links' href = "google.com">Services</a></li>
                    <li className = 'navbar-item'><a className = 'navbar-links' href = "google.com">Projects</a></li>
                </ul>
                <button className = 'contact-button'>Contact</button>
           </div>
        </div>
    )
}