import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import ContainerContext from './context/globalContainer.js'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ContainerContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContainerContext>
)
