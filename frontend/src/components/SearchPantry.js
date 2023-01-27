import { useContext, useEffect, useState } from "react"
import { globalContext } from "../context/globalContext"
import styled from "styled-components"
import { useLoaderData } from "react-router-dom"

function SearchPantry({ selectedIng }) {
  const [cuisine, setCuisine] = useState("")
  const [mealType, setMealType] = useState("")
  const [health, setHealth] = useState("")

  const { setRecipes } = useContext(globalContext)

  console.log(cuisine)
  useEffect(() => {
    fetch(
      `http://localhost:8000/recipes?q=${selectedIng}&cuisineType=${cuisine}&mealType=${mealType}&health=${health}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.recipes)
        setRecipes(result.recipes)
      })
  }, [selectedIng, cuisine, mealType, health, setRecipes])

  const findRecipe = (selectedIng, e) => {
    e.preventDefault()

    console.log(selectedIng)
  }

  return (
    <Wrapper>
      <form onSubmit={findRecipe}>
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
      </form>
    </Wrapper>
  )
}

export default SearchPantry

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
`
const DropDowns = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
`

const StyledSelect = styled.select`
  border: 1px solid #3e6544eb;
  padding: 2px;
  border-radius: 6px;
  width: 30%;
  background-color: white;
  :focus {
    outline: none;
  }
`
