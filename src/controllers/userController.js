import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
//create a new user

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

    const avatarLocalPath = req.file.path;
    console.log(avatarLocalPath);
    
    const avatarUrl = await uploadOnCloudinary(avatarLocalPath);
    newUser.profile_picture = avatarUrl.url;
    console.log(avatarUrl);
        
    


  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
