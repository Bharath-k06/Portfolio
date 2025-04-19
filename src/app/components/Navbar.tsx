// src/app/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'; // Added Drawer, List, ListItem, ListItemText, IconButton
import MenuIcon from '@mui/icons-material/Menu'; // Added MenuIcon

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/project', label: 'Project' },
    { path: '/contact', label: 'Contact' },
  ];

  const wavyAnimation = {
    '@keyframes wavy': {
      '0%, 100%': { transform: 'translateY(0)' },
      '25%': { transform: 'translateY(-2px)' },
      '75%': { transform: 'translateY(2px)' },
    },
  };

  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path;
    const activeColor = theme.palette.text.primary;
    const hoverColor = theme.palette.text.secondary;
    const defaultColor = theme.palette.text.primary;

    return {
      mx: { xs: 0.5, sm: 1.5 }, // Reduced horizontal margin on extra-small screens
      my: 0.5,
      color: isActive ? activeColor : defaultColor,
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      position: 'relative',
      ...wavyAnimation,
      transition: 'color 0.3s ease-in-out',

      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
        height: '2px',
        bottom: '-4px',
        left: '0',
        backgroundColor: activeColor,
        transformOrigin: 'bottom center',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
      },

      '&:hover': {
        color: hoverColor,
        animation: 'wavy 0.6s ease-in-out infinite',
        '&::after': {
          ...(
            !isActive && {
              transform: 'scaleX(1)',
              backgroundColor: hoverColor,
              transformOrigin: 'bottom center',
            }
          ),
          ...(
            isActive && {
               backgroundColor: activeColor,
            }
           )
        }
      },

      ...(isActive && {
          '&:hover': {
            color: activeColor,
            animation: 'none',
           }
      })
    };
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // State for mobile drawer

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set to true if scrolled down
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: isScrolled ? "white" : 'transparent',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        transition: 'background-color 0.3s ease-in-out', // Added transition for scroll effect
      }}
    >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: { xs: 56, sm: 48 },
      }}>
        {/* Mobile menu icon - visible only on extra-small screens */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: isScrolled ? 'inherit' : theme.palette.text.primary }} // Adjusted color based on scroll
            >
              <MenuIcon />
            </IconButton>
        </Box>


        {/* Desktop/Tablet links - hidden on extra-small screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}> {/* Adjusted display and centering */}
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={getLinkStyle(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
         {/* Placeholder to balance the flex layout when menu icon is visible */}
         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>

      </Toolbar>
       {/* Mobile Navigation Drawer */}
       <Drawer
           anchor="left"
           open={mobileOpen}
           onClose={handleDrawerToggle}
           ModalProps={{
             keepMounted: true, // Better open performance on mobile.
           }}
           sx={{
             display: { xs: 'block', md: 'none' },
             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
           }}
         >
           <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
              {/* Add a title or logo here if desired */}
            <List>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path; // Determine if the current item is active
                return (
                  <ListItem
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    disablePadding
                    // Optional: Add a background color to the active item for more emphasis
                    // sx={{ backgroundColor: isActive ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{
                        textAlign: 'center',
                        py: 1,
                        color: isActive ? theme.palette.primary.main : theme.palette.text.primary, // Change text color if active
                        fontWeight: isActive ? 'bold' : 'normal', // Make text bold if active
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
    </AppBar>
  );
};

export default Navbar;