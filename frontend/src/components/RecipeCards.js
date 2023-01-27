
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { globalContext } from "../context/globalContext"

// home page to render the top random recipes as the first cards

export default function RecipeCards() {
  const { recipes, user, setUser } = useContext(globalContext)

  const handleLike = async(item) => {
    console.log(item);
    try {
      const res = await axios.put(`http://localhost:8000/users/favourites`, {item, id: user._id})
      // setFavourite([...favourites, item])

      setUser({
        ...user,
        favourites: res.data.favourites
      })

      console.log(res);
    } catch(err){
      console.log(err);
    }
  }



  return (
    <FlexWrap>
      <Wrapper>
        {recipes?.map((item) => {
          return (
            <StyledLink to={"/recipe/" + item.label} state={item}>
              <div>
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
                  
                  <button onClick={() => handleLike(item)}>{user?.favourites?.findIndex(fav => fav.label === item.label) > -1 ? "unlike pic" : "like pic"}</button>
                  
                </TitleTextWrapper>
              </div>
            </StyledLink>
          )
        })}
      </Wrapper>
    </FlexWrap>
  )
}

const FlexWrap = styled.div`
  //margin-top: 10rem;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  justify-items: center;
  width: 90%;
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
  width: 100%;
  min-height: 12rem;
  max-height: 15rem;
  border-radius: 2rem;
  //border: 1px solid #ffb8038e;
  -webkit-box-shadow: -7px 3px 31px -15px rgba(133, 133, 133, 0.81);
  box-shadow: -7px 3px 31px -15px rgba(133, 133, 133, 0.81);
  overflow: hidden;

  @media (max-width: 600px) {
    min-height: 10rem;
  }

  @media (max-width: 480px) {
    min-height: 25rem;
    //max-width: 23rem;
  }

  img {
    object-fit: contain;
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
