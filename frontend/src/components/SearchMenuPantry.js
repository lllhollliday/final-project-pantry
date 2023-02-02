import { useContext, useState } from "react"
import { globalContext } from "../context/globalContext"
import styled from "styled-components"

function SearchMenu() {
  const [cuisine, setCuisine] = useState("")
  const [mealType, setMealType] = useState("")
  const [health, setHealth] = useState("")

  const { setRecipes } = useContext(globalContext)

  const fetchRecipe = (e) => {
    e.preventDefault()

console.log(e.target.query);

    fetch(
      `http://localhost:8000/users/favourites?q=${e.target.query.value}&cuisineType=${cuisine}&mealType=${mealType}&health=${health}`

    )
     
      .then((res) => res.json())
      .then((result) => {
        console.log(result.recipes)
        setRecipes(result.recipes)
      }) 
  }

  return (
    <div>
      <form onSubmit={fetchRecipe}>
        <SearchWrap>
          <input
            name="query"
            type="text"
            placeholder="search your favourites"
          />
       

        </SearchWrap>
        <DropDowns>
          <StyledSelect
            name="cuisineType"
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="">cuisine</option>
            <option value="italian">italian</option>
            <option value="french">french</option>
            <option value="chinese">chinese</option>
          </StyledSelect>
          <StyledSelect
            name="mealType"
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="">meal type</option>
            <option value="breakfast">breakfast</option>
            <option value="lunch">lunch</option>
            <option value="dinner">dinner</option>
          </StyledSelect>
          <StyledSelect
            name="health"
            onChange={(e) => setHealth(e.target.value)}
          >
            <option value="">diet</option>
            <option value="alcohol-free">alc free</option>
            <option value="dairy-free">Dairy-free</option>
            <option value="pork-free">Pork-free</option>{" "}
          </StyledSelect>
        </DropDowns>
        <SortByWrap>
          <p>SORT BY:</p>
          <select
            className="select"
            name="health"
            onChange={(e) => setHealth(e.target.value)}
          >
            <option value="">date added</option>
            <option value="alcohol-free">A-Z</option>
          </select>
        </SortByWrap>
      </form>
    </div>
  )
}

export default SearchMenu

const SearchWrap = styled.div`
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;

  input {
    border-radius: 8px;
    width: 28.5rem;
    padding: 4px 0px 4px 8px;
    border: 1px solid #3e6544eb;
    font-size: 15px;
  }
  input:focus {
    background-color: #fff;
    outline: #65a46f50;
    border: 2.5px solid #ec5f18;
  }

  button {
    width: 4rem;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #3e6544eb;
    background-color: #fff;
    :hover {
      transform: scale(1.01);

      border: 2px solid #ec5f18;

      cursor: pointer;
    }
  }
`

const DropDowns = styled.div`
  width: 45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledSelect = styled.select`
  //color: red;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  //font-weight: 300;
  border: 1px solid #3e6544eb;
  padding: 4px;
  border-radius: 6px;
  width: 12rem;
  background-color: white;
  margin-bottom: 0.8rem;
  :focus {
    outline: none;
  }
  option {
    font-family: "Roboto", sans-serif;
  }
`

const SortByWrap = styled.div`
  display: flex;
  justify-content: right;
  width: 45rem;

  p {
    margin-right: 8px;
    margin-top: 12px;
    font-size: 12px;
  }

  select {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    height: 1.9rem;
    border: 1px solid #3e6544eb;
    padding: 4px;
    border-radius: 6px;
    width: 12rem;
    background-color: white;
    margin-bottom: 0.8rem;
    :focus {
      outline: none;
    }
    option {
      font-family: "Roboto", sans-serif;
    }
  }
`
