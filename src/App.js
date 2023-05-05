import React, { useState } from "react";

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      (currentImageIndex + images.length - 1) % images.length
    );
  };

  return (
    <div>
      <button onClick={handlePreviousClick}>Previous</button>
      <img src={images[currentImageIndex]} alt="slider" />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default ImageSlider;
