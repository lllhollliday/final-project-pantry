import  {useContext} from "react";
import { globalContext } from "../context/globalContext";
import {Carousel, CarouselItem} from 'react-bootstrap';
// import { Row, Col } from 'react-bootstrap';
import styles from './CarouselLanding.module.css'


const CarouselLanding = () => {
    const {sliderItems} = useContext(globalContext);

    return(
        <Carousel>
            {sliderItems.map((item, index) => {
                return (
                <CarouselItem 
                    key={index} 
                    style={{
                        width:"100vw", 
                        height:"400px", 
                        textAlign:"center", 
                        paddingTop:"50px"
                        }}>
                    <img 
                        src={item.image} 
                        alt={item.label} 
                        style={{width:"35vw", height:"300px", borderRadius: "25px"}} 
                        interval={100}
                        />
                    <h3 style={{
                        
                    }}>
                        {item.label}
                    </h3>
                    {/* <p>description here</p> */}
                </CarouselItem>
                )
            })}
        </Carousel>
    )
};

export default CarouselLanding;

