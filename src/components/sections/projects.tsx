"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

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

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: -100 }}
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

        <div className="grid gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                  <div className="md:w-1/2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      data-ai-hint={project.aiHint}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:w-1/2">
                    <h3 className="font-sora text-3xl font-bold text-white">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild className="mt-4 w-fit">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            See Demo
                            <ExternalLink className="ml-2 h-4 w-4" />
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
