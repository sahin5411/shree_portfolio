"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="font-sora text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact <span className="text-primary">Me</span>
          </h2>
          <hr className="mx-auto mt-4 w-24 border-2 border-primary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-sora text-3xl font-bold text-white">Let's Talk</h3>
              <p className="mt-2 text-muted-foreground">
                Have a project in mind or just want to say hi? I'm here to help.
              </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground">palsurashree9083@email.com</span>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground">+91 7003765780</span>
                </div>
                 <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input type="text" placeholder="Your Name" required className="bg-secondary border-border focus:ring-primary" />
            <Input type="email" placeholder="Your Email" required className="bg-secondary border-border focus:ring-primary"/>
            <Textarea placeholder="Your Message" required className="bg-secondary border-border focus:ring-primary" />
            <Button type="submit" size="lg">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
