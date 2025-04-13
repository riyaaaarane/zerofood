import React, { useEffect, useState } from "react";
import axios from "axios";
import "../AppStyle.css";

export default function Receive() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  // 🔍 Filter logic
  const filteredListings = listings.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="receive-container">
      <h2>Available Food Listings</h2>

      {/* 🔍 Search bar */}
      <input
        type="text"
        placeholder="Search by title or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="listing-grid">
        {filteredListings.map((item, index) => (
          <div className="listing-card" key={index}>
            <h3>{item.title}</h3>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
            <p>
              <strong>Type:</strong> {item.type}
            </p>
            <p>
              <strong>Quantity:</strong> {item.quantity} plates
            </p>
            <p>
              <strong>Location:</strong> {item.location}
            </p>
            <p>
              <strong>Expires In:</strong> {item.expiresIn}
            </p>
            <p>
              <em>Posted on: {new Date(item.createdAt).toLocaleString()}</em>
            </p>
            <p>
              <strong>Contact:</strong> {item.contactEmail}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.contactEmail);
                  alert("Email copied to clipboard!");
                }}
                style={{
                  marginLeft: "10px",
                  padding: "2px 6px",
                  cursor: "pointer",
                  backgroundcolor : "black"
                }}
              >
                📋 Copy
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

