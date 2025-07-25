// A selection of tech icons. In a real app, you might use a library or have a more robust system.
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
      fill="currentColor"
    >
      {children}
    </svg>
  );

  switch (name.toLowerCase()) {
    case 'html5':
      return (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" {...iconProps} />
      );
    case 'css3':
        return (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" {...iconProps} />
        );
    case 'javascript':
      return (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" {...iconProps} />
      );
    case 'react':
      return (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" {...iconProps} />
      );
    case 'typescript':
      return (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" {...iconProps} />
      );
    case 'tailwind css':
      return (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" {...iconProps} />
      );
    case 'node.js':
       return (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" {...iconProps} />
       );
    case 'mongodb':
        return (
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" {...iconProps} />
        );
    case 'firebase':
        return (
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" {...iconProps} />
        );
    case 'go':
      return (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" {...iconProps} />
      );
    case 'docker':
      return (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" {...iconProps} />
      );
    case 'figma':
        return (
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" {...iconProps} />
        );
    case 'graphql':
        return (
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" {...iconProps} />
        )
    case 'prisma':
        return (
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" alt="Prisma" {...iconProps} />
        )
    case 'postgresql':
        return (
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" {...iconProps} />
        )
    case 'next.js':
        return (
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" {...iconProps} />
        )
    case 'angular':
        return (
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" {...iconProps} />
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
