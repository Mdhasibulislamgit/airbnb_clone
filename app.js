// Import required packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");

// Middleware and View Engine Setup
app.set("view engine", "ejs"); // Set EJS as the view engine
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(methodOverride("_method")); // Override POST methods with query parameter ?_method=PUT/DELETE

// Import models
const Listings = require("./models/listing"); // Import the 'Listing' model

// Database connection setup
main()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(err);
  });

// Async function to connect to MongoDB
async function main() {
  await mongoose.connect("mongodb://localhost:27017/airbnb_clone"); // Connect to local MongoDB database
}

// CRUD Operations (Routes)

// Root route
app.get("/", (req, res) => {
  res.send("Hi I Am Root!"); // Root route, simply sends a response
});

// Get all listings
app.get("/listings", async (req, res) => {
  const allListings = await Listings.find({}); // Retrieve all listings from the database
  res.render("./listings/index.ejs", { allListings }); // Render index view with all listings
});

// New listing form route
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs"); // Render form to create a new listing
});

// Create new listing route
app.post("/listings", async (req, res) => {
  const newListing = new Listings(req.body.listing); // Create a new listing object with form data
  await newListing.save(); // Save the new listing to the database
  res.redirect("/listings"); // Redirect to the listings page after saving
});

// Show a single listing route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listings.findById(id); // Find listing by ID
  res.render("./listings/show.ejs", { listing }); // Render show view with the specific listing
});

// Edit listing form route
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listings.findById(id); // Find listing by ID to edit
  res.render("./listings/edit.ejs", { listing }); // Render edit form with the listing details
});

// Update listing route
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listings.findByIdAndUpdate(id, req.body.listing); // Update listing with new data
  res.redirect("/listings"); // Redirect to listings page after update
});

// Delete listing route
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listings.findByIdAndDelete(id); // Delete listing by ID
  res.redirect("/listings"); // Redirect to listings page after deletion
});

// Start the server
app.listen(8080, () => {
  console.log("Server started on port 8080"); // Log when the server is running
});
