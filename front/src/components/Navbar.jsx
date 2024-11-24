import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav className="bg-white shadow dark:bg-black">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/"
            className={`mx-1.5 sm:mx-6 ${
              isActive("/")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
            }`}
          >
            Home
          </Link>

          <Link
            to="/menu"
            className={`mx-1.5 sm:mx-6 ${
              isActive("/menu")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
            }`}
          >
            Menu
          </Link>

          <Link
            to="/info"
            className={`mx-1.5 sm:mx-6 ${
              isActive("/info")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
            }`}
          >
            Info
          </Link>

          <Link
            to="/careers"
            className={`mx-1.5 sm:mx-6 ${
              isActive("/careers")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
            }`}
          >
            Careers
          </Link>

          <Link
            to="/reservation"
            className={`mx-1.5 sm:mx-6 ${
              isActive("/reservation")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
            }`}
          >
            Reservation
          </Link>

          <Link
            to="/egift-card"
            className={`mx-1.5 sm:mx-6 ${
              isActive("/egift-card")
                ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
            }`}
          >
            E-Gift Card
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
