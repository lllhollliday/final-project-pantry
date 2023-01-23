/* import { useContext } from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

import { globalContext } from "../context/globalContext"

function Recipe() {
  const [recipe, setRecipe]

  const { recipes } = useContext(globalContext)
  let params = useParams()

  const getRecipe = async () => {
    const data = await fetch(`http://localhost:8000/recipes?${params._id}`)

    const recipeData = await data.json()
    setRecipe(recipeData)
  }
  /*
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
  }, [recipe]) */

 /*  return (
    <FlexWrapper>
      {recipes?.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} />
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
  */