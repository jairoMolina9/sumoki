import React from "react";
import { FaHome, FaComments, FaShoppingBag, FaUser } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";

function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-gray-800 rounded-full p-4 flex justify-around items-center shadow-lg">
      <button className="flex flex-col items-center text-white">
        <div className="bg-gray-200 rounded-full p-2">
          <FaHome className="text-xl text-black" />
        </div>
      </button>
      <button className="flex flex-col items-center text-white">
        <TbRobot className="text-2xl" />
      </button>
      <button className="flex flex-col items-center text-white">
        <FaShoppingBag className="text-2xl" />
      </button>
    </footer>
  );
}

export default Footer;
