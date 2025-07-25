"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Wand2, RotateCcw, Loader2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const FormSchema = z.object({
  domain: z.string().min(2, {
    message: "Domain must be at least 2 characters.",
  }),
});

interface AiPrioritizerProps {
  onPrioritize: (domain: string) => Promise<void>;
  onReset: () => void;
  loading: boolean;
  isPristine: boolean;
}

const AiPrioritizer = ({ onPrioritize, onReset, loading, isPristine }: AiPrioritizerProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      domain: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    onPrioritize(data.domain);
  }

  return (
    <motion.section
      id="ai-prioritizer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-16 sm:py-24"
    >
      <div className="container mx-auto max-w-3xl">
        <Card className="border-primary/50 shadow-lg shadow-primary/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Wand2 className="h-8 w-8 text-primary" />
              <div>
                <CardTitle className="font-headline text-2xl text-primary">AI-Powered Portfolio</CardTitle>
                <CardDescription>Tailor my skills & projects to your company&apos;s needs.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                  <FormField
                    control={form.control}
                    name="domain"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Potential Employer Domain</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 'fintech', 'healthcare', 'e-commerce'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {!isPristine && (
                  <Button type="button" variant="ghost" onClick={onReset} disabled={loading}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Reset
                  </Button>
                )}
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Prioritize
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </motion.section>
  );
};

export default AiPrioritizer;
