import React from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";

function Search() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md  rounded-full shadow-lg flex items-center p-2 z-50">
      {/* Search Input */}
      <div className="flex items-center flex-grow bg-gray-100 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
        />
        <FaSearch className="text-gray-500 ml-2" />
      </div>
    </div>
  );
}

export default Search;
