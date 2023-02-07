import { useLocation } from "react-router-dom"
import axios from "axios"
import {useContext} from "react"
import { globalContext } from "../context/globalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regHeart } from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"

function Recipe() {
  const { state } = useLocation()
  const {  user, setUser } = useContext(globalContext)

  const handleLike = async (item) => {
    console.log("item:", item)
    try {
      const res = await axios.put(`http://localhost:8000/users/favourites`, {
        state,
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

  console.log(state)
  return (
    <FlexWrapper>
      {state && (
        <div>
          <HeadWrap style={{position:"relative"}}>
            {" "}
            <img src={state.image} alt="" />
            <div>
              <h1>{state.label}</h1>
              <p>
                {state.totalTime > 0
                  ? `Preparation time: ${state.totalTime} mins`
                  : ""}
              </p>
              {/* <p>Diet: *need to fix* {state.health}</p>{" "} */}
            </div>

                     <StyledButton
                onClick={() => {
                  if (user) {
                    handleLike(state)
                  } else {
                   console.log("Not logged in");
                  }
                }}
              >
                {user?.favourites?.findIndex(
                  (fav) => fav.label === state.label
                ) > -1
                  ? like
                  : unlike}
              </StyledButton>

          </HeadWrap>

 

          <Line />
          {/*   <IngWrap> */}
          <h2>Ingredients </h2>
          <InlineWrap>
            <Quantity>
              {state.ingredients.map((ing) => {
                return (
                  <ul>
                    <li>
                      {ing.quantity}{" "}
                      {/*    = "<unit>" ? "" : `${ing.quantity}`  */}
                      {ing.measure}
                    </li>
                  </ul>
                )
              })}
            </Quantity>
            <Ing>
              {state.ingredients.map((ing) => {
                return (
                  <ul>
                    <li>{ing.food}</li>
                  </ul>
                )
              })}
            </Ing>
          </InlineWrap>
          {/*      </IngWrap> */}

          <h2>Instructions</h2>
          <p>Click here to see recipe</p>
        </div>
      )}
    </FlexWrapper>
  )
}

export default Recipe

const FlexWrapper = styled.div`
//position: relative;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  h2 {
    font-weight: 500;
    font-size: 24px;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
`

const HeadWrap = styled.div`
  display: inline-flex;
  img {
    width: 23rem;
    height: auto;
    border-radius: 15px;
    position: relative;
  }
  h1,
  p {
    width: 17rem;
    margin-left: 2rem;
    font-weight: 500;
    
  }
`

const Line = styled.div`
  border-bottom: 1px solid grey;
  width: 30rem;
  margin-left: 5.5rem;
  margin-top: 2rem;
`

/* const IngWrap = styled.div`
  h2 {
    font-weight: 300;
  }

  li {
    display: inline-flex;
  }
  p:nth-child(2) {
    margin-left: 6rem;
  }
`
 */
const InlineWrap = styled.div`
  display: inline-flex;
  margin-top: 2rem;

  li {
    list-style-type: none;
    font-size: 12px;
  }
`

const Quantity = styled.div`
  font-weight: 500;
`
const Ing = styled.div`
  margin-left: 5rem;
`
const StyledButton = styled.button`
  position: absolute;
  top: 20rem;
  right: 20rem;
  border: 1px solid green;
  border-radius: 40%;
  width: 28px;
  height: 30px;
  background-color: #3e654479;

  :hover {
    background-color: #3e6544ac;
  }
`

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
