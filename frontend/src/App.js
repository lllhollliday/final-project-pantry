import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./routes/Home"
import Login from "./routes/Login"

import Settings from "./routes/Settings"
import Recipe from "./routes/Recipe"
import Profile from "./routes/Profile"
import Favourites from "./routes/Favourites"
import MyPantry from "./routes/MyPantry"
import NavBar from "./components/NavBar"
import { useEffect,useContext } from "react"
import axios from "axios"
import { globalContext } from "./context/globalContext"


function App() {

  const { setUser } = useContext(globalContext)


  useEffect(()=> {
    //sending token to backend
    if(localStorage.getItem("token")){
      const token = localStorage.getItem("token")
      axios.get("/users/verifyToken", {
        headers: {
          "authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res);
        setUser(res.user)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [ ])

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/mypantry" element={<MyPantry />} />
      </Routes>
    </div>
  )
}
export default App
