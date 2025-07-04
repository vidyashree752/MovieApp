import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  
  return (
    <Card 
      sx={{ maxWidth: 200, m: 1, cursor: 'pointer' }}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="subtitle1" noWrap>{movie.title}</Typography>
        <Chip 
          label={`⭐ ${movie.vote_average}`} 
          size="small" 
          sx={{ mt: 1 }} 
        />
      </CardContent>
    </Card>
  );
}