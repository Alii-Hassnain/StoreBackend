import express from "express";
import connectDB from "./database/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const port = 3000;

const app = express();

// connect to database
connectDB();

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
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
