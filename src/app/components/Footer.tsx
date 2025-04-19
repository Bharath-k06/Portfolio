// src/app/components/Footer.tsx
import React from 'react';
import { Box, Typography, Stack, Link as MuiLink } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f4f4f4',
        color: '#555',
        padding: { xs: '20px 10px', md: '40px 20px' }, // Adjusted padding for mobile
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        mt: 8,
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 1.5, md: 3 }} // Adjusted spacing for mobile
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 3, flexWrap: 'wrap' }}
      >
        {/* Modified MuiLink to work with React Router */}
        <MuiLink
           component={Link}
           to="/contact"
           color="inherit"
           underline="hover"
           sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '0.9rem', md: '1rem' } }} // Responsive font size
         >
             <PhoneIcon sx={{ mr: 0.5, fontSize: { xs: '1rem', md: '1.25rem' } }} /> Contact {/* Responsive icon size */}
         </MuiLink>
         {/* Add other footer links here following the same pattern */}
         {/* Example: */}
         {/* <MuiLink component={Link} to="/about" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '0.9rem', md: '1rem' } }}>
              About
           </MuiLink> */}


      </Stack>

      <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}> {/* Responsive font size */}
        © {new Date().getFullYear()} Bharath Kumar TV. All rights reserved.
      </Typography>
       <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}> {/* Responsive font size */}
        Built with React, Material UI, and Framer Motion.
      </Typography>

    </Box>
  );
};

export default Footer;