import React, { useState } from "react";

const imageUrls = [
  "https://picsum.photos/id/237/300/200",
  "https://picsum.photos/id/238/300/200",
  "https://picsum.photos/id/239/300/200",
  "https://picsum.photos/id/240/300/200",
  "https://picsum.photos/id/241/300/200",
  "https://picsum.photos/id/242/300/200",
  "https://picsum.photos/id/243/300/200",
  "https://picsum.photos/id/244/300/200",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextFoto = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevFoto = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const actualFoto = imageUrls[currentIndex];

  return (
    <div>
      <button onClick={handlePrevFoto} disabled={currentIndex === 0}>
        Prev
      </button>
      <img src={actualFoto} alt="actual foto" />
      <button
        onClick={handleNextFoto}
        disabled={currentIndex === imageUrls.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
