import { useContext } from "react"
import { Link } from "react-router-dom"
import { globalContext } from "../context/globalContext"
import { Carousel, CarouselItem } from "react-bootstrap"


// import { Row, Col } from 'react-bootstrap';
// import styles from './CarouselLanding.module.css';
import styled from "styled-components"

const CarouselLanding = () => {
  const { sliderItems } = useContext(globalContext)

  return (
 
      <Carousel controls={true} indicators={false}>
        {sliderItems.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              style={{
                width: "100vw",
                textAlign: "center",
                paddingTop: "50px",
                borderRadius: "2rem",
              }}
            >
              <StyledLink to={"/recipe/" + item.label} state={item}>
                <SliderContainer>
                  <StyledImg src={item.image} alt={item.label} interval={100} />
                  <RightCaro>
                    <h1>Recipes of the week:</h1>
                    <h3 style={{}}>{item.label}</h3>
                  </RightCaro>
                </SliderContainer>
              </StyledLink>
            </CarouselItem>
          )
        })}
      </Carousel>

  )
}

export default CarouselLanding


const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
`

const StyledImg = styled.img`
  width: 35vw;
  height: 400px;
  border-radius: 2rem;
  object-fit: cover;
  transition: ease 0.2s;

  @media (max-width: 1800px) {
    width: 30%;
    height: auto;
    border-radius: 2rem;
  }

  @media (max-width: 992px) {
    width: 40%;
    height: auto;
    border-radius: 2rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    border-radius: 2rem;
  }

  :hover {
    transform: scale(1.01);
    transition: ease 0.2s;
  }
`

const RightCaro = styled.div`
  text-align: left;
  margin: 3rem 4rem;
  width: 16rem;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  :hover {
    color: #000000;
  }
  h3 {
    margin-top: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
  }
  h3:hover {
    color: #3e654479;
  }
`
// HELLO
