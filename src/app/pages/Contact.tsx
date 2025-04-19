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
} from '@mui/material';
import { LinkedIn, Email, ContactMail } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [, setIsSubmitted] = useState(false);

  const handleContactClick = () => {
    setIsFormVisible(!isFormVisible);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setIsSubmitted(true);
    setName(name);
    setEmail(email);
    setMessage(message);
    // In a real application, you would handle form submission here
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
      
      <Box id="contact" sx={{ py: 8, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ marginBottom: '48px', textAlign: 'center' }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}> {/* Changed color to black and adjusted shadow */}
              Get In Touch !
            </Typography>
            <Typography variant="body1" color="inherit" sx={{ opacity: 0.8, color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}> {/* Changed color to black and adjusted shadow */}
              Reach out through these platforms.
            </Typography>
          </motion.div>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '48px', marginBottom: '48px' }}>
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
                      }}
                  >
                    <LinkedIn fontSize="large" sx={{ fontSize: '3rem' }} />
                  </IconButton>
                </motion.div>
              </Tooltip>
              <Typography variant="body2" color="inherit" sx={{ mt: 1, color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>LinkedIn</Typography> {/* Changed color to black and adjusted shadow */}
            </Box>

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
                    href="mailto:your.email@example.com"
                    size="large"
                    sx={{
                        color: "#1976d2",
                        transition: "color 0.3s",
                        "&:hover": { color: "#0d47a1" },
                      }}
                  >
                    <Email fontSize="large" sx={{ fontSize: '3rem' }} />
                  </IconButton>
                </motion.div>
              </Tooltip>
              <Typography variant="body2" color="inherit" sx={{ mt: 1, color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Email</Typography> {/* Changed color to black and adjusted shadow */}
            </Box>

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
                      }}
                  >
                    <ContactMail fontSize="large" sx={{ fontSize: '3rem' }} />
                  </IconButton>
                </motion.div>
              </Tooltip>
              <Typography variant="body2" color="inherit" sx={{ mt: 1, color: '#000', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Contact</Typography> {/* Changed color to black and adjusted shadow */}
            </Box>
          </Box>

          <AnimatePresence>
            {isFormVisible && (
              <motion.div
                ref={formRef}
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="contact-form"
                style={{
                  padding: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  marginTop: '32px',
                  width: '100%',
                  maxWidth: '400px',
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: '500', textAlign: 'center' }}>
                  Send a Message
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <TextField
                    fullWidth
                    id="name"
                    label="Your Name"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      '& .MuiInput-input': { borderRadius: '4px', padding: '8px 12px', backgroundColor: 'rgba(0, 0, 0, 0.03)', color: '#000' }, // Changed input text color
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
                      '& .MuiInput-input': { borderRadius: '4px', padding: '8px 12px', backgroundColor: 'rgba(0, 0, 0, 0.03)', color: '#000' }, // Changed input text color
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
                      '& .MuiInput-input': { borderRadius: '4px', padding: '8px 12px', backgroundColor: 'rgba(0, 0, 0, 0.03)', color: '#000' }, // Changed input text color
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
                      color: '#000', // Changed button text color
                    }}
                  >
                    Submit
                  </Button>
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