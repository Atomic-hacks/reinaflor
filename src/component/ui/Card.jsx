import React from "react";

const Card = ({ img, hoverImg, alt, price, title, onQuickAdd }) => {
  return (
    <div className="w-full max-w-xl mb-8 group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-[#f0f0f0] aspect-3/4 flex flex-col justify-center">
        <img
          src={img || "/img/short.png"}
          alt={alt || title}
          className="object-center transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={hoverImg || "/img/sweatshirt.png"}
          alt={alt || title}
          className="absolute top-20 right-0 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Button - shows on card hover, icon rotates on button hover */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onQuickAdd?.();
          }}
          className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center justify-between w-40 border border-white bg-black px-4 py-2 text-white transition-all duration-400 hover:px-6 group/button"
        >
          <p>Quick Add</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transition-transform duration-300 group-hover/button:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      {/* Text Section */}
      <div className="flex w-full justify-between pt-4">
        <p className="text-neutral-800 font-semibold">{title}</p>
        <p className="text-neutral-800 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default Card;
