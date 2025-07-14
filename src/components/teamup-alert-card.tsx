
"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Send } from "lucide-react";
import type { TeamUpAlert } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type TeamUpAlertCardProps = {
  alert: TeamUpAlert;
  isExpanded?: boolean; // isExpanded is no longer used to conditionally render reply, but kept for compatibility
};

export function TeamUpAlertCard({ alert, isExpanded = false }: TeamUpAlertCardProps) {
  const [isReplyOpen, setIsReplyOpen] = React.useState(false);
  const [replyMessage, setReplyMessage] = React.useState("");
  const { toast } = useToast();

  const handleReply = () => {
    if (!replyMessage.trim()) {
        toast({
            title: "Empty Message",
            description: "Please write a message before sending.",
            variant: "destructive",
        })
        return;
    }
    toast({
        title: "Reply Sent!",
        description: "Your message has been sent to " + alert.name,
    })
    setReplyMessage("");
    setIsReplyOpen(false);
  }
  
  return (
    <Card className="hover:shadow-md transition-shadow bg-background/50 border">
      <CardContent className="p-4">
        <Collapsible open={isReplyOpen} onOpenChange={setIsReplyOpen}>
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage />
            <AvatarFallback>{alert.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{alert.name}</p>
                <p className="text-muted-foreground text-sm mt-1">{alert.query}</p>
              </div>
              <CollapsibleTrigger asChild>
                   <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                      <ChevronDown className={cn("h-4 w-4 transition-transform", isReplyOpen && "rotate-180")} />
                      <span className="sr-only">Toggle Reply</span>
                  </Button>
              </CollapsibleTrigger>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {alert.skills.map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
             <div className="flex items-center space-x-2 mt-4">
              <Checkbox id={`interested-${alert.id}`} />
              <label htmlFor={`interested-${alert.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I'm Interested
              </label>
            </div>
          </div>
        </div>
        <CollapsibleContent className="pl-[56px] pt-4">
           <div className="space-y-2">
              <Textarea 
                placeholder={`Reply to ${alert.name}...`} 
                className="bg-muted" 
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
              />
              <Button onClick={handleReply} size="sm">
                  Send Reply <Send className="ml-2 h-4 w-4" />
              </Button>
          </div>
        </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
