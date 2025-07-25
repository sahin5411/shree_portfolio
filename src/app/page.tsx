"use client";

import { useState } from "react";
import type { PrioritizeSkillsProjectsOutput } from "@/ai/flows/prioritize-skills-projects";
import { prioritizeSkillsProjects } from "@/ai/flows/prioritize-skills-projects";

import { useToast } from "@/hooks/use-toast";
import AnimatedBackground from "@/components/animated-background";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import AiPrioritizer from "@/components/sections/ai-prioritizer";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Security from "@/components/sections/security";

const initialSkills = [
  "HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS",
  "Material UI", "Redux", "React Query", "Framer Motion", "React Router",
  "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "Prisma",
  "GraphQL", "Firebase", "Stripe",
  "React Native", "Docker", "Tauri", "Figma", "Go",
];

const initialProjects = [
  {
    title: "Modern React Portfolio",
    description: "Embark on a journey through my professional evolution with the 'Modern React Portfolio' - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by React, this portfolio is more than just a static display; it's an immersive experience that reflects the cutting edge of modern web technologies.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: 'portfolio website'
  },
  {
    title: "Interactive Cards Portfolio",
    description: "Step into the extraordinary world of my professional journey through the 'Interactive Cards Portfolio' - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "TypeScript", "Vite", "SCSS"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: 'interactive user interface'
  },
  {
    title: "Space Themed Website",
    description: "Embark on an interstellar journey with my 'Space Themed Website', a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.",
    image: "https://placehold.co/600x400.png",
    tags: ["Three.js", "React", "GLSL", "Space"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: 'space nebula'
  }
];

export default function Home() {
  const { toast } = useToast();
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [projects, setProjects] = useState(initialProjects);
  const [isPrioritizing, setIsPrioritizing] = useState(false);
  const [isPristine, setIsPristine] = useState(true);

  const handlePrioritize = async (employerDomain: string) => {
    if (!employerDomain) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter an employer domain.",
      });
      return;
    }
    
    setIsPrioritizing(true);
    setIsPristine(false);

    try {
      const result: PrioritizeSkillsProjectsOutput = await prioritizeSkillsProjects({
        employerDomain,
        skills: initialSkills,
        projects: initialProjects.map(p => `${p.title}: ${p.description}`),
      });
      
      const prioritizedProjectTitles = result.prioritizedProjects.map(p => p.split(':')[0]);
      
      const reorderedProjects = prioritizedProjectTitles
        .map(title => initialProjects.find(p => p.title === title))
        .filter((p): p is typeof initialProjects[0] => p !== undefined);

      const remainingProjects = initialProjects.filter(
        (p) => !prioritizedProjectTitles.includes(p.title)
      );

      setSkills(result.prioritizedSkills);
      setProjects([...reorderedProjects, ...remainingProjects]);
      
      toast({
        title: "Success!",
        description: `Portfolio has been tailored for the ${employerDomain} domain.`,
      });

    } catch (error) {
      console.error("AI prioritization failed:", error);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: "Could not prioritize content. Please try again later.",
      });
      setSkills(initialSkills);
      setProjects(initialProjects);
    } finally {
      setIsPrioritizing(false);
    }
  };

  const handleReset = () => {
    setSkills(initialSkills);
    setProjects(initialProjects);
    setIsPristine(true);
    toast({
      title: "Reset",
      description: "Portfolio has been reset to its original state.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow z-10">
        <Hero />
        <AiPrioritizer 
            onPrioritize={handlePrioritize}
            onReset={handleReset}
            loading={isPrioritizing}
            isPristine={isPristine}
        />
        <Skills key={`skills-${skills.join(',')}`} skills={skills} />
        <Projects key={`projects-${projects.map(p=>p.title).join(',')}`} projects={projects} />
        <Security />
      </main>
      <Footer />
    </div>
  );
}
