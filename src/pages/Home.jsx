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
      <div className="flex items-center w-full justify-center">
        {loading ? "Loading..." : error ? error : ""}
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
