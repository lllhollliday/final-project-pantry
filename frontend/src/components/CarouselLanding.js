import  {useContext} from "react";
import { globalContext } from "../context/globalContext";
import {Carousel, CarouselItem} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import styles from './CarouselLanding.module.css'
// import styled from "styled-components";


const CarouselLanding = () => {
    const {sliderItems} = useContext(globalContext);

    return(
        <Carousel>
            {sliderItems.map((item, index) => {
                return (<Carousel.Item key={index} style={{width:"100vw", height:"400px", textAlign:"center"}}>
                    <img src={item.image} alt={item.label} style={{width:"35vw", height:"300px"}} interval={100}/>
                    <h3>{item.label}</h3>
                    {/* <p>description here</p> */}
                </Carousel.Item>
                )
            })}
        </Carousel>

    )

};

export default CarouselLanding;

