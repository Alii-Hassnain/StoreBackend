import express from "express";

import { createProduct, getProduct } from "../controllers/productController.js";

import { upload } from "../middleware/multer.js";


const router = express.Router();

router.route("/products").post(upload.single("product_image"), createProduct);
router.get("/products", getProduct);


export default router;