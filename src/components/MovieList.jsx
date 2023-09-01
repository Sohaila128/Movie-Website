import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import axios from "axios";

const MovieList = ({ movies, searchQuery }) => {
  // State to store the list of movies
  const [movieList, setMovieList] = useState([]);

  // Extract 'type' parameter from URL using useParams
  const { type } = useParams();

  // Effect to update movieList based on searchQuery and movies
  useEffect(() => {
    if (searchQuery !== "") {
      // If searchQuery exists, display movies from search
      setMovieList(movies);
    } else {
      // If searchQuery is empty, fetch movies based on 'type'
      fetchMovieDetails();
    }
  }, [movies, searchQuery]);

  // Effect to fetch movieList based on 'type' parameter
  useEffect(() => {
    fetchMovieDetails();
  }, [type]);

  // Function to fetch movie details using axios
  const fetchMovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((response) => {
        setMovieList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="movie__list py-5">
      <h2 className="list__title">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="list__cards d-flex flex-wrap justify-content-center">
        {/* Map through movieList and render Card component */}
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
