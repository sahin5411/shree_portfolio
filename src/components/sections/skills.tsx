"use client";

import { motion } from "framer-motion";
import TechIcon from "@/components/tech-icons";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Tech Universe
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A constellation of technologies I use to build modern web experiences.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 lg:grid-cols-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <TechIcon name={skill} className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium text-foreground">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
