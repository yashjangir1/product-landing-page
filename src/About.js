import React from 'react'

export default function About(props) {
    return (
        <div className = 'about-page-container'>
            <div className = "about-page-text-container" style = {{order : props.orderT}}>
                <div className = 'about-page-text-c-inner'>
                    <h1 className = 'about-page-heading'>{props.title}</h1>
                    <p className = 'about-page-para'>{props.para}</p>
                    <a className = 'learn-more-button' href="www.google.com">Learn more</a>
                </div>
            </div>
            <img className = 'about-page-image' src = {props.image} alt = "About" style = {{order : props.orderI}} />
        </div>
    )
}