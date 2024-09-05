const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

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

//to insert data into database

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data inserted");
};

initDB();
