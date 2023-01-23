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
import { createUser, deleteUser, getAllUsers, getSingleUser, loginUser, updateUser } from "../controllers/userscontrollers";

const router = express.Router();

// Router Get "/users"
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
// Router Post "/users"
router.post('/', createUser)
router.post('/login', loginUser);
// Router Patch "/users"
router.patch('/:id', updateUser);
// Router Delete "/users"
router.delete('/:id', deleteUser);

export default router;
