"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const textVariants = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full">
            <video
                src="/blackhole.webm"
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
        </div>
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={textVariants}
            className="font-sora text-2xl font-bold uppercase tracking-[4px] text-primary"
          >
            Surashree pal
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Angular Developer
          </motion.h1>
           <motion.p 
            variants={textVariants}
            className="max-w-md text-muted-foreground"
          >
            I create stunning and functional websites that leave a lasting impression.
          </motion.p>
          <motion.div
            variants={textVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#projects">
                My Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

    