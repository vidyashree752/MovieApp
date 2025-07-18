import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, CardActionArea, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { MovieListContext } from '../context/MovieListContext';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { state, dispatch } = React.useContext(MovieListContext);
  const [isHovered, setIsHovered] = useState(false);
  const isInMyList = state.myList.some(m => m.id === movie.id);

  const handleMyListToggle = (e) => {
    e.stopPropagation();
    if (isInMyList) {
      dispatch({ type: 'REMOVE_FROM_LIST', payload: movie.id });
    } else {
      dispatch({ type: 'ADD_TO_LIST', payload: movie });
    }
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 200, 
        m: 1, 
        position: 'relative',
        transform: isHovered ? 'translateY(-5px)' : 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isHovered ? 6 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardActionArea onClick={() => navigate(`/movie/${movie.id}`)}>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          sx={{ 
            filter: isHovered ? 'brightness(0.7)' : 'brightness(1)',
            transition: 'filter 0.3s ease'
          }}
        />
        
        {isHovered && (
          <Box sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 2
          }}>
            <Chip
              icon={isInMyList ? <RemoveIcon /> : <AddIcon />}
              label={isInMyList ? "Remove" : "My List"}
              onClick={handleMyListToggle}
              color={isInMyList ? "error" : "primary"}
              sx={{ 
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: 2
              }}
            />
          </Box>
        )}
        
        <CardContent>
          <Typography variant="subtitle1" noWrap>{movie.title}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Chip 
              label={`⭐ ${movie.vote_average}`} 
              size="small" 
              color="secondary"
            />
            <Typography variant="caption" color="text.secondary">
              {movie.release_date?.split('-')[0]}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}