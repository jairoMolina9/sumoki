import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import sumoki from "../assets/sumokiLogo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the hamburger menu
  const location = useLocation(); // Get the current location

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow dark:bg-black">
      <div className="container mx-auto flex items-center justify-between p-6 text-gray-600 capitalize dark:text-gray-300">
        {/* Logo on the left */}
        <Link to="/">
          <img
            src={sumoki}
            alt="Sumoki Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white dark:bg-black md:bg-transparent z-10`}
        >
          <Link
            to="/"
            className={`${
              isActive("/")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-white"
                : "hover:text-gray-800 dark:hover:text-gray-200 hover:border-white"
            } block md:inline-block px-4 py-2 md:p-0`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`${
              isActive("/menu")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-white"
                : "hover:text-gray-800 dark:hover:text-gray-200 hover:border-white"
            } block md:inline-block px-4 py-2 md:p-0`}
          >
            Menu
          </Link>
          <Link
            to="/info"
            className={`${
              isActive("/info")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-white"
                : "hover:text-gray-800 dark:hover:text-gray-200 hover:border-white"
            } block md:inline-block px-4 py-2 md:p-0`}
          >
            Info
          </Link>
          <Link
            to="/careers"
            className={`${
              isActive("/careers")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-white"
                : "hover:text-gray-800 dark:hover:text-gray-200 hover:border-white"
            } block md:inline-block px-4 py-2 md:p-0`}
          >
            Careers
          </Link>
          <a
            href="https://www.opentable.ca/restref/client/?restref=1369162&lang=en-CA&ot_source=Restaurant%20website&corrid=5bf72732-61ae-4212-819f-e4966c7fa423"
            className="block md:inline-block px-4 py-2 md:p-0 hover:text-gray-800 dark:hover:text-gray-200"
          >
            Reservation
          </a>
          <Link
            to="/egift-card"
            className={`${
              isActive("/egift-card")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-white"
                : "hover:text-gray-800 dark:hover:text-gray-200 hover:border-white"
            } block md:inline-block px-4 py-2 md:p-0`}
          >
            E-Gift Card
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
