'use server';

/**
 * @fileOverview A flow that prioritizes skills and projects based on the employer's domain.
 *
 * - prioritizeSkillsProjects - A function that handles the prioritization process.
 * - PrioritizeSkillsProjectsInput - The input type for the prioritizeSkillsProjects function.
 * - PrioritizeSkillsProjectsOutput - The return type for the prioritizeSkillsProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeSkillsProjectsInputSchema = z.object({
  employerDomain: z
    .string()
    .describe('The domain or industry of the potential employer.'),
  skills: z.array(z.string()).describe('A list of skills to prioritize.'),
  projects: z.array(z.string()).describe('A list of project descriptions to prioritize.'),
});
export type PrioritizeSkillsProjectsInput = z.infer<typeof PrioritizeSkillsProjectsInputSchema>;

const PrioritizeSkillsProjectsOutputSchema = z.object({
  prioritizedSkills: z
    .array(z.string())
    .describe('The skills, ordered by relevance to the employer domain.'),
  prioritizedProjects: z
    .array(z.string())
    .describe('The projects, ordered by relevance to the employer domain.'),
});
export type PrioritizeSkillsProjectsOutput = z.infer<typeof PrioritizeSkillsProjectsOutputSchema>;

export async function prioritizeSkillsProjects(
  input: PrioritizeSkillsProjectsInput
): Promise<PrioritizeSkillsProjectsOutput> {
  return prioritizeSkillsProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeSkillsProjectsPrompt',
  input: {schema: PrioritizeSkillsProjectsInputSchema},
  output: {schema: PrioritizeSkillsProjectsOutputSchema},
  prompt: `You are an AI assistant that specializes in helping full-stack developers tailor their portfolios to specific job opportunities.

You will receive a list of skills and projects, along with the domain of the potential employer.
Your goal is to re-order the skills and projects so that the most relevant ones for the employer's domain are listed first.

Employer Domain: {{{employerDomain}}}
Skills: {{#each skills}}{{{this}}}\n{{/each}}
Projects: {{#each projects}}{{{this}}}\n{{/each}}

Prioritized Skills: (List the skills, ordered by relevance to the employer domain.  Omit skills that are not relevant.)
Prioritized Projects: (List the projects, ordered by relevance to the employer domain. Omit projects that are not relevant.)`,
});

const prioritizeSkillsProjectsFlow = ai.defineFlow(
  {
    name: 'prioritizeSkillsProjectsFlow',
    inputSchema: PrioritizeSkillsProjectsInputSchema,
    outputSchema: PrioritizeSkillsProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
