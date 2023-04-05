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
      {user && <> <FlexContainer>
        <img src={profileImg} alt="Profile" />
        <Header>
          <h1>Welcome back,</h1>
          <h2>{user.firstName}!</h2>
        </Header>
      </FlexContainer>

      <Links>
        <StyledNavLink to="/mypantry">My Pantry</StyledNavLink>{" "}
        <StyledNavLink to="/favourites">Favourites</StyledNavLink>
        <Line></Line>
      </Links>
      <RecipeCards />
      </>
    }
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
  /*   -webkit-box-shadow: -3px 3px 31px -4px rgba(133, 133, 133, 0.81);
    box-shadow: -3px 3px 31px -4px rgba(133, 133, 133, 0.81); */

    -webkit-box-shadow: -7px 10px 60px -27px rgba(0,0,0,0.66);
-moz-box-shadow: -7px 10px 60px -27px rgba(0,0,0,0.66);
box-shadow: -7px 10px 60px -27px rgba(0,0,0,0.66);
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
  padding: 3px 28px 3px 28px;
  margin: 5px;
letter-spacing: 0.4px;
  font-size: 13px;
  font-weight: 300;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
/* 
  background-color: #fff3d684; */
  text-decoration: none;
  -webkit-box-shadow: -1px 4px 18px -10px #d6d6d6;
  box-shadow: -1px 4px 18px -10px #d6d6d6;
 // border: solid 1px #fff3d6;
  transition: ease-out 0.2s;

  :hover {
  color:#3e6544ce;
  }
`

const Line = styled.div`
  border-bottom: 1px solid grey;
  width: 130%;
  margin-left: -2.1rem;
  margin-top: 0.5rem;
  margin-bottom: 12rem;
`
