import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Home.css";
import MovieList from "../../components/MovieList";

const Home = ({ searchQuery, setSearchQuery }) => {
  // State to store popular and searched movies
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  // Fetch popular movies on component mount
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  // Fetch popular movies using axios
  const fetchPopularMovies = () => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "4e44d9029b1270a757cddc766a1bcb63",
          language: "en-US",
        },
      })
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  };

  // Fetch searched movies based on searchQuery
  useEffect(() => {
    if (searchQuery !== "") {
      fetchSearchedMovies();
    } else {
      setSearchedMovies([]);
    }
  }, [searchQuery]);

  // Fetch searched movies using axios
  const fetchSearchedMovies = () => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "4e44d9029b1270a757cddc766a1bcb63",
          language: "en-US",
          query: searchQuery,
        },
      })
      .then((response) => {
        setSearchedMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error searching movies:", error);
      });
  };

  return (
    <div className="home-container">
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {/* Display popular movie posters in a carousel */}
          {popularMovies.map((movie) => (
            <Link
              className="text-decoration-none text-white"
              to={`/movie/${movie.id}`}
              key={movie.id}
            >
              <div className="posterImage">
                <img
                  className="m-auto w-100 d-block"
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.original_title}
                />
              </div>
              {/* Overlay with movie details */}
              <div className="posterImage__overlay position-absolute d-flex flex-column w-100 align-items-start justify-content-end">
                <div className="posterImage__title fw-semibold">
                  {movie.original_title}
                </div>
                <div className="posterImage__runtime mb-3">
                  {movie.release_date}
                  <span className="posterImage__rating ms-4">
                    {movie.vote_average}
                    <i className="fas fa-star ms-2" />
                  </span>
                </div>
                <div className="posterImage__description fst-italic w-50 d-flex text-lg-start">
                  {movie.overview}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        {/* Display MovieList component */}
        <MovieList
          searchedMovies={searchedMovies}
          movies={searchQuery !== "" ? searchedMovies : popularMovies}
        />
      </div>
    </div>
  );
};

export default Home;
