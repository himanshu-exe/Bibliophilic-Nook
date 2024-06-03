import React from 'react'
import Home1 from "../images/Home1.webp"
import Home2 from "../images/Home2.jpg"
import Home3 from "../images/Home3.webp"
// import Header from '../common/Header'
// import Footer from '../common/Footer'
import {Carousel} from 'react-bootstrap';
const Banner = () => {
  return (
    <>
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Home1}
            alt="First slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Home2}
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Home3}
            alt="Third slide"
          />        
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Banner