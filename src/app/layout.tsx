import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Sidebar from '@/components/sidebar';
import ParticlesBackground from '@/components/particles-background';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'CosmicFolio | Fullstack Developer Portfolio',
  description: "I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesBackground />
          <div className="flex relative z-10">
            <Sidebar />
            <main className="flex-grow pl-0 md:pl-24">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
