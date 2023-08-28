
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Link} from "react-router-dom";

const SearchPage = ({setSearchQuery}) => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");
    
    if (searchQuery) {
  fetchSearchResults(searchQuery);
  }
  }, [location.search]);
  
    // Function to handle card click
    const handleLinkClick = () => {
      setSearchQuery(""); // Clear the search input when a card is clicked
    };

  const fetchSearchResults = (searchQuery) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${searchQuery}`
      )
      .then((response) => {
        setSearchResults(response.data.results);
        navigate(`/search?query=${searchQuery}`); 
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">Search Results</h2>
      <div className="list__cards d-flex flex-wrap justify-content-center">
        {searchResults.map((movie) => (
          
          <Link onClick={handleLinkClick}>
            <Card movie={movie} />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;




