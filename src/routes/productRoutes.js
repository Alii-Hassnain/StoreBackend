import express from "express";

import { createProduct, getProduct } from "../controllers/productController.js";

import { upload } from "../middleware/multer.js";


// router.route("/register").post(
//     upload.fields([
//         {
//             name: "avatar",
//             maxCount: 1
//         }, 
//         {
//             name: "coverImage",
//             maxCount: 1
//         }
//     ]),
//     registerUser
//     )

const router = express.Router();

router.route("/products").post(
    upload.fields([
        {
            name: "image",
            maxCount: 1
        }
    ]),
    createProduct
)
router.get("/products", getProduct);
