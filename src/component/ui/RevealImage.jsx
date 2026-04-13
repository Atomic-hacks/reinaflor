import React from "react";

const RevealImage = ({
  src,
  alt = "",
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      data-gsap="reveal-image"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
};

export default RevealImage;
