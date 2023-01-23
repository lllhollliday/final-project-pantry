import express from "express";
import { getSingleImage, postImage, updateImage, deleteImage } from "../controllers/imagescontroller.js";

const router = express.Router();

// Router Get "/images"
router.get("/:fileName", getSingleImage);
// Router Post "images"
router.post("/:fileName", postImage);
// Router Patch "/images"
router.patch("/:fileName", updateImage);
// Router Delete "/images"
router.delete("/:fileName", deleteImage);

export default router;