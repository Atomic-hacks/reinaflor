import React from "react";

const AnimatedPageTitle = ({ title, subtitle, className = "" }) => {
  return (
    <div className="overflow-hidden">
      <h2
        data-gsap="title"
        className={`text-6xl md:text-7xl font-semibold ${className}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <div className="overflow-hidden mt-4">
          <p
            data-gsap="fade-up"
            className="text-sm text-neutral-600 font-semibold"
          >
            {subtitle}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default AnimatedPageTitle;
