import React, { useContext } from 'react'
import SearchMenu from '../components/searchMenu/SearchMenu'
import { globalContext } from '../context/globalContext.js'
import RecipeCards from '../components/RecipeCards.js'


export default function Home() {

  return (
    <div>
  
      <RecipeCards />
    </div>

  )
}