//Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../AppStyle.css";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by looking for the token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set the login status based on the presence of the token
  }, []);

  const handleDonate = () => {
    if (isLoggedIn) {
      navigate("/donate"); // Redirect to the donate page
    } else {
      navigate("/login"); // Redirect to login page if not logged in
    }
  };

  const handleRequest = () => {
    if (isLoggedIn) {
      navigate("/receive"); // Redirect to the receive page
    } else {
      navigate("/login"); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">ZeroFood</h1>
      <p className="home-description">
        A platform that reduces food waste by connecting food donors with those in need.
      </p>
      <div className="home-buttons">
        <button className="home-button" onClick={handleDonate}>
          Donate Food
        </button>
        <button className="home-button" onClick={handleRequest}>
          Request Food
        </button>
      </div>
    </div>
  );
}
