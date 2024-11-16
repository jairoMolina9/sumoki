import React from "react";
import { FaHeart } from "react-icons/fa";

function Card({ img, title, description, price }) {
  return (
    <div className="w-36 h-60 rounded-lg shadow-lg bg-white p-2 flex flex-col items-center relative">
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
        <FaHeart />
      </button>
      <div className="rounded-full overflow-hidden bg-gray-100 w-24 h-24 flex items-center justify-center mb-2">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center mt-auto">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-gray-500 text-xs">{description}</p>
        <p className="text-sm font-bold mt-1">{price}</p>
      </div>
    </div>
  );
}

export default Card;
