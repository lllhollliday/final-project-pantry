import { Outlet, NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"

const Navbar = () => {
  /* need to add 'auth' ternary operator to toggle between logged in / signed out display */

  return (
    <div>
      <Outlet />
      <nav className={styles["navbar"]}>
        <ul className={styles["navbar_logo"]}>
          <NavLink to="/">LOGO</NavLink>
        </ul>
        <ul className={styles["nav_links"]}>
          <NavLink to="">Login</NavLink>{" "}
          <NavLink to="signup">Signup</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
