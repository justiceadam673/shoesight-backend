import express from "express";
import cors from "cors";
// import apiRoute form "./routes/api.route.js"
import apiRoute from "./routes/api.route.js";
import connectDB from "./database/db.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", apiRoute);
app.use((err, req, res, next) => {
  // console.log(err);
  res.status(422).send({ error: err.message });
});

app.get("/", (req, res) => {
  res.send({ name: "justice", message: "we are here again" });
});

app.listen(9000, () => {
  console.log("server running ");
});
