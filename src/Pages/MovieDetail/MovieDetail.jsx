import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetail.css";

const MovieDetail = () => {
  // State to store current movie details
  const [currentMovieDetail, setMovieDetail] = useState();
  
  // Extract 'id' parameter from URL using useParams
  const { id } = useParams();

  // Fetch movie details on component mount
  useEffect(() => {
    fetchMovieDetails();
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  // Fetch movie details using axios
  const fetchMovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((response) => {
        setMovieDetail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="movie w-100 position-relative d-flex flex-column align-items-center">
      {/* Display backdrop image in a div */}
      <div className="movie__intro">
        <img
          className="movie__backdrop d-none d-md-flex w-100 object-fit-cover"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          alt={currentMovieDetail ? currentMovieDetail.original_title : ""}
        />
      </div>
      <div className="movie__detail align-items-center w-75 d-block position-relative d-sm-flex">
        <div className="movie__detailLeft">
          {/* Display movie poster */}
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt={currentMovieDetail ? currentMovieDetail.original_title : ""}
            />
          </div>
        </div>
        <div className="movie__detailRight d-flex flex-column justify-content-between text-white">
          <div className="movie__detailRightTop">
            {/* Display movie details */}
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="movie__genres flex-wrap d-flex">
              {/* Display movie genres */}
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="movie__genre my-2"
                      id={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            {/* Display movie synopsis */}
            <div className="synopsisText d-flex position-relative fw-bold">
              Synopsis
            </div>
            <div>
              {currentMovieDetail ? currentMovieDetail.overview : ""}
            </div>
            <div className="fs-4 d-block d-sm-flex align-content-center flex-wrap mt-3">
              Useful Links :
              {/* Display useful links if available */}
              {currentMovieDetail && currentMovieDetail.homepage && (
                <a
                  href={currentMovieDetail.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <p>
                    <span className="d-flex justify-content-center align-items-center rounded-3 text-black bg-warning fw-bold mx-1 p-1 mx-md-3 p-md-2 fs-6">
                      Homepage{" "}
                      <i className="newTab fas fa-external-link-alt ms-2"></i>
                    </span>
                  </p>
                </a>
              )}
              {currentMovieDetail && currentMovieDetail.imdb_id && (
                <a
                  href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <p>
                    <span className="d-flex fs-5 justify-content-center align-items-center rounded-3 text-black bg-warning fw-bold mx-1 p-1 mx-md-2 p-md-2 fs-6">
                      IMDb{" "}
                      <i className="newTab fas fa-external-link-alt ms-2"></i>
                    </span>
                  </p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
