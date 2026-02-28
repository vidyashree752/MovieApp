import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box, Typography, Button, Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { MovieListContext } from '../context/MovieListContext';
import LoadingSpinner from '../components/LoadingSpinner';
import {
  getMovieDetails,
  getMovieCredits,
  getSimilarMovies
} from '../api/tmdb';

// ✅ New components
import MovieTrailer from '../components/MovieTrailer';
import UserRating from '../components/UserRating';
import Recommendations from '../components/Recommendations';

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MovieListContext);
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [details, creditsData, similarData] = await Promise.all([
        getMovieDetails(id),
        getMovieCredits(id),
        getSimilarMovies(id)
      ]);

      setMovie(details);
      setCredits(creditsData);
      setSimilar(similarData);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const isInMyList = state.myList.some(m => m.id === movie?.id);

  const handleMyListToggle = () => {
    if (isInMyList) {
      dispatch({ type: 'REMOVE_FROM_LIST', payload: movie.id });
    } else {
      dispatch({ type: 'ADD_TO_LIST', payload: movie });
    }
  };

  if (loading || !movie) return <LoadingSpinner />;

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Back
      </Button>

      {/* ✅ Movie Trailer */}
      <MovieTrailer movieId={movie.id} />

      {/* Movie Header */}
      <Box sx={{ display: 'flex', mb: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          style={{ borderRadius: 8 }}
        />
        <Box sx={{ ml: { md: 4 }, mt: { xs: 2, md: 0 } }}>
          <Typography variant="h3">{movie.title}</Typography>
          <Chip label={`⭐ ${movie.vote_average}`} sx={{ mt: 1, mb: 2 }} />

          <Button
            variant={isInMyList ? "outlined" : "contained"}
            startIcon={isInMyList ? <RemoveIcon /> : <AddIcon />}
            onClick={handleMyListToggle}
            sx={{ mb: 3 }}
          >
            {isInMyList ? 'Remove from My List' : 'Add to My List'}
          </Button>

          <Typography variant="h5" sx={{ mt: 2 }}>Overview</Typography>
          <Typography sx={{ mt: 1, maxWidth: 800 }}>{movie.overview}</Typography>

          {/* ✅ Cast Section */}
          {credits?.cast && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h5">Cast</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
                {credits.cast.slice(0, 10).map(person => (
                  <Chip key={person.id} label={person.name} sx={{ m: 0.5 }} />
                ))}
              </Box>
            </Box>
          )}

          {/* ✅ Director */}
          {credits?.crew && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5">Director</Typography>
              <Typography sx={{ mt: 1 }}>
                {credits.crew.find(p => p.job === 'Director')?.name || 'N/A'}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      {/* ✅ User Rating Component */}
      <UserRating movieId={movie.id} />

      {/* Similar Movies */}
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>Similar Movies</Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto' }}>
        {similar.map(movie => (
          <Box key={movie.id} sx={{ minWidth: 200, m: 1 }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ borderRadius: 8, cursor: 'pointer' }}
              onClick={() => navigate(`/movie/${movie.id}`)}
            />
            <Typography variant="subtitle1" noWrap>{movie.title}</Typography>
            <Chip label={`⭐ ${movie.vote_average}`} size="small" />
          </Box>
        ))}
      </Box>

      {/* ✅ Recommendations Section */}
      <Recommendations movies={similar} />
    </Box>
  );
}
