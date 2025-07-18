import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography } from '@mui/material';

export default function MovieTrailer({ movieId }) {
  // In a real app, you'd fetch trailers from TMDB API
  // For mock data, we'll use hardcoded trailers
  const trailers = {
    950387: "https://www.youtube.com/watch?v=5Mmd7WFYb4c",
    324544: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Trailer</Typography>
      <Box sx={{ 
        position: 'relative', 
        paddingTop: '56.25%', // 16:9 aspect ratio
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3
      }}>
        <ReactPlayer
          url={trailers[movieId] || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          controls
        />
      </Box>
    </Box>
  );
}