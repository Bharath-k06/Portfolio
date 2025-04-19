import React from 'react';
import { Box, Typography, Stack, Link as MuiLink } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
// Import Link from react-router-dom
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f4f4f4',
        color: '#555',
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        mt: 8,
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 3, flexWrap: 'wrap' }}
      >
        {/* Modified MuiLink to work with React Router */}
        <MuiLink
          component={Link} // Use the Link component from react-router-dom
          to="/contact"   // Use the 'to' prop with the internal path
          color="inherit"
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
            <PhoneIcon sx={{ mr: 0.5 }} /> Contact
        </MuiLink>


      </Stack>

      <Typography variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Bharath Kumar TV. All rights reserved.
      </Typography>
       <Typography variant="body2">
        Built with React, Material UI, and Framer Motion.
      </Typography>

    </Box>
  );
};

export default Footer;