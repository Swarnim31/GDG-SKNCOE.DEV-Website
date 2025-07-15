'use client';

import {useState, useRef, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Send, Sparkles, User, Loader2} from 'lucide-react';
import {chat, type ChatMessage} from '@/ai/flows/chat-flow';
import {cn} from '@/lib/utils';
import {Avatar, AvatarFallback} from './ui/avatar';
import {Card, CardContent} from './ui/card';

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage: ChatMessage = {role: 'user', content: input};
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      try {
        const botResponse = await chat(messages, input);
        const botMessage: ChatMessage = {role: 'model', content: botResponse};
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Error fetching bot response:', error);
        const errorMessage: ChatMessage = {
          role: 'model',
          content: 'Sorry, I encountered an error. Please try again.',
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-4">
        <div className="h-[60vh] overflow-y-auto pr-4 mb-4 space-y-6 scrollbar-thin">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start gap-3 animate-message-in',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'model' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="btn-gemini text-primary-foreground">
                    <Sparkles className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'rounded-2xl px-4 py-2 max-w-sm whitespace-pre-wrap',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-muted text-foreground rounded-bl-none'
                )}
              >
                <p>{message.content}</p>
              </div>
              {message.role === 'user' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="relative">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
          >
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="pr-20 h-12 rounded-full text-base"
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="absolute top-1/2 right-2 -translate-y-1/2 h-9 w-16 rounded-full btn-google"
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
