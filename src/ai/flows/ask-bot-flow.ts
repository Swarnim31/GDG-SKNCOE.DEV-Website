
'use server';

/**
 * @fileOverview A simple AI chatbot flow.
 *
 * - askBot - A function that takes a user's query and returns a text response.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { firestore } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

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

    const botReply = await llmResponse.text();

    try {
      await addDoc(collection(firestore, 'chatHistory'), {
        userInput: prompt,
        botReply: botReply,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error saving chat history:", error);
      // We don't want to block the user's response if saving fails,
      // so we'll just log the error and continue.
    }

    return botReply;
  }
);
