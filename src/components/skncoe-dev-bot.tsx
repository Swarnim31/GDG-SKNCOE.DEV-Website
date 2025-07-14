"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

const BotAvatar = () => (
  <Avatar className="h-8 w-8">
    <AvatarFallback className="bg-gradient-to-br from-yellow-400 via-red-500 to-blue-500 text-white">
      <Sparkles className="h-5 w-5" />
    </AvatarFallback>
  </Avatar>
);

const TypingIndicator = () => (
  <div className="flex items-center gap-2">
    <BotAvatar />
    <div className="flex items-center space-x-1 p-3 bg-muted rounded-lg">
      <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-typing-bubble-1"></span>
      <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-typing-bubble-2"></span>
      <span className="h-2 w-2 bg-muted-foreground/50 rounded-full animate-typing-bubble-3"></span>
    </div>
  </div>
);

export function SkncoeDevBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I’m SknCoe-Dev Bot. Ask me anything about events, domains, or Google tools!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: "This is a placeholder response. Integrate Gemini for real answers!",
        sender: "bot",
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full btn-gemini shadow-2xl transition-transform hover:scale-110 z-[100]"
            aria-label="Open SknCoe-Dev Bot"
          >
            <Sparkles className="h-8 w-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-lg lg:max-w-xl p-0 flex flex-col h-[70vh] max-h-[700px] bg-background/80 backdrop-blur-sm">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="flex items-center gap-3">
              <BotAvatar />
              Ask SknCoe-Dev Bot
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-grow p-4">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-end gap-2 animate-message-in",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.sender === "bot" && <BotAvatar />}
                  <div
                    className={cn(
                      "max-w-sm rounded-2xl px-4 py-2.5",
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none"
                    )}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && <TypingIndicator />}
            </div>
          </ScrollArea>
          <DialogFooter className="p-4 border-t bg-background/80">
            <div className="flex w-full items-center space-x-2">
              <Input
                id="message"
                placeholder="Type your message..."
                className="flex-1 bg-transparent"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
              />
              <Button type="submit" size="icon" onClick={handleSendMessage} disabled={isTyping || !input.trim()} className="btn-gemini">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
