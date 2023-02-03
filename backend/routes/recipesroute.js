import express, { response } from "express"
import axios from "axios"
import recipeCollection from "../models/recipesschema.js"
import imagesCollection from "../models/imagesschema.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const { q, cuisineType, mealType, health } = req.query

  try {
    const found = await recipeCollection.findOne({
      q,
      cuisineType,
      mealType,
      health,
    })

    if (found) {
      res.json(found)
    } else {
      /*  console.log(q, cuisineType, mealType, health) */

      const { data } = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public${
          q ? "&q=" + q : ""
        }${cuisineType ? "&cuisineType=" + cuisineType : ""}${
          mealType ? "&mealType=" + mealType : ""
        }${
          health ? "&health=" + health : ""
        }&app_id=8d589cb8&app_key=4c1d224144b3fa7000b2320750876ef8&imageSize=LARGE`
      )
      /*  console.log("this is res from data:", data) */
      let allImagePromises = data.hits.map((item) => {
        return axios
          .get(item.recipe.image, { responseType: "arraybuffer" })
          .then((res) => res.data)
          .then((buffer) => {
            console.log(typeof Buffer.from(buffer))
            const image = new imagesCollection({
              fileName: Date.now() + "_" + item.recipe.label + ".jpg",
              data: Buffer.from(buffer),
            })
            return Promise.resolve(image.save())
          })
      })
      let resolvePromises = await Promise.all(allImagePromises)

      let myRecipes = data.hits.map((item, i) => {
        /* console.log(resolvePromises[0]) */
        return {
          label: item.recipe.label,
          totalTime: item.recipe.totalTime,
          mealType: item.recipe.mealType,
          health: item.recipe.health,
          cuisine: item.recipe.cuisine,
          ingredients: item.recipe.ingredients,
          uri: item.recipe.uri,
          image: `http://localhost:8000/images/${resolvePromises[i].fileName}`,
        }
      })
      let recipe = []
      if (data.count > 0) {
        recipe = new recipeCollection({
          q,
          cuisineType,
          mealType,
          health,
          recipes: myRecipes,
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
