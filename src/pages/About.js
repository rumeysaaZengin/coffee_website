import React from "react";
import BannerImage from "../assets/aboutpage.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          provident esse corrupti perspiciatis nobis consequuntur.
        </p>
      </div>
    </div>
  );
}

export default About;
