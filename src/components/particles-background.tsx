"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { type Container } from "react-tsparticles";
import { type Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const initParticles = async () =>
      
      {
      // Initialize tsparticles and load the slim bundle
      const { loadSlim } = await import("tsparticles-slim");
      const { tsParticles } = await import("tsparticles-engine");
      await loadSlim(tsParticles);
      setInit(true);
    };

    initParticles();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ? "#ffffff" : "#000000",
        },
        links: {
          color: theme === 'dark' ? "#ffffff" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [theme],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        init={async (engine: Engine) => { const { loadSlim } = await import("tsparticles-slim"); await loadSlim(engine); }}
        options={options}
        className="fixed inset-0 -z-10"
      />
    );
  }

  return <></>;
}
