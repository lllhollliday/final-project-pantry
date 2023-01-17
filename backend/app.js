import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors"
import recipesRoute from './routes/recipesroute.js'
dotenv.config()

// Connecting to database / authenticate user
import connectDB from "./db/connect.js"
connectDB(`mongodb+srv://finalproject:Dci1234!@final-project-pantry.guvtnoz.mongodb.net/?retryWrites=true&w=majority`)
// Middleware error handling
import errorHandlerMiddleware from "./middleware/errorHandler.js"
import notFoundMiddleware from "./middleware/notFound.js"

const app = express()

app.use(cors({origin:"http://localhost:3000"}))

app.get('/', )

app.use(express.json())

// app.get("/", (req, res) => {
//   throw new Error("error")
//   res.send("Hello")
// })

// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 8000

app.use(morgan("dev"))

// Routes
app.use("/recipes", recipesRoute)

// app.use("/users", usersRoute)

// server will only start if connection to database is successful
/* const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, () => console.log("server is running on port", PORT))
  } catch (error) {
    console.log(error)
  }
}

start() */

app.listen(PORT, () => console.log('server running on port:', PORT))
