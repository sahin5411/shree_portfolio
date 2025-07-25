"use client";

import dynamic from 'next/dynamic';

const Starfield = dynamic(() => import('@/components/starfield'), { ssr: false });

const Background = () => {
    return <Starfield />;
}

export default Background;
