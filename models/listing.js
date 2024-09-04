const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,

  image: {
    type: String,
    //to set default image values
    default:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-fire-place-GWdZpXUPMs0"
        : v,
  },

  price: Number,

  location: String,

  country: String,
});

const Listings = mongoose.model("Listings", listingSchema);

module.exports = Listings;
