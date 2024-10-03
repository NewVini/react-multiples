
import React, { useRef } from 'react';
import './MovieCarousel.scss';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <h1>Netflix Movie Carousel</h1>
      <button className="nav-button left" onClick={() => handleScroll('left')}>
        &#8249;
      </button>
      <div className="movie-row" ref={carouselRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={() => handleScroll('right')}>
        &#8250;
      </button>
    </div>
  );
};

export default MovieCarousel;
