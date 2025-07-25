"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Star = ({ x, y, size, duration }: { x: number; y: number; size: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0.5, 1, 0] }}
    transition={{
      duration: duration,
      repeat: Infinity,
      repeatType: "mirror",
    }}
  />
);

const AnimatedBackground = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 5 + 5,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-950 to-background" />
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
};

export default AnimatedBackground;
