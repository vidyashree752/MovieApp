// src/api/tmdb.js
import nowPlaying from './fallback/now_playing.json';
import popular from './fallback/popular.json';
import topRated from './fallback/top_rated.json';
import upcoming from './fallback/upcoming.json';
import movieDetails from './fallback/movie_details.json';
import credits from './fallback/credits.json';
import similar from './fallback/similar.json';

export const getMovies = (category) => {
  const data = {
    now_playing: nowPlaying,
    popular: popular,
    top_rated: topRated,
    upcoming: upcoming,
  };
  return Promise.resolve(data[category].results);
};

export const getMovieDetails = (id) => {
  return Promise.resolve(movieDetails);
};

export const getMovieCredits = (id) => {
  return Promise.resolve(credits);
};

export const getSimilarMovies = (id) => {
  return Promise.resolve(similar.results);
};