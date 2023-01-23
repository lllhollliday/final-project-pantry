import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const favouritesSchema = new Schema({
    recipes: [
        {type: String} //use recipe label as string value?
    ],
    q: String, //search field in favourites?
    cuisineType: String,
    mealType: String,
    time: String,
    // dateAdded:
})

const favouritesCollection = mongoose.model("favourites", favouritesSchema);

export default favouritesCollection;