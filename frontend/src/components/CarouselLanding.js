import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap'
import image1 from '../media/testCaroImages/image1.jpg';
import image2 from '../media/testCaroImages/image2.jpg';
import image3 from '../media/testCaroImages/image3.jpg';
import styles from './CarouselLanding.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      centerMode: true,
      centerPadding: '60px'
    };
    return (
        <div className="slider-container">
            
<Slider {...settings}>  
        <div>
            <img src={image1} alt="salad"></img>
            <h3>Image One</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
            <img src={image2} alt="chicken"></img>
            <h3>Image Two</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
            <img src={image3} alt="broccoli" />
            <h3>Image Three</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Slider>

        </div>
    
      
    );
  } 

export default MySlider;
  

/* const CarouselLanding = () => {
  return (
    <>
    <Carousel indicators={false} className="carousel-dark">
      
      <Carousel.Item>

        <Row>

          <Col className={styles["container-img-carousel"]}>
            <img
            className={styles["slider"]}
            src={image1}
            alt="Recipe of the day"
            />
          </Col>

          <Col>
            
              <h3>Recipe of the day </h3>
              <h4>Pasta with Tomato sauce.</h4>
              <p>Simple but very tasty</p>
                          
          </Col>

        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row>

          <Col className={styles["container-img-carousel"]}>
            <img
            className={styles["slider"]}
            src={image2}
            alt="Image of a chicken"
            />
          </Col>

          <Col>
            
              <h3>Do you still have chicken in the fridge?</h3>
              <p>Quick recipes for lunch time</p>
            
          </Col>

        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row>

          <Col className={styles["container-img-carousel"]}>
            <img
            className={styles["slider"]}
            src={image3}
            alt="Photo of a salad"
            />
          </Col>

          <Col>
              <h3>Only brocoli in the pantry? </h3>
              <p>We have the recipe that fits to you</p>
          </Col>

        </Row>
      </Carousel.Item>

    </Carousel>
    </>
  );
}

export default CarouselLanding; */