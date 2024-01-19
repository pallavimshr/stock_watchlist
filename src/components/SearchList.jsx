import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/Watchlistreducer";

const SearchList = ({ searchResults, setSearchResults }) => {
  const dispatch = useDispatch();
  const [clickedButtons, setClickedButtons] = useState({});

  const handleAddItem = (company) => {
    dispatch(addItem(company));

    // Remove the company from the search results on which the user clicked the add button
    setSearchResults((prevSearchResults) =>
      prevSearchResults.filter((item) => item.symbol !== company.symbol),
    );

    setClickedButtons((prevClickedButtons) => ({
      ...prevClickedButtons,
      [company.symbol]: true,
    }));

    setTimeout(() => {
      setClickedButtons((prevClickedButtons) => ({
        ...prevClickedButtons,
        [company.symbol]: false,
      }));
    }, 500);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md mt-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <ul className="h-96 overflow-y-scroll">
        {searchResults.map((company) => (
          <li
            className=" flex flex-col items-center border-b p-2 mb-2"
            key={company.symbol}
          >
            <div className="flex items-center mb-2">
              {" "}
              <span class="text-lg font-semibold mr-1">{company.name}</span>
              <span className=" text-gray-500 mr-1">{company.latestPrice}</span>
            </div>
            <button
              onClick={() => handleAddItem(company)}
              className={`bg-${clickedButtons[company.symbol] ? "blue-200" : "blue-500"} text-white p-1 rounded-full`}
            >
              <span className="text-2xl">+</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
