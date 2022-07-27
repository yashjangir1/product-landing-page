import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Footer from './Footer'
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
          <Services 
            heading = "Graphic Design"
            background = "url('images/desktop/image-graphic-design.jpg')"
            color = "hsl(167, 40%, 24%)"
            para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit sequi molestias itaque. Voluptatem explicabo deleniti quaerat corrupti excepturi voluptate."
          />
          <Services 
            heading = "Photography"
            background = "url('images/desktop/image-photography.jpg')"
            color = "hsl(198, 62%, 26%)"
            para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit sequi molestias itaque. Voluptatem explicabo deleniti quaerat corrupti excepturi voluptate."
          />
      </div>

      <div className = 'projects-main-container'>
        <h1 className = 'projects-heading'>Client Testimonials</h1>
        <div class = "all-clients-container">
            <Projects 
              image = "/images/image-emily.jpg"
              name = "Emily R."
              position = "Marketing Director"
              para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad nulla aliquid ut! Voluptatum, debitis."
            />
            <Projects 
              image = "/images/image-thomas.jpg"
              name = "Thomas S."
              position = "Chief Operating Officer"
              para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad nulla aliquid ut! Voluptatum, debitis."
            />
            <Projects 
              image = "/images/image-jennie.jpg"
              name = "Jennie F."
              position = "Business Owner"
              para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad nulla aliquid ut! Voluptatum, debitis."
            />
        </div>
      </div>


      <div className = 'images-container'>
        <img className = 'product-image' src = "/images/desktop/image-gallery-milkbottles.jpg" alt = "product" />
        <img className = 'product-image' src = "/images/desktop/image-gallery-orange.jpg" alt = "product" />
        <img className = 'product-image' src = "/images/desktop/image-gallery-cone.jpg" alt = "product" />
        <img className = 'product-image' src = "/images/desktop/image-gallery-sugarcubes.jpg" alt = "product" />
      </div>


      <Footer />
      
    </div>
  )
}
