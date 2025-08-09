import React from "react";

const PulsatingHeart: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 text-[#4EC7C2] animate-pulse"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
        6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 
        2.53C11.09 5.01 12.76 4 14.5 4 
        17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 
        11.54L12 21.35z" />
      </svg>
    </div>
  );
};

export default PulsatingHeart;
