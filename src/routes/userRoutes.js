import express from "express";

import { createUser, getUser } from "../controllers/userController.js";

import { upload } from "../middleware/multer.js";

const router = express.Router();


router.route("/users").post(upload.single("profile_picture"),createUser)
// router.post("/users", createUser);
router.get("/users", getUser);

export default router;
