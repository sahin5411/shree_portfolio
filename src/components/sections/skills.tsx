"use client";

import { motion } from "framer-motion";
import TechIcon from "@/components/tech-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
        duration: 0.5
    }
  },
};

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
        >
          <h2 className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My <span className="text-primary">Skills</span>
          </h2>
           <hr className="mx-auto mt-4 w-24 border-2 border-primary" />
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:grid-cols-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center gap-2 rounded-lg p-6"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <TechIcon name={skill} className="h-14 w-14 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="font-poppins text-sm font-medium text-foreground">{skill}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
