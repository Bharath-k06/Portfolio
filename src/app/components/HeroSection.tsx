// src/app/components/HeroSection.tsx
import React from "react";
import { Button, Typography, Stack, Avatar, Box } from "@mui/material"; // Added Box import
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";

import WaveDivider from "./WaveDivider";


const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,

      duration: 0.8,
      ease: "easeOut"
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => { // Renamed to Hero to match file name
  return (
    <>
      {/* Main container with responsive flex direction, padding, and gap */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ // Using style prop for motion.div, apply responsive styles via sx on a wrapper Box
            minHeight: "90vh",
             background: "transparent",
        }}
      >
        <Box // Wrapper Box for responsive layout
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
                alignItems: "center", // Center items vertically in row, horizontally in column
                justifyContent: "space-around", // Space out content and image
                padding: { xs: "2rem 1rem", md: "3rem" }, // Reduced padding on mobile
                gap: { xs: "2rem", md: "3rem" }, // Reduced gap on mobile
                minHeight: "calc(90vh - 64px)", // Adjust height considering navbar (assuming 64px height)
            }}
        >
            {/* Left Side (Text and Button) */}
            <motion.div style={{ flex: 1, textAlign: 'center' }} variants={itemVariants}> {/* Centered text on mobile */}
              <Typography variant="h2" sx={{ fontWeight: "bold", color: "#0D47A1", fontSize: { xs: '2rem', md: '3.75rem' } }}> {/* Responsive font size */}
                  Hello, I'm Bharath 👋
              </Typography>

              <motion.div variants={itemVariants}>
                  <Typography
                      variant="h5"
                      sx={{ mt: 2, color: "#555", fontStyle: "italic", fontSize: { xs: '1rem', md: '1.5rem' } }} // Responsive font size
                  >
                      As a passionate software engineer, I specialise in creating high-quality, efficient, and secure software solutions that meet the needs of businesses and organisations.
                  </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                  <Stack
                      direction="row"
                      spacing={2}
                      mt={4}
                      justifyContent="center" // Center button on both mobile and desktop
                  >
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Button
                              variant="contained"
                              color="primary"
                              startIcon={<DownloadIcon />}
                              sx={{ px: { xs: 2, md: 4 }, py: { xs: 1, md: 1.5 } }} // Responsive padding
                              onClick={() => window.open( "https://drive.google.com/file/d/1uNRRs-FNxB20KgUBgZ9EDkF7fwvn_rJF/view?usp=sharing")}
                          >
                              Resume
                          </Button>
                      </motion.div>
                  </Stack>
              </motion.div>
            </motion.div>

            {/* Right Side (Avatar) */}
            <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <Avatar
                    src="/Portfolio/mainImage.jpg"
                    alt="B"
                    sx={{
                        width: { xs: 150, md: 220 }, // Responsive width
                        height: { xs: 150, md: 220 }, // Responsive height
                        border: "5px solid #1976D2",
                        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
                    }} />
            </motion.div>
        </Box>
      </motion.div>
      <WaveDivider />
    </>
  );
};

export default Hero; // Export as Hero