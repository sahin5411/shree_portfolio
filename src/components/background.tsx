"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the Starfield component and disable server-side rendering for it.
const Starfield = dynamic(() => import('@/components/starfield'), {
  ssr: false,
});

const Background = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <Starfield />}
    </>
  );
};

export default Background;
