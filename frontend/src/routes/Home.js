import React, { useContext } from 'react'
import { Card } from "react-router-dom"
import { globalContext } from '../components/context/globalContext'

export default function Home() {

  const { recipes, setRecipes } = useContext(globalContext)

  return (
   
      <h1>HomePage</h1>

  )
}
