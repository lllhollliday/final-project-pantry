import { useContext, useState } from "react"
import { globalContext } from "../context/globalContext"
import styled from "styled-components"

function SearchMenu() {
  const [cuisine, setCuisine] = useState("")
  const [mealType, setMealType] = useState("")
  const [health, setHealth] = useState("")

  const { recipes, setRecipes } = useContext(globalContext)

  const fetchRecipe = (e) => {
    e.preventDefault()
    console.log(cuisine)
    console.log("hi some text", e.target.query.value);
    fetch(
      `http://localhost:8000/recipes?q=${e.target.query.value}&cuisineType=${cuisine}&mealType=${mealType}&health=${health}`
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
            <option value="">all</option>
            <option value="italian">italian</option>
            <option value="french">french</option>
            <option value="chinese">chinese</option>
          </select>

          <select name="mealType" onChange={(e) => setMealType(e.target.value)}>
            <option value="">All</option>
            <option value="breakfast">breakfast</option>
            <option value="lunch">lunch</option>
            <option value="dinner">dinner</option>
          </select>
          <select name="health" onChange={(e) => setHealth(e.target.value)}>
            <option value="">All</option>
            <option value="alcohol-free">alc free</option>
            <option value="dairy-free">Dairy-free</option>
            <option value="pork-free">Pork-free</option>{" "}
          </select>
          <button>search</button>
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
