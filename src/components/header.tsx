import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AI Tool', href: '#ai-prioritizer' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Security', href: '#security' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" className="text-xl font-bold font-headline text-primary">
          CosmicFolio
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <Button asChild variant="outline" size="sm">
            <a href="#" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
