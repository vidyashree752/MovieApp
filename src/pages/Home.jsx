import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import MovieSection from '../components/MovieSection';
import GenreFilter from '../components/GenreFilter';
import { getMovies } from '../api/tmdb';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';

const categories = [
  { id: 'now_playing', title: '🎬 Now Playing' },
  { id: 'popular', title: '🌟 Popular' },
  { id: 'top_rated', title: '🏆 Top Rated' },
  { id: 'upcoming', title: '⏳ Upcoming' }
];

export default function Home() {
  const [moviesData, setMoviesData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = {};
      for (const category of categories) {
        data[category.id] = await getMovies(category.id);
      }
      setMoviesData(data);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  // Extract all unique genres from movie data
  const allGenres = Array.from(
    new Set(
      Object.values(moviesData)
        .flat()
        .map(movie => movie.genre_ids)
        .flat()
    )
  ).map(id => ({
    id,
    name: {
      28: 'Action',
      12: 'Adventure',
      16: 'Animation',
      35: 'Comedy',
      80: 'Crime',
      99: 'Documentary',
      18: 'Drama',
      10751: 'Family',
      14: 'Fantasy',
      36: 'History',
      27: 'Horror',
      10402: 'Music',
      9648: 'Mystery',
      10749: 'Romance',
      878: 'Sci-Fi',
      10770: 'TV Movie',
      53: 'Thriller',
      10752: 'War',
      37: 'Western'
    }[id] || `Genre ${id}`
  }));

  // Utility to filter movies by selected genre
  const filterMovies = (movies) => {
    if (!activeGenre) return movies;
    return movies.filter(movie => movie.genre_ids.includes(activeGenre));
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Box sx={{ p: 2 }}>
      <GenreFilter
        genres={allGenres}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      {categories.map(category => (
        <MovieSection
          key={category.id}
          title={category.title}
          movies={filterMovies(moviesData[category.id] || [])}
        />
      ))}
       <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* ... existing content ... */}
  </motion.div>
    </Box>
  );
}
