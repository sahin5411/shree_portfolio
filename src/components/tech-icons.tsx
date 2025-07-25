
// A selection of tech icons. In a real app, you might use a library or have a more robust system.
// The filter creates a "glowing" effect that matches the theme.

const TechIcon = ({ name, className }: { name: string, className?: string }) => {
  const iconProps = {
    className: className || "h-12 w-12 text-foreground",
    "aria-hidden": true,
    focusable: false,
  };
  
  const SvgWrapper = ({ children }: { children: React.ReactNode }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
        <defs>
            <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g style={{ filter: 'url(#glow)' }}>
            {children}
        </g>
    </svg>
  );

  switch (name.toLowerCase()) {
    case 'html5':
      return (
        <SvgWrapper>
          <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4zm11.5 6H12v2h3.5l-.5 4.5-3 1-3-1-.25-2.5H6.5l.5 5L12 18l5-1.5.5-5.5z"/>
        </SvgWrapper>
      );
    case 'css3':
      return (
        <SvgWrapper>
          <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4zm11.5 6H12v2h3.5l-.5 4.5-3 1-3-1-.25-2.5H6.5l.5 5L12 18l5-1.5.5-5.5z"/>
          <path d="M8.5 9h7L15 6H9l-.5 3z" fill="currentColor" />
        </SvgWrapper>
      );
    case 'javascript':
      return (
        <SvgWrapper>
          <path d="M6 9h12v6H6z"/>
          <path d="M9.5 13.5c0 1.5 1.5 1.5 1.5 0v-3c0-1.5-1.5-1.5-1.5 0v3z"/>
          <path d="M14 15V9h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1z"/>
        </SvgWrapper>
      );
    case 'react':
      return (
        <SvgWrapper>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.48m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
        </SvgWrapper>
      );
    case 'typescript':
      return (
        <SvgWrapper>
          <path d="M2.25 12.38.75 6.38a.5.5 0 0 1 .5-.63h3.5a.5.5 0 0 1 .5.63l-1.5 6c-.1.4.2.8.6.8h2.3a.5.5 0 0 1 .5.63l-1.5 6a.5.5 0 0 1-.5.62h-3.5a.5.5 0 0 1-.5-.63l1.5-6c.1-.4-.2-.8-.6-.8H1.75a.5.5 0 0 1-.5-.62zM23.25 17.62l-1.5-6a.5.5 0 0 0-.5-.62h-3.5a.5.5 0 0 0-.5.62l1.5 6c.1.4-.2.8-.6.8h-2.3a.5.5 0 0 0-.5.63l1.5 6a.5.5 0 0 0 .5.62h3.5a.5.5 0 0 0 .5-.62l-1.5-6c-.1-.4.2-.8.6-.8h2.3a.5.5 0 0 0 .5-.63z"/>
        </SvgWrapper>
      );
    case 'tailwind css':
      return (
        <SvgWrapper>
          <path d="M12 12c-3-3-3-6-1-8s5-1 8 1-1 9-4 9zm0 0c-3 3-6 3-8 1s-1-5 1-8 9 1 9 4z" />
        </SvgWrapper>
      );
    case 'node.js':
       return (
        <SvgWrapper>
            <path d="M10.24 2.86A2 2 0 0 0 8.35 2H6.01a2 2 0 0 0-1.93 1.51L2.2 12h5.21a2 2 0 0 1 1.93 1.51l1.88 7.49a2 2 0 0 0 1.88.99h2.24a2 2 0 0 0 1.93-1.51l1.88-7.49a2 2 0 0 0-1.88-2.5H13.8a2 2 0 0 1-1.93-1.51Z"/>
        </SvgWrapper>
       );
    case 'mongodb':
        return (
            <SvgWrapper>
                <path d="M14 17.5V14h-4v3.5a2.5 2.5 0 1 0 4 0Z"/>
                <path d="M12 2a10 10 0 1 0 10 10c0-4.53-3.05-8.24-7-9.58"/>
            </SvgWrapper>
        );
    case 'firebase':
        return (
         <SvgWrapper>
            <path d="m5.15 2.33 6.4-1.42c.83-.19 1.66.42 1.78 1.28l1.35 6.94a2 2 0 0 1-1.78 2.58l-6.4 1.42c-.83.19-1.66-.42-1.78-1.28L3.37 4.9c-.12-.86.5-1.68 1.35-1.87a.4.4 0 0 1 .43.26Z"/>
            <path d="M10.19 14.23 12.5 8.2l-2.04.5.38-2.3 5.4 1.19-1.35-6.14-5.4-1.2L9.4 6.3l-2.12.33Z"/>
         </SvgWrapper>
        );
    case 'go':
      return (
        <SvgWrapper>
            <path d="M14.5 22H11a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1.5a2 2 0 0 0 2-2v-1.5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6" />
            <path d="M6 16h3" />
            <path d="M11.5 8.5v-2a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H9" />
        </SvgWrapper>
      );
    case 'docker':
      return (
        <SvgWrapper>
            <path d="M22 13.4V10.6C22 10.2 21.8 9.8 21.5 9.5L14.5 4.5C14.2 4.2 13.8 4 13.4 4H10.6C10.2 4 9.8 4.2 9.5 4.5L2.5 9.5C2.2 9.8 2 10.2 2 10.6V13.4C2 13.8 2.2 14.2 2.5 14.5L9.5 19.5C9.8 19.8 10.2 20 10.6 20H13.4C13.8 20 14.2 19.8 14.5 19.5L21.5 14.5C21.8 14.2 22 13.8 22 13.4Z" />
            <path d="M14 9L9 12" />
            <path d="M18 11.5L13 14.5" />
            <path d="M15 6.5L10 9.5" />
        </SvgWrapper>
      );
    case 'figma':
        return (
            <SvgWrapper>
                <path d="M12 12h-1a2 2 0 0 1 -2 -2V9a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2h-1" />
                <path d="M12 12a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-1a2 2 0 0 0 -2 -2h-1a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h1" />
            </SvgWrapper>
        );
    default:
      return (
        <SvgWrapper>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </SvgWrapper>
      );
  }
};

export default TechIcon;
