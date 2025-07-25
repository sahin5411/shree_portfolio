"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

interface ExperienceProps {
  experience: ExperienceItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl">
          My <span className="text-primary">Experience</span>
        </h2>
        <hr className="mx-auto mt-4 w-24 border-2 border-primary" />
      </motion.div>

      <motion.div 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
        {experience.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-12 md:mb-16"
            variants={itemVariants}
          >
            <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 top-1 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-secondary md:left-1/2 md:top-4">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/20 ring-4 ring-secondary">
                        <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                </div>

                <div className={`w-full pl-12 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8 md:pr-16' : 'md:pr-8 md:pl-16 md:text-right'}`}>
                    <div className="rounded-lg bg-secondary/30 p-6 shadow-lg backdrop-blur-sm">
                        <h3 className="font-sora text-2xl font-bold text-white">{item.role}</h3>
                        <p className="mb-2 text-primary">{item.company}</p>
                        <p className="mb-4 text-sm text-muted-foreground">{item.duration}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
