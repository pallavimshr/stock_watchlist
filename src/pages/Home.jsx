import { React, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import useStockSearch from "../hooks/stockSearch";

function Home() {
  const [query, setQuery] = useState("");

  const { searchResults, loading, error, setSearchResults } =
    useStockSearch(query);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md mt-4 text-center sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <p className="text-lg font-semibold text-gray-800">
          {query === ""
            ? "Search for your favourite Companies!"
            : loading
              ? "Loading..."
              : error
                ? error
                : ""}
        </p>
      </div>
      {!loading && !error && searchResults.length !== 0 && (
        <SearchList
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      )}
    </div>
  );
}

export default Home;
