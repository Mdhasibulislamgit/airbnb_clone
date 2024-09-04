const express = require("express");

const app = express();

const mongoose = require("mongoose");
const ejs = require("ejs");

//to connect to to database

main()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/airbnd_2");
}

//start api codeing

app.get("/", (req, res) => {
  res.send("Hi I Am Root!");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
