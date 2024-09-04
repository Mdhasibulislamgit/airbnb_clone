const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");

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

app.get("/testlistings", async (req, res) => {
  let sampleListing = new Listings({
    title: "Sample Listing",
    description: "This is a sample listing.",
    price: 200,
    location: "New York",
    country: "United States;",
  });

  await sampleListing.save();
  console.log("Sample Listing saved");
  res.send("Sample listing created");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
