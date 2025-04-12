import React, { useState } from "react";
import "../AppStyle.css";
import axios from "axios";

export default function Donate() {
  const [listingData, setListingData] = useState({
    title: "",
    description: "",
    type: "",
    quantity: "",
    location: "",
    expiresIn: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/food", listingData);
      alert("Listing created successfully!");
      // Optionally reset form:
      setListingData({
        title: "",
        description: "",
        type: "",
        quantity: "",
        location: "",
        expiresIn: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create listing");
    }
  };

  return (
    <div className="donate-container">
      <h2 className="donate-title">Create New Listing</h2>
      <form onSubmit={handleSubmit} className="donate-form">
        <input
          type="text"
          placeholder="Food Title"
          value={listingData.title}
          onChange={(e) =>
            setListingData({ ...listingData, title: e.target.value })
          }
          required
          className="donate-input"
        />
        <textarea
          placeholder="Description"
          value={listingData.description}
          onChange={(e) =>
            setListingData({ ...listingData, description: e.target.value })
          }
          required
          className="donate-input"
        />
        <input
          type="text"
          placeholder="Type of Food (Veg/Non-Veg, etc.)"
          value={listingData.type}
          onChange={(e) =>
            setListingData({ ...listingData, type: e.target.value })
          }
          required
          className="donate-input"
        />
        <input
          type="number"
          placeholder="Quantity in plates"
          value={listingData.quantity}
          onChange={(e) =>
            setListingData({ ...listingData, quantity: e.target.value })
          }
          required
          className="donate-input"
        />
        <input
          type="text"
          placeholder="Location"
          value={listingData.location}
          onChange={(e) =>
            setListingData({ ...listingData, location: e.target.value })
          }
          required
          className="donate-input"
        />
        <input
          type="text"
          placeholder="Expires in (e.g., 2 hours)"
          value={listingData.expiresIn}
          onChange={(e) =>
            setListingData({ ...listingData, expiresIn: e.target.value })
          }
          required
          className="donate-input"
        />
        <button type="submit" className="donate-submit-button">
          Submit Listing
        </button>
      </form>
    </div>
  );
}
