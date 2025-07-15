import { ChatInterface } from "@/components/chat-interface";

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Chat with Gemini</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ask me anything! I can help you with code, ideas, and more.
        </p>
      </div>
      <ChatInterface />
    </div>
  );
}
