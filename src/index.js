import express from "express";
import connectDB from "./database/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;


const app = express();

// connect to database
connectDB()
.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})
.catch((error) => {
  console.log(error.message);
});

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/post", (req, res) => {
  res.send("Post request");
}
);

