import { useContext, useState } from "react"
import { globalContext } from "../context/globalContext"
import styled from "styled-components"

function SearchMenu() {
  const [cuisine, setCuisine] = useState(" ")
  /* const [time, setTime] = useState(" ")
  const [diet, setDiet] = useState(" ")
 */
  const { recipes, setRecipes } = useContext(globalContext)

  const fetchRecipe = (e) => {
    e.preventDefault()
    console.log(cuisine)
    fetch(
      `http://localhost:8000/recipes?q=${e.target.query.value}&cuisineType=${cuisine}&mealType=Breakfast&health=dairy-free`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.recipes)
        setRecipes(result.recipes)
      })
  }

  return (
    <Wrapper>
      <form onSubmit={fetchRecipe}>
        <input name="query" type="text" />
        <div>
          <select
            name="cuisineType"
            onChange={(e) => setCuisine(e.target.value)}
          >
            {/*     {recipes?.map((type) => {
              return (
                <option
                  key={type.recipe.cuisineType}
                  value={type.recipe.cuisineType}
                >
                  {type.recipe.cuisineType}
                </option>
              )
            })}
 */}
            <option value=" ">all</option>
            <option value="italian">italian</option>
            <option value="french">french</option>
            <option value="chinese">chinese</option>
          </select>
          <button>search</button>
          {/*  <select>
          <option value="">All</option>
          <option value="30">30 minutes or less</option>
          <option value="60">1 hour or less</option>
          <option value="120">2 hours or less</option>
        </select>
        <select >
          <option value="">All</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>{" "}
        </select> */}
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchMenu

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
