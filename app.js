const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//impoet other data files
const Listings = require("./models/listing");

//to connect to to database

main()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/airbnb_clone");
}

//start api codeing

app.get("/", (req, res) => {
  res.send("Hi I Am Root!");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listings.find({});
  res.render("./listings/index.ejs", { allListings });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
