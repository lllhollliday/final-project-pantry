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

const router = express.Router();

// Router Get "/users"
router.get('/', async (req, res, next) => {res.send("users get req");});
router.get('/:id', async (req, res, next) => {res.send("users/:id get req");});
// Router Post "/users"
router.post('/', async (req, res, next) => {res.send("users post req");})
router.post('/login', async (req, res, next) => {res.send("users post req on /login");});
// Router Patch "/users"
router.patch('/:id', async (req, res, next) => {res.send("users patch req on /:id");});
// Router Delete "/users"
router.delete('/:id', async (req, res, next) => {res.send("users delete req");});

export default router;
