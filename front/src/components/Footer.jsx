import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="w-full py-10 bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <a href="https://pagedone.io/" className="flex justify-center">
            <svg
              className="w-32 h-6"
              viewBox="0 0 164 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths here */}
            </svg>
          </a>
          <ul className="text-base flex items-center justify-center flex-col gap-5 md:flex-row md:gap-8 transition-all duration-500 py-12 mb-8 border-b border-gray-700">
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                Sumoki
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                Support
              </a>
            </li>
          </ul>
          <div className="flex space-x-8 justify-center items-center mb-10">
            <a
              href="#"
              className="block text-gray-300 transition-all duration-500 hover:text-indigo-400"
            >
              <AiFillTwitterCircle size={25} />
            </a>
            <a
              href="#"
              className="block text-gray-300 transition-all duration-500 hover:text-indigo-400"
            >
              <AiFillInstagram size={25} />
            </a>
            <a
              href="#"
              className="block text-gray-300 transition-all duration-500 hover:text-indigo-400"
            >
              <AiFillFacebook size={25} />
            </a>
            <a
              href="#"
              className="block text-gray-300 transition-all duration-500 hover:text-indigo-400"
            >
              <AiFillYoutube size={25} />
            </a>
          </div>
          <span className="text-base text-gray-400 text-center block">
            ©
            <a
              href="https://pagedone.io/"
              className="text-gray-300 hover:text-gray-100"
            >
              {" "}
              Sumoki
            </a>{" "}
            2024, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
