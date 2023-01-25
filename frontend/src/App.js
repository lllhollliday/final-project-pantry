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
import NavBar from "./components/NavBar"
import Container from "react-bootstrap/Container";
import CarouselLanding from "./components/CarouselLanding";

function App() {

  return ( <div>
    <NavBar/>
    <Container>
      <CarouselLanding />
    </Container>
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/mypantry" element={<MyPantry/>} />
    </Routes>
    </div>
  )
}
export default App