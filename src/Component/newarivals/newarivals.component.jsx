import React from "react";
import "./newArivals.css";
import { Link } from "react-router-dom";
const img = new Image();

const NewArivals = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  img.onload = () => {
    img.src =
      "https://flevix.com/wp-content/uploads/2019/12/Barline-Loading-Images-1.gif";
  };
  return (
    <div class="gallery">
      {images.map((image, index) => (
        <Link key={index} className="grid-item">
          <div className="background">
            <img
              src={`https://source.unsplash.com/collection/${index}`}
              alt="hekk"
            />
          </div>
          <div className="content">New Arivals</div>
        </Link>
      ))}
    </div>
  );
};

export default NewArivals;
