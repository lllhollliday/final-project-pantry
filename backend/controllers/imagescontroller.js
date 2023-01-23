import imagesCollection from "../models/imagesschema.js";
import stream from "stream";


export const getSingleImage = async(req, res, next)=>{
    const{fileName} = req.params
    const image = await imagesCollection.findOne({fileName})
    if (image){
      let readStream = stream.Readable.from(image.data)
      readStream.pipe(res)
    } else {
      return res.json("Image not found")
    }
  }; 

  export const postImage = async(req, res, next) => {
    res.send("images post req on /:fileName")
  };

  export const updateImage = async(req, res,next) => {
    res.send("image update req on /:fileName")
  };

  export const deleteImage = async(req, res, next) => {
    res.send("image delete req on /:fileName")
  };