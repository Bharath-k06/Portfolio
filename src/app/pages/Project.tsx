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

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{shimmerKeyframes}</style>
      <Box id="projects" sx={{ py: 8, px: { xs: 2, md: 6 }, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto" mb={6}>
            Currently building some exciting stuff!
          </Typography>
        </motion.div>

        <Stack spacing={4} direction={{ xs: "column", md: "row" }} justifyContent="center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{ perspective: 1000 }} // Add perspective for 3D effect
              whileHover={{
                rotateX: -10,
                rotateY: 10,
                scale: 1.05,
                transition: { duration: 0.3 },
                zIndex: 1, // Bring to front on hover
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Enhanced shadow
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  height: "100%",
                  borderRadius: 8, // More rounded corners
                  boxShadow: 8, // More pronounced default shadow
                  position: "relative",
                  overflow: "hidden",
                  transformStyle: "preserve-3d", // Enable 3D transformations for children
                }}
              >
                {loading ? (
                  <>
                    <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 8 }} />
                    <CardContent>
                      <Skeleton height={30} width="80%" />
                      <Skeleton height={20} width="60%" />
                    </CardContent>
                  </>
                ) : (
                  <>
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        borderRadius: "8px 8px 0 0", // Rounded top corners
                        transform: "translateZ(50px)", // Slight forward push for the image
                        backfaceVisibility: "hidden", // Hide back face to improve performance
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{ transform: "translateZ(30px)" }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ transform: "translateZ(30px)" }}>
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
                        pointerEvents: "none", // Make sure it doesn't block hover
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
                          transform: "translateZ(50px)", // Push text forward
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

export default Projects;