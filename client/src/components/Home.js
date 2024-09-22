import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <h1>Welcome to Our School</h1>
        <p>Your future starts here.</p>
      </div>
    </div>
  );
};

export default Home;
