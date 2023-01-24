import React, { useContext } from "react"
import SearchMenu from "../components/SearchMenu"
import { globalContext } from "../context/globalContext.js"
import RecipeCards from "../components/RecipeCards.js"

export default function Home() {
  return (
    <div>
      <SearchMenu />
      <RecipeCards />
    </div>
  )
}
