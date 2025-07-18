import React from 'react';
import { Box, Chip } from '@mui/material';

export default function GenreFilter({ genres, activeGenre, setActiveGenre }) {
  return (
    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      <Chip
        label="All"
        clickable
        color={!activeGenre ? "primary" : "default"}
        onClick={() => setActiveGenre(null)}
        sx={{ mb: 1 }}
      />
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          clickable
          color={activeGenre === genre.id ? "primary" : "default"}
          onClick={() => setActiveGenre(activeGenre === genre.id ? null : genre.id)}
          sx={{ mb: 1 }}
        />
      ))}
    </Box>
  );
}