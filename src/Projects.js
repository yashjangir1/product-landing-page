import React from 'react'

export default function Projects(props) {
    return (
        <div className = 'client-testimonial-container'>
            <img className = 'client-image' src = {props.image} alt = "client" />
            <p className = "client-para">{props.para}</p>
           
           <div class = "client-details-container">
                <h1 className = 'client-name'>{props.name}</h1>
                <p className = 'client-position'>{props.position}</p>
           </div>
        </div>
    )
}