import React from "react";

const RevealImage = ({
  src,
  alt = "",
  className = "",
  imgClassName = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      data-gsap="reveal-image"
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imgClassName}`}
        draggable={false}
      />
    </div>
  );
};

export default RevealImage;
