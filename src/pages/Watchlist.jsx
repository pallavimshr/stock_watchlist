import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/Watchlistreducer";

const Watchlist = () => {
  const dispatch = useDispatch();

  const watchlistItems = useSelector((state) => state.watchlist);

  const handleRemoveItem = (company) => {
    dispatch(removeItem(company));
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md mt-4 text-center sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      {watchlistItems.length === 0 ? (
        <p className="text-lg font-semibold text-gray-800">
          Nothing here. Add some stocks!
        </p>
      ) : (
        <ul>
          {watchlistItems.map((company) => (
            <li
              className=" flex flex-col items-center border-b p-2 mb-2"
              key={company.symbol}
            >
              <div className="flex items-center mb-2">
                {" "}
                <span className="text-lg font-semibold mr-1">
                  {company.name}
                </span>
                <span className="text-gray-500 mr-1">
                  {company.latestPrice}
                </span>
              </div>
              <button
                className={`bg-red-500 text-white p-1 rounded-full`}
                onClick={() => {
                  handleRemoveItem(company);
                }}
              >
                <span className="text-2xl">-</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
