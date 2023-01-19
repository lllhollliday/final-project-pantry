import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { globalContext } from "../context/globalContext"

// home page to render the top random recipes as the first cards

export default function RecipeCards() {
  const { recipes } = useContext(globalContext)

  return (
    <FlexWrap>
      <Wrapper>
        {recipes?.map((item) => {
          return (
            <StyledLink to={"/recipe/" + item.recipe._id}>
              <div>
                <CardImg key={item.recipe._id}>
                  <img src={item.recipe.image} alt={item.recipe.label} />
                </CardImg>{" "}
                <TitleTextWrapper>
                  <CardTitle>
                    {item.recipe.label}
              {      <p>Preparation time: {item.recipe.totalTime} mins </p>}
                  </CardTitle>
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
  margin-top: 10rem;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  justify-items: center;
  width: 50rem;
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8rem;
`

const CardImg = styled.div`
  width: 100%;
  min-height: 17rem;
  max-height: 17rem;
  border-radius: 2rem;
  //border: 1px solid #ffb8038e;
  -webkit-box-shadow: -7px 3px 31px -15px rgba(133, 133, 133, 0.81);
  box-shadow: -7px 3px 31px -15px rgba(133, 133, 133, 0.81);
  overflow: hidden;

  img {
    object-fit: cover;
    width: 200%;
    height: 100%;

  }
`
const TitleTextWrapper = styled.div`
  text-align: center;
  margin-top: 10px;

`

const CardTitle = styled.div`
  font-size: 20px;
  color: black;


  p {
    font-size: 15px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    font-weight: 380;
  }
`
