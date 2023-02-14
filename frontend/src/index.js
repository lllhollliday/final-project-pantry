import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { HashRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalContainer from "./context/globalContainer.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <GlobalContainer>
    <HashRouter>
      <App />
    </HashRouter>
  </GlobalContainer>
)
