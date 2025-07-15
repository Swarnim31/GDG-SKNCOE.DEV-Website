
'use server';

/**
 * @fileOverview A simple AI chatbot flow.
 *
 * - askBot - A function that takes a user's query and returns a text response.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// You can define more complex input/output schemas if needed.
const AskBotInputSchema = z.string();
const AskBotOutputSchema = z.string();

export async function askBot(prompt: string): Promise<string> {
  return askBotFlow(prompt);
}

const askBotFlow = ai.defineFlow(
  {
    name: 'askBotFlow',
    inputSchema: AskBotInputSchema,
    outputSchema: AskBotOutputSchema,
  },
  async (prompt) => {
    const llmResponse = await ai.generate({
      prompt: `
        You are the friendly and helpful chatbot for the GDG SknCoe.DEV website.
        Your goal is to answer questions about the Google Developer Group at SKNCOE, our events, resources, and how to get involved.
        Be concise, friendly, and helpful.

        User's question: "${prompt}"
      `,
      model: 'googleai/gemini-pro',
      config: {
        temperature: 0.5,
      },
    });

    return llmResponse.text();
  }
);
