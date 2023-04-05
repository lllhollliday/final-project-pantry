import { Outlet, NavLink, Navigate } from "react-router-dom"
import styles from "./Navigation.module.css"
import logo from "../media/logo.png"
import { useContext } from "react"
import { globalContext } from "../context/globalContext"
import toast, {Toaster} from "react-hot-toast";
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const Navigation = () => {
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
      <Navbar bg="light" expand="lg" className={styles["navbar"]}>

        <ul className={styles["navbarLogo"]}>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </ul>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
  
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
