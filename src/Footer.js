import React from 'react'

export default function Footer() {
    return (
        <div className = 'footer-container'>
            <img className = 'footer-logo' src = "/images/vectorpaint.svg" alt = "footer logo" />

            <ul className = 'footer-items-container'>
                <li className = 'footer-item'><a className = 'footer-links' href = "google.com">About</a></li>
                <li className = 'footer-item'><a className = 'footer-links' href = "google.com">Services</a></li>
                <li className = 'footer-item'><a className = 'footer-links' href = "google.com">Projects</a></li>
            </ul>

            <div className = 'social-media-container'>
                <i className = "fa-brands fa-square-facebook social-media-icon"></i>
                <i className = "fa-brands fa-instagram social-media-icon"></i>
                <i className = "fa-brands fa-twitter social-media-icon"></i>
                <i className = "fa-brands fa-pinterest social-media-icon"></i>
            </div>
        </div>
    )
}