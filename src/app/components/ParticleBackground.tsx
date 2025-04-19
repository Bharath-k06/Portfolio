// src/app/components/ParticleBackground.tsx
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery
import { useTheme } from '@mui/material/styles'; // Import useTheme


const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is below small breakpoint

  // Define different particle options for mobile and desktop
  const particleOptions = {
    preset: "links",
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#ffffff" },
    particles: {
      color: { value: "#90caf9" },
      links: {
        color: "#90caf9",
        distance: isMobile ? 100 : 150, // Reduced link distance on mobile
        enable: true,
        opacity: isMobile ? 0.5 : 0.7, // Reduced opacity on mobile
        width: 1,
      },
      move: { enable: true, speed: isMobile ? 0.7 : 1 }, // Reduced speed on mobile
      number: {
         density: { enable: true, area: 800 },
         value: isMobile ? 50 : 100, // Reduced number of particles on mobile
      }
    },
     interactivity: { // Added interactivity options for hover effects (optional cool animation)
        events: {
          onHover: { enable: true, mode: 'grab' }, // Particles react on hover
          onClick: { enable: true, mode: 'push' }, // Particles react on click
        },
        modes: {
          grab: { distance: isMobile ? 100 : 150, links: { opacity: 1 } }, // Grab effect distance
          push: { quantity: 4 }, // Push quantity on click
        },
     }
  };


  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions} // Use the responsive options object
    />
  );
};

export default ParticleBackground;