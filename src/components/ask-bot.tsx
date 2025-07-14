"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Bot, User, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export function AskBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        const viewport = scrollAreaRef.current?.querySelector(
          "div[data-radix-scroll-area-viewport]"
        );
        if (viewport) {
          viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
        }
      }, 100);
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, sender: "user" }]);
      setInput("");
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            text: "This is a simulated response. The actual AI bot is not yet connected.",
            sender: "bot",
          },
        ]);
      }, 1500);
    }
  };

  return (
    <>
      <Button
        className={cn(
          "h-16 w-16 rounded-full shadow-2xl transition-transform hover:scale-110",
          "btn-gemini animate-float"
        )}
        aria-label="Ask GDG SknCoe.DEV Bot"
        onClick={() => setIsOpen(true)}
      >
        <Sparkles className="h-8 w-8" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[480px] p-0 border-0 bg-background/80 backdrop-blur-2xl text-foreground rounded-2xl shadow-2xl">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              Ask GDG SknCoe.DEV Bot
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col h-[60vh]">
            <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3 animate-message-in",
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    )}
                  >
                    {message.sender === "bot" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="btn-gemini text-primary-foreground">
                          <Sparkles className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-2 max-w-sm",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-foreground rounded-bl-none"
                      )}
                    >
                      <p>{message.text}</p>
                    </div>
                    {message.sender === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <User className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-start gap-3 justify-start animate-message-in">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="btn-gemini text-primary-foreground">
                        <Sparkles className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-2xl px-4 py-2 max-w-sm bg-muted text-foreground rounded-bl-none flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-foreground/50 animate-typing-bubble-1" />
                      <span className="h-2 w-2 rounded-full bg-foreground/50 animate-typing-bubble-2" />
                      <span className="h-2 w-2 rounded-full bg-foreground/50 animate-typing-bubble-3" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about events, resources, or anything..."
                  className="pr-12 h-11 rounded-full"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute top-1/2 right-1.5 -translate-y-1/2 h-8 w-8 rounded-full btn-gemini"
                  disabled={!input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
