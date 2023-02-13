import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { globalContext } from "../context/globalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regHeart } from "@fortawesome/free-regular-svg-icons"
import Modal from "react-modal"


// home page to render the top random recipes as the first cards

export default function RecipeCards() {
  const { recipes, user, setUser } = useContext(globalContext)

  console.log("recipes:", recipes);
  const [modalIsOpen, setModalIsOpen] = useState(false)

  //const handleClose = () => setModalIsOpen(false)

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleLike = async (item) => {
    console.log("item:", item)
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

              <StyledButton
                onClick={() => {
                  if (user) {
                    handleLike(item)
                  } else {
                    toggleModal()
                  }
                }}
              >
                {user?.favourites?.findIndex(
                  (fav) => fav.label === item.label
                ) > -1
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
                    Please <StyledLinkModal to="/login">login</StyledLinkModal>{" "}
                    to save your favourites.
                  </h2>
                </StyledModalContent>
              </Modal>
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
 // width: 100vw;
`

const Wrapper = styled.div`
  justify-items: center;
  width: 45rem;
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 5rem;

  @media (max-width: 481px) {
   // width: 90vw;
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
    transform: scale(1.2);

    :hover{
      opacity: 0.6;
      transition: 0.2s;
    }

    @media (max-width: 480px) {
      width: 100%;
      transform: scale(1.5);
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

  :hover {
    background-color: #3e6544ac;
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
