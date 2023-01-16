import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

function Recipe() {
  let params = useParams()

  const [recipe, setRecipe] = useState()

  const getRecipe = async () => {
    const data = await fetch(`https://dummyjson.com/products/${params.name}`)

    const recipeData = await data.json()
    setRecipe(recipeData)
  }

  useEffect(() => {
    try {
      getRecipe()
    } catch (error) {
      console.log(error)
    }
  }, [recipe])

  return (
    <FlexWrapper>
      {recipe ? (
        <div>
          <h1>{recipe.title}</h1>
          <img src={recipe.images[0]} alt={recipe.title} />
          <div>{recipe.description}</div>
        </div>
      ) : (
        "Loading..."
      )}
    </FlexWrapper>
  )
}
const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default Recipe
