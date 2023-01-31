import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { globalContext } from "../context/globalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regHeart } from "@fortawesome/free-regular-svg-icons"

// adding comment hi 

const like = (
  <FontAwesomeIcon
    icon={solidHeart}
    style={{
      color: "#ffb803",
      position: "absolute",
      top: "6px",
      right: "5px",
    }}
  />
)

const unlike = (
  <FontAwesomeIcon
    icon={regHeart}
    style={{
      color: " #ffb803",
      position: "absolute",
      top: "6px",
      right: "5px",

 
    }}
  />
)

// home page to render the top random recipes as the first cards

export default function RecipeCards() {
  const { recipes, user, setUser } = useContext(globalContext)

  const handleLike = async (item) => {
    console.log(item)
    try {
      const res = await axios.put(`http://localhost:8000/users/favourites`, {
        item,
        id: user._id,
      })
      // setFavourite([...favourites, item])

      setUser({
        ...user,
        favourites: res.data.favourites,
      })

      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <FlexWrap>
      <Wrapper>
        {recipes?.map((item) => {
          return (
            <div style={{ position: "relative" }}>
              <StyledLink to={"/recipe/" + item.label} state={item}>
                <CardImg key={item._id}>
                  <img src={item.image} alt={item.label} />
                </CardImg>{" "}
                <TitleTextWrapper>
                  <CardTitle>
                    {item.label}
                    <p>
                      {item.totalTime > 0
                        ? `Preparation time: ${item.totalTime} mins`
                        : ""}
                    </p>
                  </CardTitle>
                </TitleTextWrapper>
              </StyledLink>
              <StyledButton onClick={() => handleLike(item)}>
                {user?.favourites?.findIndex(
                  (fav) => fav.label === item.label
                ) > -1
                  ? like
                  : unlike}
              </StyledButton>
            </div>
          )
        })}
      </Wrapper>
    </FlexWrap>
  )
}

const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const Wrapper = styled.div`
  justify-items: center;
  width: 50vw;
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 5rem;

  @media (max-width: 480px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const CardImg = styled.div`
  border: 1px solid green;
  width: 100%;

  max-height: 20rem;
  border-radius: 2rem;

  -webkit-box-shadow: -7px 3px 31px -15px rgba(133, 133, 133, 0.81);
  box-shadow: -7px 3px 31px -15px rgba(133, 133, 133, 0.81);
  overflow: hidden;
  transition: ease 0.1s;

/*   :hover {
    border: 2px solid green;
    transition: 0.2s ease;
  } */

  @media (max-width: 600px) {
    min-height: 10rem;
  }

  @media (max-width: 480px) {
    min-height: 25rem;
    //max-width: 23rem;
  }

  img {
    object-fit: cover;

    //object-position: 10px;
    width: 150%;
    height: 100%;
    transform: scale(1.3);

    @media (max-width: 480px) {
      width: 100%;
      transform: scale(1.58);
    }
  }
`
const TitleTextWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`

const CardTitle = styled.div`
  font-size: 16px;
  letter-spacing: 0.2px;
  color: black;

  p {
    font-size: 13px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    font-weight: 380;
  }
`
const StyledButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: 1px solid green;
  border-radius: 40%;
  width: 28px;
  height: 30px;
  background-color: #3e654479;

  :hover{
    background-color:  #3e6544ac;
  }
`
