import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    }}
  >
    <CircularProgress />
  </Box>
);
