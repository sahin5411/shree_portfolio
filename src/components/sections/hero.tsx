"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full">
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.h1
            variants={itemVariants}
            className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Fullstack Developer Portfolio
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-base text-foreground/80 md:text-xl"
          >
            I&apos;m a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#ai-prioritizer">
                Learn more
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
