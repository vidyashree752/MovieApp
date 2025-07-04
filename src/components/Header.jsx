import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <MovieIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        {/* Optional: You can add additional buttons, user profile, etc. here */}
      </Toolbar>
    </AppBar>
  );
}
