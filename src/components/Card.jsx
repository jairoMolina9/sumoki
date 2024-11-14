import React from "react";
import { FaHeart } from "react-icons/fa";

function Card({ img }) {
  return (
    <div className="w-48 h-75 rounded-lg shadow-lg bg-white p-6 flex flex-col items-center relative my-3 mx-2">
      {/* Heart Icon in the top right corner */}
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
        <FaHeart />
      </button>

      {/* Image */}
      <div className="rounded-full overflow-hidden bg-gray-100 w-32 h-32 flex items-center justify-center mb-6">
        <img
          src={img} // Use the passed image prop
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Price */}
      <div className="text-center mt-auto">
        <h3 className="text-lg font-semibold">Scoops</h3>
        <p className="text-gray-500 text-sm">Starting From</p>
        <p className="text-lg font-bold mt-1">$5</p>
      </div>
    </div>
  );
}

export default Card;
