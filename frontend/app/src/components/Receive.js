import React, { useEffect, useState } from "react";
import axios from "axios";
import "../AppStyle.css";

export default function Receive() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/listings");
        setListings(res.data);
      } catch (err) {
        console.error("Error fetching listings", err);
      }
    };
    fetchListings();
  }, []);

  return (
    <div className="receive-container">
      <h2>Available Food Listings</h2>
      <div className="listing-grid">
        {listings.map((item, index) => (
          <div className="listing-card" key={index}>
            <h3>{item.title}</h3>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Quantity:</strong> {item.quantity} plates</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Expires In:</strong> {item.expiresIn}</p>
            <p><em>Posted on: {new Date(item.createdAt).toLocaleString()}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
}
