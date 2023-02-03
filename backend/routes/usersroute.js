import express from "express"
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  loginUser,
  updateUser,
  addFavoritesItems,
  addIngredientToMyPantry,
  getFavourites,
} from "../controllers/userscontrollers.js"
import authenticateToken from "../middleware/authenticateToken.js"
import { isAdmin } from "../middleware/isAdmin.js"

const router = express.Router()

// Router Get "/users"
router.get("/", getAllUsers, isAdmin, authenticateToken)
router.get("/favourites", authenticateToken, getFavourites)
router.get("/:id", authenticateToken, getSingleUser)

// Router Post "/users"
router.post("/register", createUser)
router.post("/login", loginUser)
router.put("/favourites", addFavoritesItems)
router.post("/my-pantry", addIngredientToMyPantry)

// Router Patch "/users"
router.patch("/:id", updateUser)

// Router Delete "/users"
router.delete("/:id", deleteUser)

export default router
