import "./Styles/masonryGrid.css";

import React from "react";

const MasonryGrid = ({ imagesWithColors }) => {
  return (
    <div className="masonry-grid">
      {imagesWithColors.map((image, index) => (
        <div
          key={index}
          className="masonry-item"
          style={{ backgroundColor: image.dominantColor }}
        >
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
