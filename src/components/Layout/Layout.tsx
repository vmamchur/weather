import { Box, Container } from '@mui/system';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <Box
    minHeight="100vh"
    sx={{
      background: 'linear-gradient(0deg, #d8eeee, #d8eeee 25%, #64b3c9 65%, #005986 90%, #005986)'
    }}
  >
    <Container>{children}</Container>
  </Box>
);
