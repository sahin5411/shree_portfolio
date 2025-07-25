
// A selection of tech icons. In a real app, you might use a library or have a more robust system.
// The filter creates a "glowing" effect that matches the theme.

const TechIcon = ({ name, className }: { name: string, className?: string }) => {
  const iconProps = {
    className: className || "h-12 w-12",
    "aria-hidden": true,
    focusable: false,
  };

  const SvgWrapper = ({ children, viewBox="0 0 24 24" }: { children: React.ReactNode, viewBox?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
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
        <SvgWrapper viewBox="0 0 24 24">
          <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
          <path fill="#F16529" d="M12 21.6V2.13h8.4l-1.6 18.23-6.8 1.93v-.01z"/>
          <path fill="#EBEBEB" d="M12 11.25V7.5h7.9l-.38 4.25H12v-.5zM12 16.5v3.75l6.78-1.88.8-9.12H12v3.75h3.25l-.3 3.37-2.95.81v.01z"/>
          <path fill="#FFF" d="m12 11.25-7.75-.02.16 1.75h7.6v-1.73zm-.01 5.25-2.94-.81-.19-2.19H5.1l.36 4.02L12 19.5v-3.75z"/>
        </SvgWrapper>
      );
    case 'css3':
        return (
          <SvgWrapper viewBox="0 0 24 24">
            <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
            <path fill="#33A9DC" d="M12 21.6V2.13h8.4l-1.6 18.23-6.8 1.93v-.01z"/>
            <path fill="#EBEBEB" d="M12 11.25V7.5h7.9l-.38 4.25H12v-.5zM12 16.5v3.75l6.78-1.88.8-9.12H12v3.75h3.25l-.3 3.37-2.95.81v.01z"/>
            <path fill="#FFF" d="m12 11.25-7.75-.02.16 1.75h7.6v-1.73zm-.01 5.25-2.94-.81-.19-2.19H5.1l.36 4.02L12 19.5v-3.75z"/>
          </SvgWrapper>
        );
    case 'javascript':
      return (
        <SvgWrapper viewBox="0 0 32 32">
          <path fill="#F7DF1E" d="M0 0h32v32H0z"/>
          <path d="m22.1 23.9-1.55-2.65c-.8.55-1.75.85-2.8.85-1.3 0-2.35-.6-2.35-1.6 0-1.15 1.1-1.5 2.7-1.05l1.6-.35c1.9-.4 3.1-1.6 3.1-3.35 0-1.9-1.4-3.2-3.6-3.2-1.6 0-2.9.55-3.9 1.45l1.4 2.5c.75-.6 1.5-.95 2.45-.95.9 0 1.45.45 1.45 1.25s-.55.95-1.7.95l-1.45.3c-2.2.5-3.55 1.6-3.55 3.5 0 2.1 1.65 3.4 4.1 3.4 1.8 0 3.2-.6 4.3-1.55zM12.85 24c1.75 0 2.9-.8 3.4-1.9l-2.6-.9c-.2.45-.6.65-1.1.65-.65 0-1.1-.35-1.1-1.1v-5.6h2.8v-2.3h-2.8v-3.3h-2.8v13.5h-2.9v2.3h2.9c0 1.9.9 2.8 2.55 2.8z"/>
        </SvgWrapper>
      );
    case 'react':
      return (
        <SvgWrapper viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </SvgWrapper>
      );
    case 'typescript':
      return (
        <SvgWrapper viewBox="0 0 32 32">
            <path fill="#3178C6" d="M0 0h32v32H0z"/>
            <path fill="#fff" d="M14.5 23.3h-3.4l.5-2.6h2.4v-1.3h-2.4l.6-3.1h2.4v-1.3h-2.4l.6-3.3h-3l-.6 3.3h-2.2v1.3h2.2l-.6 3.1h-2.2v1.3h2.2l-.5 2.6H6.1v2.3h8.4zm.8-11.4c0-.6.1-1 .4-1.3s.7-.4 1.2-.4.9.1 1.2.4 1.1 1.5 1.1 1.5l2-1.2c-.4-.7-1-1.2-1.7-1.6-.7-.4-1.5-.5-2.4-.5-1.3 0-2.3.4-3.1 1.1-.8.7-1.2 1.8-1.2 3.2v4.2h2.8v-3.9c0-.8 0-1.4.1-1.7s.1-.5.3-.6.4-.3.7-.3c.3 0 .5.1.7.3s.3.4.3.6-.1.6-.1.9l-.1 1V21h2.8v-9.1z"/>
        </SvgWrapper>
      );
    case 'tailwind css':
      return (
        <SvgWrapper viewBox="0 0 32 32">
          <path fill="#38BDF8" d="M16 4.25c-6.4 0-11.75 5.35-11.75 11.75s5.35 11.75 11.75 11.75S27.75 22.4 27.75 16 22.4 4.25 16 4.25z"/>
          <path fill="#fff" d="M21.2 11.3c-2.1-2-5.4-1.4-6.8.8-1.3 2.1-.8 5.4 1.3 6.8 2.1 1.4 5.4.8 6.8-.8s.8-5.4-1.3-6.8zM12.9 17.5c-1.4-1.4-1.4-3.6 0-5 .7-.7 1.6-1 2.5-1s1.8.3 2.5 1c1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1z"/>
        </SvgWrapper>
      );
    case 'node.js':
       return (
        <SvgWrapper viewBox="0 0 24 24">
            <path fill="#339933" d="M11.986 23.334c-5.833 0-10.435-3.83-10.435-8.995 0-5.442 4.41-9.33 10.158-9.33 4.22 0 7.425 1.96 8.93 4.708l-3.52 2.15c-.95-1.96-2.61-2.92-4.9-2.92-2.96 0-4.88 2.22-4.88 5.39s1.92 5.37 4.88 5.37c2.62 0 4.14-1.22 5.1-2.93l3.52 2.134c-1.543 3.1-4.78 5.3-9.35 5.3zm.277-6.27c-3.4 0-5.7-2.31-5.7-5.43s2.3-5.43 5.7-5.43 5.7 2.31 5.7 5.43-2.3 5.43-5.7 5.43z"/>
        </SvgWrapper>
       );
    case 'mongodb':
        return (
            <SvgWrapper viewBox="0 0 24 24">
                <path fill="#47A248" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
                <path fill="#FFF" d="M14.21 16.21c-.49.49-1.28.49-1.77 0l-2.02-2.02c-.49-.49-.49-1.28 0-1.77l2.02-2.02c.49-.49 1.28-.49 1.77 0l2.02 2.02c.49.49.49 1.28 0 1.77l-2.02 2.02zm-1.89-6.36c-.49.49-1.28.49-1.77 0l-1.01-1.01c-.49-.49-.49-1.28 0-1.77l1.01-1.01c.49-.49 1.28-.49 1.77 0l1.01 1.01c.49.49.49 1.28 0 1.77l-1.01 1.01zM9.31 16.21c-.49.49-1.28.49-1.77 0l-2.02-2.02c-.49-.49-.49-1.28 0-1.77l2.02-2.02c.49-.49 1.28-.49 1.77 0l2.02 2.02c.49.49.49 1.28 0 1.77l-2.02 2.02z"/>
            </SvgWrapper>
        );
    case 'firebase':
        return (
         <SvgWrapper viewBox="0 0 24 24">
            <path d="m13.06,7.92l-2.01,5.21l-5.79-1.48l2.95-7.61l4.85,3.88Z" fill="#ffc24a"/>
            <path d="m11.05,13.13l-5.79-1.48l-.94,2.44l7.63,1.93l-1.03-3.16l.13,.27Z" fill="#ffa712"/>
            <path d="M13.06,7.92l4.85-3.88l-2.06-5.34l-7.64,1.93l4.85,7.29Z" fill="#f4bd62"/>
            <path d="M17.91,4.04l-2.06-5.34c-.17-.43-.72-.51-1-.18l-7.15,5.69l7.64,1.93l2.57-2.1Z" fill="#f6820c"/>
         </SvgWrapper>
        );
    case 'go':
      return (
        <SvgWrapper viewBox="0 0 128 128">
          <path fill="#00ADD8" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z"/>
          <path fill="#fff" d="M67.3 32.2c-6.8 0-12.7 2.1-17.5 6.4-4.8 4.3-7.2 10.2-7.2 17.8 0 7.5 2.4 13.4 7.2 17.7 4.8 4.3 10.7 6.5 17.5 6.5 6.7 0 12.3-1.6 16.7-4.9l-4.5-6.8c-3.1 2.2-6.9 3.2-11.4 3.2-6.4 0-11.1-2.9-14-8.8l25.3-9.5c.3-1 .4-2 .4-3.1 0-7.3-2.5-13-7.5-17.3-5-4.3-10.9-6.4-17.7-6.4zm-9.3 22.8c.8-5.2 4.4-7.8 10.8-7.8 6.4 0 10 2.6 10.8 7.8H58zM96.1 48.3c0-7-2.4-12.6-7.3-16.7-4.9-4.1-10.8-6.2-17.7-6.2-8 0-14.4 2.8-19.2 8.4l5.9 5.8c3.2-4 7.5-6 12.8-6 6.3 0 10.7 2.2 13.3 6.6s3.9 10.2 3.9 17.4c0 7.2-1.3 13-3.9 17.4-2.6 4.4-7 6.6-13.3 6.6-5.3 0-9.6-2-12.8-6l-5.9 5.8c4.8 5.6 11.2 8.4 19.2 8.4 6.9 0 12.8-2.1 17.7-6.2 4.9-4.1 7.3-9.7 7.3-16.7z"/>
        </SvgWrapper>
      );
    case 'docker':
      return (
        <SvgWrapper viewBox="0 0 24 24">
          <path fill="#2496ED" d="M23.15.35a1.2 1.2 0 0 0-1.16-.3L.85 5.7a1.2 1.2 0 0 0-.8 1.15v9.4a1.2 1.2 0 0 0 .8 1.15l21.14 5.65a1.2 1.2 0 0 0 1.16-.3 1.2 1.2 0 0 0 .3-1.16V1.5a1.2 1.2 0 0 0-.3-1.15zM4.93 12.6V9.83h2.8v2.77H4.93zm0-3.9v-2.8h2.8v2.8H4.93zm3.9 3.9V9.83h2.8v2.77H8.83zm0-3.9v-2.8h2.8v2.8H8.83zm.14 8.75a2.24 2.24 0 0 1-2.22-2.1v-.9h2.8v.9c0 .6.54 1.1 1.2 1.1s1.17-.5 1.17-1.1V9.83h2.8v5.52a2.24 2.24 0 0 1-2.22 2.1H9.09l-.12.03zM12.8 8.7v-2.8H15.6v2.8h-2.8zm3.9 0v-2.8h2.8v2.8h-2.8z"/>
        </SvgWrapper>
      );
    case 'figma':
        return (
            <SvgWrapper viewBox="0 0 24 24">
                <path d="M15.48 9.38h-2.9v2.89h2.9a1.45 1.45 0 1 0 0-2.89z" fill="#1ABCFE"/>
                <path d="M12.58 15.15a1.45 1.45 0 0 1-1.44 1.45h-2.9V13.7h2.9a1.45 1.45 0 0 1 1.44 1.45z" fill="#0ACF83"/>
                <path d="M9.69 9.38a1.45 1.45 0 0 1-1.45-1.44V5.05h2.9v2.89a1.45 1.45 0 0 1-1.45 1.44z" fill="#F24E1E"/>
                <path d="M9.69 12.26a1.45 1.45 0 0 1 1.44-1.44h2.9v2.89h-2.9a1.45 1.45 0 0 1-1.44-1.45z" fill="#FF7262"/>
                <path d="M12.58 6.5a1.45 1.45 0 1 1 1.44 1.44h-2.89V5.05h1.45a1.45 1.45 0 0 1 0 2.89v-1.44z" fill="#A259FF"/>
            </SvgWrapper>
        );
    case 'graphql':
        return (
            <SvgWrapper viewBox="0 0 24 24">
                <path fill="#E10098" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
                <path fill="#FFF" d="m11.16 17.58 4.2-4.2-1.2-1.2-3 3-3-3-1.2 1.2 4.2 4.2zM12 12.4l-4.2-4.2 1.2-1.2 3 3 3-3 1.2 1.2-4.2 4.2z"/>
                <path fill="#FFF" d="M6.9 12.4h10.2v-1.2H6.9v1.2z"/>
                <path fill="#FFF" d="M4.1 8.8h1.2v6.4H4.1V8.8zM18.7 8.8h1.2v6.4h-1.2V8.8z"/>
                <circle fill="#FFF" cx="4.7" cy="6.2" r="1.1"/>
                <circle fill="#FFF" cx="19.3" cy="6.2" r="1.1"/>
                <circle fill="#FFF" cx="4.7" cy="17.8" r="1.1"/>
                <circle fill="#FFF" cx="19.3" cy="17.8" r="1.1"/>
                <circle fill="#FFF" cx="12" cy="3.5" r="1.1"/>
                <circle fill="#FFF" cx="12" cy="20.5" r="1.1"/>
            </SvgWrapper>
        )
    case 'prisma':
        return (
            <SvgWrapper viewBox="0 0 24 24">
                <path fill="#2D3748" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
                <path fill="#fff" d="m12 15.6-4.5-4.5V6.6l4.5 4.5 4.5-4.5v4.5l-4.5 4.5zM12 18l4.5-4.5v-4.5L12 13.5l-4.5-4.5v4.5L12 18z"/>
            </SvgWrapper>
        )
    case 'postgresql':
        return (
            <SvgWrapper viewBox="0 0 24 24">
                <path fill="#336791" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
                <path fill="#fff" d="M12 6.6c-2.4 0-4.3 1.9-4.3 4.3v6.5h2.1V11c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v6.4h2.1V11c0-2.4-1.9-4.4-4.3-4.4z"/>
                <path fill="#fff" d="M16.3 10.9h-2.1v2.1h2.1v-2.1z"/>
            </SvgWrapper>
        )
    case 'next.js':
        return (
            <SvgWrapper viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#000"/>
                <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 13.5V9h-2V7.5h6v1.5h-2v8h-2z" fill="#000"/>
            </SvgWrapper>
        )
    default:
      return (
        <SvgWrapper>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor"></path>
        </SvgWrapper>
      );
  }
};

export default TechIcon;
