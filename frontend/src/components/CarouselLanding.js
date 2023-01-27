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
                        height:"25rem", 
                        textAlign:"center", 
                        paddingTop:"50px", 
                        borderRadius: "2rem"
                        }}>
                    <SliderContainer>
                        <StyledImg 
                            src={item.image} 
                            alt={item.label} 
                            interval={100}
                            />
                        <Label style={{}}>
                            {item.label}
                        </Label>
                    </SliderContainer>
                    {/* <p>description here</p> */}
                </CarouselItem>
                )
            })}
        </Carousel>
    )
};

export default CarouselLanding;

const SliderContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;

const StyledImg = styled.img`
  width: 35vw;
  height: 400px;
  border-radius: 2rem;
  object-fit: cover;

  @media(max-width:1800px){
    width: 30%;
    height: auto;
    border-radius: 2rem;
  }

  @media(max-width: 992px) {
    width: 40%;
    height: auto;
    border-radius: 2rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    border-radius: 2rem;
  }
`;

const Label = styled.h3`
margin-left: 1rem;
`;

// HELLO 
