"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  aiHint: string;
};

interface ProjectsProps {
  projects: Project[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
        >
          <h2 className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <hr className="mx-auto mt-4 w-24 border-2 border-primary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-secondary/30 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-primary/20"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative h-56 w-full">
                  <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={project.aiHint}
                      className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-sora text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 flex-grow text-muted-foreground">{project.description}</p>
                
                <div className="my-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          See Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                  </Button>
                  <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                      </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
