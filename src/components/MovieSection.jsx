import React from 'react';
import { Box, Typography } from '@mui/material';
import MovieCard from './MovieCard';

export default function MovieSection({ title, movies }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, ml: 1 }}>{title}</Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto' }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
}