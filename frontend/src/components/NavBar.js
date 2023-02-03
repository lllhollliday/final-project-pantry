import { Outlet, NavLink, Navigate } from "react-router-dom"

import styles from "./NavBar.module.css"
import logo from "../media/logo.png"
import { useContext } from "react"
import { globalContext } from "../context/globalContext"
import toast, {Toaster} from "react-hot-toast";

const Navbar = () => {
  const { user, setUser } = useContext(globalContext);
  

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    if(!user) {
      // toast("Logged out!", {type: "success"});
      toast.success("Logged out");
      setTimeout(() => {
        Navigate("/");
      }, 2000);
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <Outlet />
      <nav className={styles["navbar"]}>
        <ul className={styles["navbarLogo"]}>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </ul>
        <ul className={styles["navbarLinks"]}>
          {" "}
          {user ? (
            <>
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
              <NavLink className={styles["button"]} to="/" onClick={logout}>
                Logout
              </NavLink>{" "}
            </>
          ) : (
            <>
              <NavLink className={styles["landingButton"]} to="/login">
                Sign Up
              </NavLink>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
