"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter, Target } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Target },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
]

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <nav className="fixed left-0 top-0 hidden h-full w-24 flex-col items-center justify-between border-r border-border bg-background/50 py-8 backdrop-blur-sm md:flex z-20">
        <Link href="#home">
            <span className="font-sora text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-red-500 bg-clip-text text-transparent">SP</span>
        </Link>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon" className={`rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary ${isActive ? 'bg-primary text-primary-foreground' : 'text-foreground'}`}>
                    <Link href={link.href}>
                      <link.icon className="h-6 w-6" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-4">
          {socialLinks.map((link) => (
             <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground transition-colors hover:text-primary">
                            <link.icon className="h-5 w-5" />
                        </Button>
                    </a>
                </TooltipTrigger>
                 <TooltipContent side="right">
                  <p>{link.name}</p>
                </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default Sidebar;
