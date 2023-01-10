import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../media/images/image1.jpg';
import image2 from '../media/images/image2.jpg';
import image3 from '../media/images/image3.jpg';
import styles from './CarouselLanding.module.css';

const CarouselLanding = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className={styles["slider"]}
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Recipe of the Day 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles["slider"]}
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Recipe of the Day 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles["slider"]}
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Recipe of the Day 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default CarouselLanding;