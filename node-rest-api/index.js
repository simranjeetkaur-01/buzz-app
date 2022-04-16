const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv")
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to mongodb");
});
app.listen(3000, () => {
  console.log("Port is listeningkjjkjk");
});
