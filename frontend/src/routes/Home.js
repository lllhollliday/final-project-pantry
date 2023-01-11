import React, { useContext } from 'react'
import SearchMenu from '../components/searchMenu/SearchMenu'
import { globalContext } from '../context/globalContext.js'

export default function Home() {

  const { recipes, setRecipes } = useContext(globalContext)

  return (
    <>

      <h1>HomePage</h1>

      <SearchMenu/>     

    </>
  )
}