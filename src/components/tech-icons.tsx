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
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </SvgWrapper>
      );
    case 'node.js':
       return (
        <SvgWrapper>
            <path d="M10.24 2.86A2 2 0 0 0 8.35 2H6.01a2 2 0 0 0-1.93 1.51L2.2 12h5.21a2 2 0 0 1 1.93 1.51l1.88 7.49a2 2 0 0 0 1.88.99h2.24a2 2 0 0 0 1.93-1.51l1.88-7.49a2 2 0 0 0-1.88-2.5H13.8a2 2 0 0 1-1.93-1.51Z"/>
        </SvgWrapper>
       )
    case 'firebase':
        return (
         <SvgWrapper>
            <path d="m5.15 2.33 6.4-1.42c.83-.19 1.66.42 1.78 1.28l1.35 6.94a2 2 0 0 1-1.78 2.58l-6.4 1.42c-.83.19-1.66-.42-1.78-1.28L3.37 4.9c-.12-.86.5-1.68 1.35-1.87a.4.4 0 0 1 .43.26Z"/>
            <path d="M10.19 14.23 12.5 8.2l-2.04.5.38-2.3 5.4 1.19-1.35-6.14-5.4-1.2L9.4 6.3l-2.12.33Z"/>
         </SvgWrapper>
        )
    case 'mongodb':
        return (
            <SvgWrapper>
                <path d="M14 17.5V14h-4v3.5a2.5 2.5 0 1 0 4 0Z"/>
                <path d="M12 2a10 10 0 1 0 10 10c0-4.53-3.05-8.24-7-9.58"/>
            </SvgWrapper>
        )
    default:
      return (
        <SvgWrapper>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </SvgWrapper>
      );
  }
};

export default TechIcon;
