const express = require("express");
const app = express();
const Port = 5040;
const mongoDB = require("./db");
mongoDB();

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// const PORT = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
