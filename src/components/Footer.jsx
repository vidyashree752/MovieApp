import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 8, 
        py: 3, 
        px: 2, 
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Movie Explorer
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
        Created with ❤️ using React and Material UI
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>About</Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Contact</Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>Privacy Policy</Link>
      </Typography>
    </Box>
  );
}