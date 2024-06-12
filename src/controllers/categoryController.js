import { Category } from "../models/category.models.js";

export const createCategory = async (req, res) => {
  const category = req.body;
  const newCategory = new Category(category);
  try {
    await newCategory.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
