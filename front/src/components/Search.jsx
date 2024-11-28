import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div className="flex justify-center w-full">
      <input
        type="text"
        placeholder="Search for items..."
        value={value}
        onChange={onChange}
        className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2 border rounded text-black"
      />
    </div>
  );
};

export default Search;