import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    query: String,
    recipes: []
})

const recipeCollection = mongoose.model("recipes", recipeSchema)

export default recipeCollection;