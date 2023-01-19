import React, { useContext } from "react"
import SearchMenu from "../components/SearchMenu"
import { globalContext } from "../context/globalContext.js"
import RecipeCards from "../components/RecipeCards.js"

export default function Home() {
/*   const { setRecipes } = useContext(globalContext) */
/* 
  const fetchRecipe = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8000/recipes?recipe=${e.target.query.value}`)
      .then((res) => res.json())
      .then((result) => setRecipes(result.recipes))
  } */
  return (
    <div>
{/*       <form onSubmit={fetchRecipe}>
        <input name="query" type="text" />
        <button>search</button>
      </form> */}
      <SearchMenu />
      <RecipeCards />
    </div>
  )
}
