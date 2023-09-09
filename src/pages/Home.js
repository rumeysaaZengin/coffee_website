import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>coffee  33</h1>
        <p>
          Delicious coffee <br /> with 33 mix coffee
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;