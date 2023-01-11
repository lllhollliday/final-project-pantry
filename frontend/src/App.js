import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./routes/Home"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"
import Settings from "./routes/Settings"
import Recipe from "./routes/Recipe"
import Profile from './routes/Profile'
import Favourites from "./routes/Favourites"
import MyPantry from "./routes/MyPantry"
import SearchMenu from "./components/searchMenu/SearchMenu"
import NavBar from "./components/NavBar"

function App() {

  /* const cuisine = [
    { value: "vietnamese", label: "Vietnamese"},
    { value: "american", label: "American"},
    { value: "chinese", label: "Chinese"},
    { value: "french", label: "French"},
    { value: "italian", label: "Italian"},
    { value: "mediterranean", label: "Mediterranean"},
] */

  return ( <div>
    <NavBar/>



    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/mypantry" element={<MyPantry/>} />
    </Routes>
    </div>
  )
}
export default App