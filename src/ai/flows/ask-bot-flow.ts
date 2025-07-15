
'use server';

/**
 * @fileOverview A simple AI chatbot flow for the GDG SknCoe website.
 *
 * - askBot - A function that takes a user's query and returns a text response.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { firestore } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

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
        You are a helpful AI assistant.

        User's question: "${prompt}"
      `,
      model: 'googleai/gemini-1.5-flash',
      config: {
        temperature: 0.7,
      },
    });

    const botReply = llmResponse.text;

    try {
      await addDoc(collection(firestore, 'chatHistory'), {
        userInput: prompt,
        botReply: botReply,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error saving chat history:", error);
    }

    return botReply;
  }
);
