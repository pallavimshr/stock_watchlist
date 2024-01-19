import React from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname === "/";

  return (
    <div className="bg-blue-500 border-gray-200 px-4 md:px-6 lg:px-8 py-2.5 dark:bg-gray-800 flex items-center justify-between rounded-lg m-4">
      <span className="self-center text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap dark:text-white m-2 md:m-4 lg:m-6">
        {currentPage ? "Home" : "Watchlist"}{" "}
      </span>
      <Link to={currentPage ? "/watchlist" : "/"}>
        <button className="bg-white text-blue-500 px-2 md:px-4 py-1 md:py-2 rounded">
          {" "}
          {currentPage ? "Watchlist >>" : "<< Home"}
        </button>
      </Link>
    </div>
  );
};

export default Header;
