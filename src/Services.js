import React from 'react'

export default function Services(props) {
    return (
        <div className = 'services-conatiner' style = {{backgroundImage: props.background}}>
            <div className = 'services-text-container'>
                <h1 className = 'project-heading' style = {{color : props.color}}>{props.heading}</h1>
                <p className = 'project-para' style = {{color : props.color}}>{props.para}</p>
            </div>
        </div>
    )
}