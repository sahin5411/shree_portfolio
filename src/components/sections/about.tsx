"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
        >
          <h2 className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>
          <hr className="mx-auto mt-4 w-24 border-2 border-primary" />
        </motion.div>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <Image
              src="https://i.ibb.co/bF4LBrb/341140510-911475743450379-245388301548691060-n.jpg"
              alt="About me"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="person coding"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mt-6 text-muted-foreground">
              I am a passionate and creative full-stack developer with a knack for building beautiful and functional web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life, from concept to deployment.
            </p>
            <p className="mt-4 text-muted-foreground">
              My journey in web development started with a fascination for how things work on the internet, which quickly grew into a career. I am a lifelong learner, always excited to explore new technologies and improve my skills to deliver high-quality, scalable, and user-friendly solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
