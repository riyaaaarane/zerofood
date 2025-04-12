const express = require("express");
const router = express.Router();
const FoodListing = require("../models/FoodListing"); // adjust path if needed

// POST /api/food
router.post("/food", async (req, res) => {
  try {
    const { title, description, type, quantity, location, expiresIn } = req.body;

    if (!title || !description || !type || !quantity || !location || !expiresIn) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newListing = new FoodListing({
      title,
      description,
      type,
      quantity,
      location,
      expiresIn,
    });

    await newListing.save();
    res.status(201).json({ message: "Listing created successfully" });
  } catch (error) {
    console.error("Error creating listing:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

// GET /api/listings
router.get("/listings", async (req, res) => {
  try {
    const listings = await FoodListing.find().sort({ createdAt: -1 });
    res.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ error: "Server error" });
  }
});
