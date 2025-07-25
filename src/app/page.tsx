"use client";

import { useState } from "react";
import AnimatedBackground from "@/components/animated-background";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import About from "@/components/sections/about";
import Footer from "@/components/footer";

const initialSkills = [
  "HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS",
  "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Prisma",
  "GraphQL", "Firebase", "Docker", "Go", "Figma",
];

const initialProjects = [
  {
    title: "Modern React Portfolio",
    description: "A dynamic showcase of my skills and passion for web development, crafted with React and modern web technologies.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: 'portfolio website'
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, a shopping cart, and a checkout process, built with a MERN stack.",
    image: "https://placehold.co/600x400.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: 'online shopping'
  },
  {
    title: "Space Themed Website",
    description: "An interstellar journey with mesmerizing space-themed visuals, inviting exploration of cosmic wonders.",
    image: "https://placehold.co/600x400.png",
    tags: ["Three.js", "React", "GLSL", "Space"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: 'space nebula'
  }
];

export default function Home() {
  const [skills] = useState<string[]>(initialSkills);
  const [projects] = useState(initialProjects);

  return (
    <div>
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
