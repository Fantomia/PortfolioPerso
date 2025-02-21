import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Changement ici

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Utilisation de loadSlim
  }, []);

  return (
  
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
          image: `url('${import.meta.env.BASE_URL}assets/krunsplash.jpg')`,
          position: "center",
          size: "cover",
          repeat: "no-repeat",
          zIndex: -1,
          attachment: "fixed", // Ajouté ici
      },
        particles: {
          number: {
            value: 12,
            density: {
              enable: true,
              value_area: 400,
            },
          },
          color: {
            value: ["rgba(192, 164, 235, 0.8)","rgb(255,255,255)"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: true,
          },
          size: {
            value: 3,
            random: true,
            min:2,
            max:5,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "rgb(255,255,255)",
            opacity: 1, 
            width: 1, 
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}
    />
    
  );
};

export default ParticlesBackground;
