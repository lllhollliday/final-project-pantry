/* import express from "express"

const route = express.Router()

// Route GET
route.get("/", getAllUsers)

// Route GET 
route.get("/", getSingleUser)

// Route POST 
route.post("/", createUser)

route.post("/login", loginUser)



// Route PATCH 
route.patch("/:id", verifyToken, updateUser) 

// Route DELETE
route.delete("/:id", verifyToken, deleteUser)

export default route */

import express from "express";
import { createUser, deleteUser, getAllUsers, getSingleUser, loginUser, updateUser } from "../controllers/userscontrollers.js";
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();

// Router Get "/users"
router.get('/', getAllUsers, authenticateToken);
router.get('/:id', getSingleUser, authenticateToken);
// Router Post "/users"
router.post('/register', createUser)
router.post('/login', loginUser);
// Router Patch "/users"
router.patch('/:id', updateUser);
// Router Delete "/users"
router.delete('/:id', deleteUser);

export default router;
