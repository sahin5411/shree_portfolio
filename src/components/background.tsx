"use client";

import dynamic from 'next/dynamic';

// Dynamically import the Starfield component and disable server-side rendering for it.
// This is the correct way to ensure a component that relies on browser-only APIs
// is not processed on the server.
const Starfield = dynamic(() => import('@/components/starfield'), {
  ssr: false,
});

const Background = () => {
  return <Starfield />;
};

export default Background;
