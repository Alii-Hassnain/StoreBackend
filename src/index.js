import express from "express";
import connectDB from "./database/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
  });
  
//import routes....
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";

const port = process.env.PORT;
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

//use routers
app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);


// for testing purpose
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/post", (req, res) => {
  res.send("Post request");
});
