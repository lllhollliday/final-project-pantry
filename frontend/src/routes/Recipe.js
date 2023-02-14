import { useLocation } from "react-router-dom"
import axios from "axios"
import { useContext, useState } from "react"
import { globalContext } from "../context/globalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regHeart } from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"
import Modal from "react-modal"
import { Link } from "react-router-dom"

function Recipe() {
  const { state } = useLocation()
  const { user, setUser } = useContext(globalContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleLike = async (item) => {
    console.log("item:", item)
    try {
      const res = await axios.put(`/users/favourites`, {
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

  console.log(state)
  return (
    <FlexWrapper>
      {state && (
        <div>
          <HeadWrap style={{ position: "relative" }}>
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
                  toggleModal()
                }
              }}
            >
              {user?.favourites?.findIndex((fav) => fav.label === state.label) >
              -1
                ? like
                : unlike}
            </StyledButton>
            <Modal
              style={{
                overlay: {
                  position: "fixed",

                  background: "#ffe8d77f",
                  opacity: "0.14",
                },
                content: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "15rem",
                  height: "10rem",
                  border: "1px solid #ccc",

                  background: "#ffb803",
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                  borderRadius: "10%",
                  outline: "none",
                  padding: "30px",
                },
              }}
              isOpen={modalIsOpen}
              onRequestClose={toggleModal}
            >
              <StyledModalContent>
                <button onClick={toggleModal}>x</button>
                <h2>
                  Please <StyledLinkModal to="/login">login</StyledLinkModal> to
                  save your favourites.
                </h2>
              </StyledModalContent>
            </Modal>
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

const StyledModalContent = styled.div`
  display: "flex";
  align-content: "center";
  justify-content: "center";
  flex-direction: "column";
  padding: "10px";

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #fff;
    font-size: 19px;
    margin-top: 23px;
    margin-left: "8px";
  }

  button {
    font-family: "Roboto", sans-serif;
    width: 23px;
    height: 23px;
    font-size: 16px;
    border: 1px solid transparent;
    color: white;
    font-weight: 400;

    background-color: #ffb803;
    border-radius: 30%;

    position: absolute;
    top: 9px;
    right: 14px;

    :hover {
      border: 1px solid orange;
    }
  }
`

const StyledLinkModal = styled(Link)`
  font-family: "Roboto", sans-serif;
  color: #3e6544ce;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`
