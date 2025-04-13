const mongoose = require("mongoose");

const foodListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  expiresIn: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  contactEmail: { type: String, required: true}
});

module.exports = mongoose.model("FoodListing", foodListingSchema);
