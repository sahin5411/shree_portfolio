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
              src="https://i.ibb.co/ZRMY8vBj/91fbac61-ee08-4611-85be-61869ababbf0.jpg"
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
              I am a passionate and creative Angular developer with a strong focus on building responsive, dynamic, and user-centric web applications. With a deep understanding of modern front-end frameworks, especially Angular, I take pride in crafting clean, scalable, and maintainable code that brings ideas to life.

My journey into web development began with a fascination for how interactive experiences are built on the web, which soon evolved into a dedicated career. Over the years, I’ve gained hands-on experience in developing full-stack applications, integrating powerful APIs, and optimizing performance for real-world scalability.
            </p>
            <p className="mt-4 text-muted-foreground">
              Driven by curiosity and a commitment to continuous learning, I stay up-to-date with the latest in Angular, TypeScript, RxJS, and modern web development practices. I thrive in collaborative environments where I can contribute to solving meaningful problems and delivering impactful digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
