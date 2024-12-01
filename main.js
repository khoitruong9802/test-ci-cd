const express = require("express");
require("dotenv").config();

const app = express();

app.get("/data", (req, res) => {
  res.status(200).json({
    message: "ok ban oi",
  });
});

app.get("/secret", (req, res) => {
  res.status(200).json({
    message: process.env.SECRET,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
