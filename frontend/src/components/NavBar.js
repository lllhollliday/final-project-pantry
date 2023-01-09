import { Outlet, NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"
import logo from "../media/logo.png"

const Navbar = () => {
  /* need to add 'auth' ternary operator to toggle between logged in / signed out display */
  console.log(styles)
  return (
    <div>
      <Outlet />
      <nav className={styles["navbar"]}>
        <ul className={styles["navbarLogo"]}>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </ul>
        <ul className={styles["navbarLinks"]}>
          {" "}
          {/* is signed in ?  */}
          <NavLink className={styles["button"]} to="/profile">
            Profile
          </NavLink>{" "}
          <NavLink className={styles["button"]} to="/mypantry">
            My Pantry
          </NavLink>{" "}
          <NavLink className={styles["button"]} to="/favourites">
            Favourites
          </NavLink>{" "}
          <NavLink className={styles["button"]} to="/settings">
            Settings
          </NavLink>{" "}
          <NavLink className={styles["button"]} to="/">
            Logout
          </NavLink>{" "}
          {/* : */}{" "}
          <NavLink className={styles["landingButton"]} to="/signup">
            Sign Up
          </NavLink>{" "}
          <NavLink className={styles["landingButton"]} to="/login">
            Login
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
