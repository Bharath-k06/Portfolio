import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#ffffff" },
        particles: {
          color: { value: "#90caf9" },
          links: {
            color: "#90caf9",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1,
          },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default ParticleBackground;
