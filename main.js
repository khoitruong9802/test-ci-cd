const express = require("express");

const app = express();

app.get("/data", (req, res) => {
  res.status(200).json({
    message: "ok ban oi",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
