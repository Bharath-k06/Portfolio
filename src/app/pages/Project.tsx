// src/app/pages/Project.tsx
import  { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
} from "@mui/material";
import { motion } from "framer-motion";


const projects = [
  { title: "Project One", image: "https://source.unsplash.com/featured/?code,abstract" },
  { title: "Project Two", image: "https://source.unsplash.com/featured/?design,ui" },
  { title: "Project Three", image: "https://source.unsplash.com/featured/?app,technology" },
];

const shimmerKeyframes = `
@keyframes shimmer {
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
}
`;

const Projects = () => { // Renamed to Projects to match file name
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{shimmerKeyframes}</style> {/* Keep shimmer keyframes */}
      <Box id="projects" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 6 }, textAlign: "center" }}> {/* Adjusted vertical padding */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.125rem' } }}> {/* Responsive font size */}
            Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto" mb={6} sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}> {/* Responsive font size */}
            Currently building some exciting stuff!
          </Typography>
        </motion.div>

        <Stack spacing={{ xs: 2, md: 4 }} direction={{ xs: "column", md: "row" }} justifyContent="center"> {/* Responsive spacing */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{ perspective: 1000 }}
              whileHover={{
                rotateX: -10,
                rotateY: 10,
                scale: 1.05,
                transition: { duration: 0.3 },
                zIndex: 1,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <Card
                sx={{
                  maxWidth: { xs: '90%', sm: 345, md: 300 }, // Responsive max width for card
                  height: "100%",
                  borderRadius: 8,
                  boxShadow: 8,
                  position: "relative",
                  overflow: "hidden",
                  transformStyle: "preserve-3d",
                  margin: '0 auto' // Center card on mobile if it doesn't take full width
                }}
              >
                {loading ? (
                  <>
                    <Skeleton variant="rectangular" height={180} sx={{ borderRadius: "8px 8px 0 0" }} /> {/* Added border radius */}
                    <CardContent>
                      <Skeleton height={30} width="80%" />
                      <Skeleton height={20} width="60%" />
                    </CardContent>
                  </>
                ) : (
                  <>
                    <CardMedia
                      component="img"
                      height="180" // Fixed height for media is acceptable here
                      image={project.image}
                      alt={project.title}
                      sx={{
                        borderRadius: "8px 8px 0 0",
                        transform: "translateZ(50px)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{ transform: "translateZ(30px)", fontSize: { xs: '1.1rem', md: '1.25rem' } }}> {/* Responsive font size */}
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ transform: "translateZ(30px)", fontSize: { xs: '0.8rem', md: '0.875rem' } }}> {/* Responsive font size */}
                        Work in Progress
                      </Typography>
                    </CardContent>
                    {/* Cool animated overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(5px)",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                        pointerEvents: "none",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#fff",
                          background: "linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundSize: "300% 100%",
                          animation: "shimmer 2s infinite linear",
                          textAlign: "center",
                          transform: "translateZ(50px)",
                          fontSize: { xs: '1.2rem', md: '1.5rem' } // Responsive font size for WIP text
                        }}
                      >
                        🚧 WIP 🚧
                      </Typography>
                    </motion.div>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Projects; // Export as Projects