import  {useContext} from "react";
import { globalContext } from "../context/globalContext";
import {Carousel, CarouselItem, CarouselControl} from 'react-bootstrap';
// import { Row, Col } from 'react-bootstrap';
// import styles from './CarouselLanding.module.css';
import styled from 'styled-components';


const CarouselLanding = () => {
    const {sliderItems} = useContext(globalContext);

    return(
        <Carousel controls={true} indicators={false}>
            {sliderItems.map((item, index) => {
                return (
                <CarouselItem 
                    key={index} 
                    style={{
                        width:"100vw", 
                        height:"400px", 
                        textAlign:"center", 
                        paddingTop:"50px", 
                        borderRadius: "2rem"
                        }}>
                    <StyledImg 
                        src={item.image} 
                        alt={item.label} 
                        // style={{width:"35vw", height:"300px", borderRadius: "25px"}} 
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

const StyledImg = styled.img`
  width: 35vw;
  height: 300px;
  border-radius: 2rem;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    border-radius: 0;
  }
`;
