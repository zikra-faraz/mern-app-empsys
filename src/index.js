import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import employeeRoute from "./route/eRoute.js";
import cors from "cors";
dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI || "";
console.log(mongoURI);
connectDB(mongoURI);
const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>helllo</h1>");
});

app.use("/api/data", employeeRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
