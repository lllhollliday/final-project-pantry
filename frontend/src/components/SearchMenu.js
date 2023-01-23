import { useContext, useState } from "react"
import { globalContext } from "../context/globalContext"
import styled from "styled-components"
import { useLoaderData } from "react-router-dom"

function SearchMenu() {
  const [cuisine, setCuisine] = useState("")
  const [mealType, setMealType] = useState("")
  const [health, setHealth] = useState("")

  const { recipes, setRecipes } = useContext(globalContext)

  const fetchRecipe = (e) => {
    e.preventDefault()
    console.log(cuisine)
    console.log("hi some text", e.target.query.value)
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
        <SearchWrap>
          <input
            name="query"
            type="text"
            placeholder="what would you like to cook with?"
          />

          <button>search</button>
        </SearchWrap>
        <DropDowns>
          <StyledSelect
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

export default SearchMenu

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin-bottom: 10px;

  input {
    border-radius: 8px;
    width: 38rem;
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
    border-radius: 8px;
    border: 1px solid #3e6544eb;
    background-color: #fff;
    :hover {
      transform: scale(1.01);

      border: 2px solid #3e6544eb;;

      cursor: pointer;
    }
  }
`

const DropDowns = styled.div`
  width: 45rem;
  display: flex;
  justify-content: space-between;
`

const StyledSelect = styled.select`
  border: 1px solid #3e6544eb;
  padding: 2px;
  border-radius: 6px;
  width: 10rem;
  background-color: white;
  :focus {
    outline: none;
  }
`
