import { useState, useEffect } from "react";
import axios from "axios";

const useStockSearch = (query, apiKey) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetchStockData is an async function that fetches stock data from the Alpha Vantage API.
  const fetchStockData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ALPHAVANTAGE_URL}/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${apiKey}`,
      );

      if (response.data?.bestMatches) {
        const filteredCompanies = response.data.bestMatches.filter((company) =>
          company["2. name"].toLowerCase().startsWith(query.toLowerCase()),
        );

        const companies = filteredCompanies.map((company) => ({
          symbol: company["1. symbol"],
          name: company["2. name"],
        }));

        const companiesWithPrices = await Promise.all(
          companies.map(async (company) => {
            const priceResponse = await axios.get(
              `${process.env.REACT_APP_ALPHAVANTAGE_URL}/query?function=GLOBAL_QUOTE&symbol=${company.symbol}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`,
            );

            const latestPrice = priceResponse.data["Global Quote"]["05. price"];

            return { ...company, latestPrice };
          }),
        );
        if (!companiesWithPrices.length) {
          setError("No results found.");
        }
        setSearchResults(companiesWithPrices);
      } else {
        setSearchResults([]);
        setError(
          "Looks like you have reached your API limit. Please try again later.",
        );
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (query.length > 0) {
        fetchStockData();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return {
    searchResults, // use to give search results to the SearchResults component to render
    loading, // use to show a loading indicator
    error, // use to show an error message
    setSearchResults, // use to remove those search results when the user clicks on the "+" button
  };
};

export default useStockSearch;
