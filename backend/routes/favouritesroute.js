import express from "express";
import { addFavouriteRecipe, deleteFavouriteRecipe, getAllFavouriteRecipes, getSingleFavouriteRecipe, updateFavouriteRecipe } from "../controllers/favouritescontroller.js";

const router = express.Router();

// Router Get "/favourites"
router.get('/', getAllFavouriteRecipes);
router.get('/:id', getSingleFavouriteRecipe);
// Router Post "/favourites"
router.post('/', addFavouriteRecipe)
// Router Patch "/favourites"
router.patch('/:id', updateFavouriteRecipe);
// Router Delete "/favourites"
router.delete('/:id', deleteFavouriteRecipe);

export default router;
