"use client";

import { useState } from "react";
import dynamic from 'next/dynamic';
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import About from "@/components/sections/about";
import Footer from "@/components/footer";
import Experience from "@/components/sections/experience";

const Starfield = dynamic(() => import('@/components/starfield'), { ssr: false });

const initialSkills = [
  "HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS",
  "Next.js", "Node.js", "MongoDB", "PostgreSQL", "Prisma",
  "GraphQL", "Firebase", "Docker", "Go", "Figma", "Angular"
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
  },
   {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, providing insights through charts and graphs.",
    image: "https://placehold.co/600x400.png",
    tags: ["D3.js", "React", "Data Viz"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: 'dashboard charts'
  },
];

const initialExperience = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2021 - Present",
    description: "Led the development of scalable web applications, mentored junior developers, and collaborated with cross-functional teams to deliver high-quality software solutions."
  },
  {
    role: "Mid-Level Software Engineer",
    company: "Innovate Co.",
    duration: "Jun 2018 - Dec 2020",
    description: "Developed and maintained features for a large-scale e-commerce platform, focusing on performance optimization and user experience."
  },
  {
    role: "Junior Web Developer",
    company: "Creative Agency",
    duration: "May 2016 - May 2018",
    description: "Built and styled responsive websites for various clients, gaining hands-on experience with modern front-end frameworks and content management systems."
  }
];


export default function Home() {
  const [skills] = useState<string[]>(initialSkills);
  const [projects] = useState(initialProjects);
  const [experience] = useState(initialExperience);

  return (
    <div>
      <Starfield />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
