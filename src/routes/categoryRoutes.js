import express from "express";

import {
  createCategory,
  getCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/categories", createCategory);
router.get("/categories", getCategory);

export default router;
