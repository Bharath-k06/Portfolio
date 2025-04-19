import  { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, useTheme } from '@mui/material';


const Navbar = () => {
  const location = useLocation(); // Hook to get the current location object
  const theme = useTheme(); // Access the MUI theme for consistent styling

  // Define the navigation links
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/project', label: 'Project' },
    { path: '/contact', label: 'Contact' },
  ];

  // Define keyframes for the wavy animation
  const wavyAnimation = {
    '@keyframes wavy': {
      '0%, 100%': { transform: 'translateY(0)' },
      '25%': { transform: 'translateY(-2px)' },
      '75%': { transform: 'translateY(2px)' },
    },
  };
  

  // Function to determine link styling (including active state and hover effects)
  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path;
    // Text colors remain black/dark grey as requested previously
    const activeColor = theme.palette.text.primary; // Using primary text color (usually black)
    const hoverColor = theme.palette.text.secondary; // Using secondary text color (a lighter black/dark grey)
    const defaultColor = theme.palette.text.primary; // Default text color is also black

    return {
      mx: 1.5, // Horizontal margin for spacing between links
      my: 0.5, // Reduced vertical margin for compactness
      color: isActive ? activeColor : defaultColor, // Active link color vs default
      fontWeight: isActive ? 'bold' : 'normal', // Make active link bold
      textDecoration: 'none',
      position: 'relative', // Needed for the pseudo-element animation
      // Add the wavy keyframes to the style object
      ...wavyAnimation,
      transition: 'color 0.3s ease-in-out', // Smooth color transition

      '&::after': { // Pseudo-element for underline animation
        content: '""',
        position: 'absolute',
        width: '100%',
        // Control underline visibility based on active state
        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
        height: '2px',
        bottom: '-4px', // Position the underline slightly below the text
        left: '0',
        // Use active color for the underline when link is active
        backgroundColor: activeColor,
        transformOrigin: 'bottom center', // Animation origin
        // Smooth underline animation
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
      },

      // Specific hover styles
      '&:hover': {
        color: hoverColor, // Change text color on hover
        // Apply wavy animation on hover
        animation: 'wavy 0.6s ease-in-out infinite', // Animation details
        '&::after': {
          // If not active, show underline on hover
          ...(
            !isActive && {
              transform: 'scaleX(1)', // Show underline on hover
              backgroundColor: hoverColor, // Match underline color to hover text color
              transformOrigin: 'bottom center',
            }
          ),
           // If active, keep the active underline color on hover
           ...(
            isActive && {
               backgroundColor: activeColor,
            }
           )
        }
      },

      // Ensure active link retains its style and doesn't get the hover animation
      ...(isActive && {
         '&:hover': {
            color: activeColor, // Keep active color on hover
            animation: 'none', // Disable wavy animation on active link hover
         }
      })
    };
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
        setIsScrolled(true);
      
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <AppBar
      // Make it sticky to the top on scroll
      position="sticky"
      // Remove shadow for flatter look
      elevation={0}
      sx={{
        // Set background to transparent
        
        backgroundColor: isScrolled?"white":'transparent',

        // Remove backdrop filter as it's not needed for a fully transparent background
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      }}
    >
      {/* Toolbar with reduced minimum height for compactness */}
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'center', // Center the content (the Box) horizontally
        minHeight: { xs: 56, sm: 48 } // Responsive height (adjust as needed)
      }}>
        {/* Box acts as a container for the links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink} // Use React Router's Link component
              to={item.path}         // Set the destination path
              sx={getLinkStyle(item.path)} // Apply dynamic styles
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;