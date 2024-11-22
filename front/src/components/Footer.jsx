import React, { useState } from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";

function Footer() {
  const [active, setActive] = useState("home"); // Default to "home" as selected

  const buttonClasses = (buttonName) =>
    `flex flex-col items-center ${
      active === buttonName ? "text-blue-500" : "text-gray-400"
    } hover:text-blue-500`;

  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-gray-800 rounded-full p-4 flex justify-around items-center shadow-lg">
      <button
        onClick={() => setActive("home")}
        className={buttonClasses("home")}
      >
        <FaHome className="text-2xl" />
      </button>
      <button
        onClick={() => setActive("robot")}
        className={buttonClasses("robot")}
      >
        <TbRobot className="text-2xl" />
      </button>
      <button
        onClick={() => setActive("shopping")}
        className={buttonClasses("shopping")}
      >
        <FaShoppingBag className="text-2xl" />
      </button>
    </footer>
  );
}

export default Footer;
