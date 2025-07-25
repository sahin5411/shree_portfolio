"use client";
import { Lock, ShieldCheck, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Implementing end-to-end encryption for data in transit and at rest, ensuring sensitive information remains confidential.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description: "Utilizing industry-standard authentication protocols like OAuth 2.0 and JWTs to protect user accounts and resources.",
  },
  {
    icon: Fingerprint,
    title: "Vulnerability Prevention",
    description: "Adhering to best practices to prevent common web vulnerabilities such as XSS, CSRF, and SQL injection.",
  },
];

const Security = () => {
  return (
    <section id="security" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fortified by Design
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Building secure and reliable applications is at the core of my development philosophy.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-accent/20 bg-accent/10"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
