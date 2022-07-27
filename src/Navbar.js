import React from 'react'
import "./index.css"

export default function Navbar(){
    
    const handleClick = () => {
        const mNavbar = document.getElementById("mobileNavbar");
        console.log(mNavbar.classList)
        mNavbar.classList.toggle("d-none");
        mNavbar.classList.toggle("mobile-navbar")
    }

    return (
        <div className = "navbar-container">
           <img src = '/images/logo.svg' alt = "logo" className = 'logo' />
           <i class="bars-icon fa-solid fa-bars d-none" id = "navbarBars" onClick = {handleClick}></i>

           <div className = 'mobile-navbar' id = "mobileNavbar">
              <div className = 'mobile-navbar-items-list'>
                <p className = 'mobile-navbar-item'><a className = 'mobile-navbar-link' href = "google.com">About</a></p>
                <p className = 'mobile-navbar-item'><a className = 'mobile-navbar-link' href = "google.com">Services</a></p>
                <p className = 'mobile-navbar-item'><a className = 'mobile-navbar-link' href = "google.com">Projects</a></p>
              </div>
              <button className = 'mobile-contact-button'>Contact</button>
           </div>

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