import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Card from "../../components/Card";
import debounce from 'lodash/debounce';

const SearchPage = ({ setSearchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  // Create a debounced function for fetching search results
  const debouncedFetchSearchResults = debounce((searchQuery) => {
    fetchSearchResults(searchQuery);
  }, 500); 

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    if (searchQuery) {
      debouncedFetchSearchResults(searchQuery);
    }
  }, [location.search]);

  // Function to handle card click
  const handleLinkClick = () => {
    setSearchQuery(""); // Clear the search input when a card is clicked
  };

  const fetchSearchResults = (searchQuery) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${searchQuery}`
      )
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="movie__list mt-5 py-3">
      <h2 className="list__title fs-4 d-flex justify-content-center ">Search Results</h2>
      <div className="list__cards d-flex flex-wrap justify-content-center">
        {searchResults.map((movie) => (
          <Link key={movie.id} onClick={handleLinkClick} to={`/movie/${movie.id}`}>
            <Card movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
