import express from "express";

const router = express.Router();

// Router Get "/favourites"
router.get('/', async (req, res, next) => {res.send("favourites get req");});
router.get('/:id', async (req, res, next) => {res.send("favourites/:id get req");});
// Router Post "/favourites"
router.post('/', async (req, res, next) => {res.send("favourites post req");})
router.post('/login', async (req, res, next) => {res.send("favourites post req on /login");});
// Router Patch "/favourites"
router.patch('/:id', async (req, res, next) => {res.send("favourites patch req on /:id");});
// Router Delete "/favourites"
router.delete('/:id', async (req, res, next) => {res.send("favourites delete req");});

export default router;
