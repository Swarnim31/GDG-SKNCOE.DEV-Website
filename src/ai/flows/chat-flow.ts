'use server';

/**
 * @fileOverview A conversational AI chat flow.
 * - chat - A function that takes a user's query and conversation history, and returns a text response.
 * - ChatMessage - The type for a single message in the conversation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

const ChatInputSchema = z.object({
  history: z.array(ChatMessageSchema),
  message: z.string(),
});

const ChatOutputSchema = z.string();

export async function chat(
  history: ChatMessage[],
  message: string
): Promise<string> {
  return chatFlow({history, message});
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async ({history, message}) => {
    const llmResponse = await ai.generate({
      prompt: {
        messages: [
          ...history,
          {
            role: 'user',
            content: message,
          },
        ],
      },
      model: 'googleai/gemini-pro',
      config: {
        temperature: 0.7,
      },
    });

    return llmResponse.text;
  }
);
