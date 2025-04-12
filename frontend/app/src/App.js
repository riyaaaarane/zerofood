import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";          // Adjusted path
import LoginSignup from "./components/LoginSignup"; // Adjusted path
import Receive from "./components/Receive";    // Adjusted path
import Donate from "./components/Donate";     // Adjusted path
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
