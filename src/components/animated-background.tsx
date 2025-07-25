"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const Star = ({ x, y, size, duration, delay }: { x: number; y: number; size: number; duration: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
    transition={{
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay,
    }}
  />
);

const AnimatedBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d] via-[#111132] to-[#0c0c1d]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
        }}
        style={{
            backgroundSize: '400% 400%',
        }}
      />
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
       <motion.div
        className="absolute bottom-[-200px] left-[-200px] h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 200, 0, -200, 0],
          y: [0, -200, 0, 200, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-[-200px] right-[-200px] h-[400px] w-[400px] rounded-full bg-secondary/20 blur-3xl"
        animate={{
          x: [0, -200, 0, 200, 0],
          y: [0, 200, 0, -200, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
