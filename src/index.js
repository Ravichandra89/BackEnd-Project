import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Config the DotEnv
dotenv.config({
  path: "./env",
});

const app = express();

connectDB()
  .then(() => {
    app.listen(8000 || process.env.PORT, () => {
      console.log(`Server Running on ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log("ERROR : ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MongoDb connection Failer", err);
  });
