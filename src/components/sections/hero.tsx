"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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

const floatingAnimation = {
    y: ["-5px", "5px"],
    transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    }
}

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full bg-background/80 backdrop-blur-sm"></div>
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
            <motion.span
              animate={floatingAnimation}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Surashree pal
            </motion.span>
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
              <a href="/resume.pdf" download>
                Download Resume
                <Download className="ml-2 h-5 w-5" />
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
