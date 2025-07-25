import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 mt-24">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="text-center text-sm text-muted-foreground sm:text-left">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
