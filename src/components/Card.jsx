import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? ( // Display skeleton loader while loading
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        // Display movie card when loading is done
        <Link to={`/movie/${movie.id}`} className="text-decoration-none text-white">
          <div className="cards d-inline-block position-relative rounded-3 overflow-hidden">
            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ''}`} alt={movie ? movie.original_title : ''} />
            <div className="cards__overlay position-absolute d-flex flex-column justify-content-end w-100">
              <div className="card__title">{movie ? movie.original_title : ''}</div>
              <div className="card__runtime">
                {movie ? movie.release_date : ''}
                <span className="card__rating">
                  {movie ? movie.vote_average : ''}
                  <i className="fas fa-star ms-2" />
                </span>
              </div>
              <div className="card__description fst-italic">
                {movie ? movie.overview.slice(0, 118) + '...' : ''}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
