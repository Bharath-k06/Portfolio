// src/app/pages/Contact.tsx
import  { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Tooltip,
  useTheme,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import { LinkedIn, Email, ContactMail } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [, setIsSubmitted] = useState(false); // Kept for functionality

  const handleContactClick = () => {
    setIsFormVisible(!isFormVisible);
    // Scroll to form only if it's becoming visible
    if (!isFormVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setIsSubmitted(true);
    // Note: You might not want to reset these fields immediately after setting setIsSubmitted
    // setName('');
    // setEmail('');
    // setMessage('');
    // In a real application, you would handle form submission here (e.g., send email)
    alert("Sorry for the inconvinience WIP of this fetaure.")
  };

  const iconContainerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.3, rotate: 5 },
    tap: { scale: 1.1 },
  };

  const formVariants = {
    initial: { opacity: 0, x: 50, height: 0 },
    animate: { opacity: 1, x: 0, height: 'auto' },
    exit: { opacity: 0, x: 50, height: 0 },
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  };

  return (
    <>
      {/* Main Contact Section Box */}
      <Box id="contact" sx={{ py: { xs: 4, md: 8 }, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}> {/* Adjusted vertical padding */}
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: { xs: 2, md: 0 } }}> {/* Added horizontal padding to container on mobile */}
          {/* Section Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ marginBottom: '48px', textAlign: 'center' }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)', fontSize: { xs: '1.5rem', md: '1.875rem' } }}> {/* Responsive font size */}
              Get In Touch !
            </Typography>
            <Typography variant="body1" color="inherit" sx={{ opacity: 0.8, color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)', fontSize: { xs: '1rem', md: '1.1rem' } }}> {/* Responsive font size */}
              Reach out through these platforms.
            </Typography>
          </motion.div>

          {/* Contact Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: '24px', md: '48px' }, marginBottom: '48px', flexWrap: 'wrap' }}> {/* Reduced gap and allowed wrapping on mobile */}
            {/* LinkedIn Icon */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Tooltip title="LinkedIn">
                <motion.div
                  variants={iconContainerVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ duration: 0.4, delay: 0 * 0.1 }}
                >
                  <IconButton
                    color="primary"
                    href="https://www.linkedin.com/in/bharath-kumar-b6a3951a6/"
                    target="_blank"
                    size="large"
                    sx={{
                        color: "#1976d2",
                        transition: "color 0.3s",
                        "&:hover": { color: "#0d47a1" },
                        fontSize: { xs: '2.5rem', md: '3rem' } // Responsive icon size
                      }}
                  >
                    <LinkedIn fontSize="large" sx={{ fontSize: 'inherit' }} /> {/* Use inherit to scale with IconButton size */}
                  </IconButton>
                </motion.div>
              </Tooltip>
              <Typography variant="body2" color="inherit" sx={{ mt: 1, color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>LinkedIn</Typography> {/* Responsive font size */}
            </Box>

            {/* Email Icon */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Tooltip title="Email">
                <motion.div
                  variants={iconContainerVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ duration: 0.4, delay: 1 * 0.1 }}
                >
                  <IconButton
                    color="primary"
                    href="mailto:your.email@example.com" // Make sure to change this to your actual email
                    target="_blank"
                    size="large"
                    sx={{
                        color: "#1976d2",
                        transition: "color 0.3s",
                        "&:hover": { color: "#0d47a1" },
                         fontSize: { xs: '2.5rem', md: '3rem' } // Responsive icon size
                      }}
                  >
                    <Email fontSize="large" sx={{ fontSize: 'inherit' }} /> {/* Use inherit to scale with IconButton size */}
                  </IconButton>
                </motion.div>
              </Tooltip>
              <Typography variant="body2" color="inherit" sx={{ mt: 1, color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>Email</Typography> {/* Responsive font size */}
            </Box>

            {/* Contact Me Icon (Toggles Form) */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Tooltip title="Contact Me">
                <motion.div
                  variants={iconContainerVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ duration: 0.4, delay: 2 * 0.1 }}
                  onClick={handleContactClick}
                  style={{ cursor: 'pointer' }}
                >
                  <IconButton
                    color="primary"
                    size="large"
                     sx={{
                        color: "#1976d2",
                        transition: "color 0.3s",
                        "&:hover": { color: "#0d47a1" },
                         fontSize: { xs: '2.5rem', md: '3rem' } // Responsive icon size
                      }}
                  >
                    <ContactMail fontSize="large" sx={{ fontSize: 'inherit' }} /> {/* Use inherit to scale with IconButton size */}
                  </IconButton>
                </motion.div>
              </Tooltip>
              <Typography variant="body2" color="inherit" sx={{ mt: 1, color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>Contact</Typography> {/* Responsive font size */}
            </Box>
          </Box>

          {/* Toggable Contact Form */}
          <AnimatePresence>
            {isFormVisible && (
              <motion.div
                ref={formRef}
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                // Removed className="contact-form" if not used for global styles
                style={{ // Convert inline styles to sx prop for consistency and responsiveness
                   marginTop: '32px',
                   width: '100%',
                   maxWidth: '400px', // Keep max width
                   padding: "16px", // Reduced padding on mobile
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}

              >
                <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: '500', textAlign: 'center', fontSize: { xs: '1.2rem', md: '1.25rem' } }}> {/* Responsive font size */}
                  Send a Message
                </Typography>
                <form onSubmit={handleSubmit} /* Removed className="space-y-3" */ > {/* Removed className if not used */}
                  <Stack spacing={2}> {/* Use Stack for spacing between form fields */}
                    <TextField
                      fullWidth
                      id="name"
                      label="Your Name"
                      variant="standard"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{
                        '& .MuiInput-input': { borderRadius: '4px', padding: '8px 12px', backgroundColor: 'rgba(0, 0, 0, 0.03)', color: '#000' },
                        '& .MuiInput-underline:after': { borderBottomColor: theme.palette.primary.main, borderBottomWidth: 2 },
                        '& .MuiInput-label': { color: 'rgba(0, 0, 0, 0.6)' },
                        '& .MuiInput-label.Mui-focused': { color: theme.palette.primary.main },
                      }}
                      required
                    />
                    <TextField
                      fullWidth
                      id="email"
                      label="Your Email"
                      type="email"
                      variant="standard"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{
                         '& .MuiInput-input': { borderRadius: '4px', padding: '8px 12px', backgroundColor: 'rgba(0, 0, 0, 0.03)', color: '#000' },
                        '& .MuiInput-underline:after': { borderBottomColor: theme.palette.primary.main, borderBottomWidth: 2 },
                        '& .MuiInput-label': { color: 'rgba(0, 0, 0, 0.6)' },
                        '& .MuiInput-label.Mui-focused': { color: theme.palette.primary.main },
                      }}
                      required
                    />
                    <TextField
                      fullWidth
                      id="message"
                      label="Your Message"
                      multiline
                      rows={4}
                      variant="standard"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      sx={{
                         '& .MuiInput-input': { borderRadius: '4px', padding: '8px 12px', backgroundColor: 'rgba(0, 0, 0, 0.03)', color: '#000' },
                        '& .MuiInput-underline:after': { borderBottomColor: theme.palette.primary.main, borderBottomWidth: 2 },
                        '& .MuiInput-label': { color: 'rgba(0, 0, 0, 0.6)' },
                        '& .MuiInput-label.Mui-focused': { color: theme.palette.primary.main },
                      }}
                      required
                    />
                     <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        transition: 'transform 0.2s, background-color 0.2s',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          backgroundColor: theme.palette.primary.dark,
                        },
                         color: '#000',
                        mt: 2 // Added margin top to separate from last field
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </>
  );
};

export default Contact;