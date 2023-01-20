// import express from "express"

// const route = express.Router()

// // Route GET
// route.get("/", getAllRecipes)
// route.get("/:id", getSingleRecipe)

// // Route POST
// route.post("/", createRecipe) // do we need this to render the recipes?

// export default route

import express, { response } from "express"
import axios from "axios"
import recipeCollection from "../models/recipesschema.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const { q, cuisineType, mealType, health } = req.query
  console.log("this is a text", req.query)

  try {
    const found = await recipeCollection.findOne({
      q,
      cuisineType,
      mealType,
      health,
    })
    console.log("Found is", found)
    if (found) {
      res.json(found)
    } else {
      console.log(q, cuisineType, mealType, health)
   
      const { data } = await axios.get(
  
        `https://api.edamam.com/api/recipes/v2?type=public${
          q ? "&q=" + q : ""
        }${cuisineType ? "&cuisineType=" + cuisineType : ""}${
          mealType ? "&mealType=" + mealType : ""
        }${
          health ? "&health=" + health : ""
        }&app_id=8d589cb8&app_key=4c1d224144b3fa7000b2320750876ef8&imageSize=LARGE`
      )
      console.log("this is res from data:", data)
      let recipe = []
      if (data.count > 0) {
        recipe = new recipeCollection({
          q,
          cuisineType,
          mealType,
          health,
          recipes: data.hits,
        })
        await recipe.save()
      }

      res.json(recipe)
    }
  } catch (error) {
    console.log("Error searching for recipes", error.message)
    res.status(500).json({ message: "Error searching for recipes" })
  }
})

export default router
