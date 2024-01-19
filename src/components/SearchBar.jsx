// SearchBar.js
import {React , useState} from "react";

const SearchBar = ({ query, setQuery, onApiKeySubmit }) => {
  const [apiKey, setApiKey] = useState("");
  const handleSubmit = () => {
    // Submit the API key to the parent component
    onApiKeySubmit(apiKey);

    // Clear the input field
    setApiKey("");
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div>
      <div className="max-w-sm mx-auto p-4 bg-white rounded shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter your API key"
            className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button
            className="ml-2 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
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
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default SearchBar;
