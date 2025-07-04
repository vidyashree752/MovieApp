import React, { useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { MovieListContext } from '../context/MovieListContext';

export default function MyList() {
  const { state } = useContext(MovieListContext);
  
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>My List</Typography>
      {state.myList.length === 0 ? (
        <Typography>Your list is empty</Typography>
      ) : (
        <Grid container spacing={2}>
          {state.myList.map(movie => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}