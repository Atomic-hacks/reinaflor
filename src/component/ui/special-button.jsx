import React from "react";
import clsx from "clsx";

const Button = ({ id, title, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      id={id?.toString()}
      className={clsx("group relative z-10 w-fit ", containerClass)}
    >
      <span className="h-4 w-4 rounded-full bg-white transition-opacity duration-500" />
      {leftIcon && <span className="inline-flex items-center">{leftIcon}</span>}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <span className="translate-y-0 skew-y-0 transition duration-700 ease-in-out group-hover:-translate-y-[160%] group-hover:skew-y-12">
          {title}
        </span>
        <span className="absolute translate-y-[164%] skew-y-12 transition duration-700 ease-in-out group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </span>
      </span>

      {rightIcon && (
        <span className="ml-2 inline-flex items-center">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
