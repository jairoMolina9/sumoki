import React from "react";
import { FaHeart } from "react-icons/fa";

function Card({ img, title, description, price, onClick }) {
  return (
    <div
      className="w-48 h-75 rounded-lg shadow-lg bg-white p-4 flex flex-col items-center relative cursor-pointer"
      onClick={onClick}
    >
      <div className="rounded-full overflow-hidden bg-gray-100 w-32 h-32 flex items-center justify-center mb-4">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center mt-auto">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="text-base font-bold mt-2">{price}</p>
      </div>
    </div>
  );
}

export default Card;
