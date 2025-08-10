import React from "react";

const PulsatingHeart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 text-[#4EC7C2] animate-pulse mb-6"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.53C11.09 5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <h1 className="text-xl justify-center mt-4 font-extrabold text-slate-600 max-w-2xl">
        Thank you for joining our community! We appreciate you taking this step toward understanding your health records.
      </h1>
      <p className="mt-2 justify-center text-gray-600">
        You're on the list and will be notified as soon as we're ready.
      </p>
    </div>
  );
};

export default PulsatingHeart;
