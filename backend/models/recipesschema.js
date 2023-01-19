import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    q: String,
    cuisineType: String, 
    health : String,
    mealType: String,
    recipes: []
})

const recipeCollection = mongoose.model("recipes", recipeSchema)

export default recipeCollection;