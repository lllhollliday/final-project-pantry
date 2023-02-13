import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"
import axios from "axios"
import cors from "cors"
import recipesRoute from "./routes/recipesroute.js"
import usersRoute from "./routes/usersroute.js"
import imagesRoute from "./routes/imagesroute.js"
import fileupload from "express-fileupload"
dotenv.config()

// Connecting to database / authenticate user
// import connectDB from "./db/connect.js"
// connectDB(
//   `mongodb+srv://finalproject:Dci1234!@final-project-pantry.guvtnoz.mongodb.net/?retryWrites=true&w=majority`
// )

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connection established")
});

// Middleware error handling
import errorHandlerMiddleware from "./middleware/errorHandler.js"
import notFoundMiddleware from "./middleware/notFound.js"

const app = express()
app.use(fileupload())

app.use(cors({ origin: "http://localhost:3000", exposedHeaders: ["token"] }))

// app.get('/', )

app.use(express.json())

// app.get("/", (req, res) => {
//   throw new Error("error")
//   res.send("Hello")
// })

// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 8000

app.use(morgan("dev"))

// app.get("/images/:fileName", async(req, res, next)=>{
//   const{fileName} = req.params
//   const image = await imagesCollection.findOne({fileName})
//   if (image){
//     let readStream = stream.Readable.from(image.data)
//     readStream.pipe(res)
//   } else {
//     return res.json("Image not found")
//   }
// })

//serve static files
app.use(express.static("./views/build"))

// index route
app.get("/", (req, res, next) => {
  res.sendFile("./views/build/index.html", {root: "."})
})

// Routes
app.use("/recipes", recipesRoute)
app.use("/users", usersRoute)
app.use("/images", imagesRoute)
//error handling
app.use((req, res, next) => {
  res.sendFile("./views/pageNotFound.html", { root: "." })
})
// universal error handler
app.use((err, req, res, next) => {
  res.json({ success: false, message: err })
})

app.listen(PORT, () => console.log("server running on port:", PORT))
