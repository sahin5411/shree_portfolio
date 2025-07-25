"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

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

const imageVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="container relative z-10 mx-auto flex h-screen flex-col items-center justify-center px-4 md:flex-row md:justify-between">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <motion.h2
            variants={textVariants}
            className="font-sora text-3xl font-bold uppercase tracking-[4px] text-primary"
          >
            John Doe
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Web Developer & UI/UX Designer
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#projects">
                See the Latest Works
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
        
        <motion.div 
            className="absolute bottom-0 right-0 h-1/2 w-full md:relative md:h-full md:w-1/2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
        >
            <Image 
                src="https://placehold.co/800x800.png" 
                alt="Hero Image" 
                layout="fill"
                objectFit="contain"
                data-ai-hint="developer portrait"
            />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
