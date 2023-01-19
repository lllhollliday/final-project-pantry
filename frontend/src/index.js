import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

import GlobalContainer from "./context/globalContainer.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <GlobalContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalContainer>
)
