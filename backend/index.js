import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("connected with Mongo DB"))
    .catch((err) => console.log(err));
};

const startServer = async () => {
  connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

startServer();
