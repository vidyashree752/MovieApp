import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function LoadingSpinner() {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '50vh'
    }}>
      <CircularProgress size={80} thickness={4} />
    </Box>
  );
}