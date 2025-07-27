"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { type Container } from "react-tsparticles";
import { type Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

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
      fpsLimit: 90,
      interactivity: {
        events: {
          onHover: {
            enable: false,
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
          value: "#ffffff",

        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.5,
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 500,
        },
        opacity: {
          value:1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 1 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        init={async (engine: Engine) => { const { loadSlim } = await import("tsparticles-slim"); await loadSlim(engine); }}
        options={options}
        className="fixed inset-0 z-0"
      />
    );
  }

  return <></>;
}
