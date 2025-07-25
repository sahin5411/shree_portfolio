"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const Star = ({ x, y, size, duration, delay }: { x: number; y: number; size: number; duration: number, delay: number }) => (
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d] via-[#111132] to-[#0c0c1d]" />
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
