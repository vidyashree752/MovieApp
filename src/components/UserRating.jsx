import React, { useState } from 'react';
import { Box, Typography, Rating, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function UserRating({ movieId }) {
  const [userRating, setUserRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

 

  return (
    <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>Your Rating</Typography>
      
      {!hasRated ? (
        <>
          <Rating
            value={userRating}
            onChange={(e, newValue) => setUserRating(newValue)}
            precision={0.5}
            size="large"
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Button 
            variant="contained" 
            sx={{ mt: 1, ml: 2 }}
            onClick={() => setHasRated(true)}
          >
            Submit Rating
          </Button>
        </>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mr: 1 }}>
            You rated: 
          </Typography>
          <Rating value={userRating} readOnly />
          <Button 
            variant="outlined" 
            sx={{ ml: 2 }}
            onClick={() => setHasRated(false)}
          >
            Change
          </Button>
        </Box>
      )}
    </Box>
  );
}