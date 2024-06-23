import { Product } from "../models/product.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new Product(product);
  const avatarLocalPath = req.file.path;
  console.log(avatarLocalPath);

  const avatarUrl = await uploadOnCloudinary(avatarLocalPath);
  newProduct.product_image = avatarUrl.url;
  console.log(avatarUrl);
  try {
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    console.log("something is wrong");
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json("Product deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
