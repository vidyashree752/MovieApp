import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MovieCard from './MovieCard';

export default function Recommendations({ movies }) {
  if (!movies || movies.length === 0) return null;
  
  return (
    <Box sx={{ mt: 6, mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>You Might Also Like</Typography>
      <Grid container spacing={2}>
        {movies.slice(0, 4).map(movie => (
          <Grid item xs={6} sm={4} md={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}