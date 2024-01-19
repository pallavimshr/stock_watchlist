// SearchBar.js
import React from "react";

const SearchBar = ({ query, setQuery }) => {
  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for companies..."
          className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="ml-2 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>{" "}
    </div>
  );
};

export default SearchBar;
