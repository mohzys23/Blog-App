import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './TopCarousel.scss';
import iphone from '../Assets/iphone12-image.jpg';
import british from '../Assets/british-airways.jpg';
import G5 from '../Assets/5G.jpg';
import { Link } from "react-router-dom";

class TopCarousel extends Component {
    render () {
        return (


            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={iphone}
      alt="First slide"
    />
    <Carousel.Caption className="Caption">
      <h3>iPhone 12</h3>
<p><Link to="/posts">Read more</Link></p>    
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={british}
      alt="Third slide"
    />

    <Carousel.Caption className="Caption">
      <h3>British Airways fined £20m over data breach</h3>
<p><Link to="/posts">Read more</Link></p>    
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={G5}
      alt="Third slide"
    />

    <Carousel.Caption className="Caption">
      <h3>Tech Tent: Who needs 5G?</h3>
   <p><Link to="/posts">Read more</Link></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




        )
    }
}


export default TopCarousel;