import React, { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import MovieSection from '../components/MovieSection';
import { getMovies } from '../api/tmdb';

const categories = [
  { id: 'now_playing', title: '🎬 Now Playing' },
  { id: 'popular', title: '🌟 Popular' },
  { id: 'top_rated', title: '🏆 Top Rated' },
  { id: 'upcoming', title: '⏳ Upcoming' }
];

export default function Home() {
  const [moviesData, setMoviesData] = useState({});
  const [loading, setLoading] = useState(true);

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

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;

  return (
    <Box sx={{ p: 2 }}>
      {categories.map(category => (
        <MovieSection 
          key={category.id}
          title={category.title}
          movies={moviesData[category.id] || []}
        />
      ))}
    </Box>
  );
}