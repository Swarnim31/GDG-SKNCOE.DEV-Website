'use server';

/**
 * @fileOverview A Genkit flow to generate project ideas for students.
 *
 * - generateProjectIdea - A function that takes a category and returns a structured project idea.
 * - ProjectIdeaInputSchema - The input type for the flow.
 * - ProjectIdea - The return type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ProjectIdeaInputSchema = z.string().min(1, { message: "Category cannot be empty." });


const TechStackSchema = z.object({
    name: z.string().describe("The name of the technology, framework, or library."),
    link: z.string().describe("An accurate and official documentation or high-quality tutorial link for the technology."),
});

const RoadmapStepSchema = z.object({
    step: z.number().describe("The step number in the roadmap."),
    title: z.string().describe("A concise title for this step of the roadmap."),
    description: z.string().describe("A detailed, practical explanation of what to do in this step."),
});

const ProjectIdeaOutputSchema = z.object({
  title: z.string().describe("A catchy and descriptive title for the project."),
  description: z.string().describe("A one to two-sentence summary of what the project is."),
  techStack: z.array(TechStackSchema).describe("A comprehensive list of recommended technologies or frameworks, each with a valid resource link."),
  features: z.array(z.string()).describe("A list of 3-5 key features a user could implement."),
  roadmap: z.array(RoadmapStepSchema).describe("A detailed, step-by-step project plan from initial setup to final deployment. This should be practical and provide clear guidance.")
});
export type ProjectIdea = z.infer<typeof ProjectIdeaOutputSchema>;

export async function generateProjectIdea(category: string): Promise<ProjectIdea> {
  return generateProjectIdeaFlow(category);
}

const prompt = ai.definePrompt({
  name: 'generateProjectIdeaPrompt',
  input: { schema: ProjectIdeaInputSchema },
  output: { schema: ProjectIdeaOutputSchema },
  prompt: `
    You are an expert software development mentor for students.
    Your goal is to generate an innovative and achievable project idea for a student developer
    based on a given category.

    The project idea should be interesting and suitable for a portfolio.
    It should not be a simple clone of an existing popular app (e.g., "a Twitter clone").
    Instead, it should have a unique twist or focus on a specific niche.

    For each technology in the tech stack, you MUST provide a valid, accurate, and helpful URL to its official documentation or a high-quality tutorial (e.g., from an official source, YouTube, or a reputable blog).

    The 'roadmap' is the most important part. It must be a detailed, practical, step-by-step guide that takes a beginner from a blank folder to a deployed application. Cover environment setup, project structure, key feature implementation, and deployment strategies. Make the advice actionable and easy to follow.

    Generate a project idea for the following category: {{{input}}}
  `,
});

const generateProjectIdeaFlow = ai.defineFlow(
  {
    name: 'generateProjectIdeaFlow',
    inputSchema: ProjectIdeaInputSchema,
    outputSchema: ProjectIdeaOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("Failed to generate a project idea. The model returned no output.");
    }
    return output;
  }
);
