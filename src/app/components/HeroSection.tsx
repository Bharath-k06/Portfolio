import React from "react";
import { Button, Typography, Stack, Avatar } from "@mui/material";
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

const Hero: React.FC = () => {
  return (
    <><motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
              minHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              padding: "3rem",
              gap: "3rem",
              background: "transparent",
          }}
      >
          {/* Left Side */}
          <motion.div style={{ flex: 1 }} variants={itemVariants}>
              <Typography variant="h2" sx={{ fontWeight: "bold", color: "#0D47A1" }}>
                  Hello, I'm Bharath 👋
              </Typography>

              <motion.div variants={itemVariants}>
                  <Typography
                      variant="h5"
                      sx={{ mt: 2, color: "#555", fontStyle: "italic" }}
                  >
                      As a passionate software engineer, I specialise in creating high-quality, efficient, and secure software solutions that meet the needs of businesses and organisations.
                  </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                  <Stack
                      direction="row"
                      spacing={2}
                      mt={4}
                      sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
                  >
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Button
                              variant="contained"
                              color="primary"

                              startIcon={<DownloadIcon />}
                              sx={{ px: 4, py: 1.5 }}
                              onClick={() => window.open( "https://drive.google.com/file/d/1uNRRs-FNxB20KgUBgZ9EDkF7fwvn_rJF/view?usp=sharing")}
                          >
                              Resume
                          </Button>
                      </motion.div>
                  </Stack>
              </motion.div>
          </motion.div>

          
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
                  src="/mainImage.jpg"
                  alt="B"
                  sx={{
                      width: 220,
                      height: 220,
                      border: "5px solid #1976D2",
                      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
                  }} />
          </motion.div>
      </motion.div><WaveDivider /></>
  );    
};

export default Hero;
