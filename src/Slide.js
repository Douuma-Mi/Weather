import React from 'react'
import img1 from './assets/860_ny.jpg'
import img2 from './assets/0701131734937-web-tete.jpg'
import img3 from './assets/17388135906373ad932fc7d_15-plus-belles-vues-panoramique-du-monde.jpg'
import img4 from './assets/architecture-gfef317936-1280.jpg'
import img5 from './assets/shutterstock-1829492048_2_1200.jpg'
import img6 from './assets/superficie-terre.jpg'
import { Carousel } from 'react-bootstrap'
import "./Slide.css"
function Slide() {
  return (
    <Carousel>
    <Carousel.Item interval={3000}>
    <img className='image' src={img1}/>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <img className='image' src={img2} alt='errur'/>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <img className='image' src={img3} alt='errur'/>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <img className='image' src={img4} alt='errur'/>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <img className='image' src={img5} alt='errur'/>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <img className='image' src={img6} alt='errur'/>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slide