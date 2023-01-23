import mongoose from "mongoose"

const imagesSchema = new mongoose.Schema({
  fileName: String,
  data: Buffer,
})

const imagesCollection = mongoose.model("images", imagesSchema)

export default imagesCollection
