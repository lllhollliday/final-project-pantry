import styled from "styled-components"
import { NavLink } from "react-router-dom"
import profileImg from "../media/profileDefault3.png"
import RecipeCards from "../components/RecipeCards"
import { useContext } from "react";
import { globalContext } from "../context/globalContext";

export default function Profile() {

    const {user} = useContext(globalContext);

  return (
    <FlexWrapper>
      <FlexContainer>
        <img src={profileImg} alt="Profile" />
        <Header>
          <h1>Welcome back,</h1>
          <h2>{user.name}!</h2>
        </Header>
      </FlexContainer>

      <Links>
        <StyledNavLink to="/mypantry">My Pantry</StyledNavLink>{" "}
        <StyledNavLink to="/favourites">Favourites</StyledNavLink>
        <Line></Line>
      </Links>
      <RecipeCards />
    </FlexWrapper>
  )
}

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: -20em;

  img {
    margin-right: 3em;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;

    padding: 20px;
    -webkit-box-shadow: -3px 3px 31px -4px rgba(133, 133, 133, 0.81);
    box-shadow: -3px 3px 31px -4px rgba(133, 133, 133, 0.81);
  }
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  //border: 1px solid grey;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 400;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
`

const Links = styled.div`
  margin-top: 7rem;
  margin-bottom: -12rem;
  //border-bottom: solid 1px black;
`
const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 3px 30px 3px 30px;
  margin: 5px;
letter-spacing: 0.4px;
  font-size: 13px;
  font-weight: 300;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;

  background-color: #fff3d684;
  text-decoration: none;
  -webkit-box-shadow: -1px 4px 18px -10px #d6d6d6;
  box-shadow: -1px 4px 18px -10px #d6d6d6;
  border: solid 1px #fff3d6;
  transition: ease-out 0.2s;

  &:hover {
    border: solid 1px #ffb80360;
  }
`

const Line = styled.div`
  border-bottom: 1px solid grey;
  width: 150%;
  margin-left: -3.9rem;
  margin-top: 1rem;
  margin-bottom: 12rem;
`
