import { useEffect, useState } from "react"
import styled from "styled-components"

function Recipe() {
  const [recipes, setRecipe] = useState([])

  // run the search as soon as the page loads (gets mounted)
  useEffect(() => {
    getRecipe()
  }, [])

  const getRecipe = async () => {
    const api = await fetch(`https://dummyjson.com/products/`)

    const data = await api.json()

    setRecipe(data.products)

    console.log(data)
  }
  return (
    <FlexWrapper>
      {recipes.map((recipe) => {
        return (
          <div className="recipe card">
            <h2>Recipe</h2>
          </div>
        )
      })}
    </FlexWrapper>
  )
}

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default Recipe
