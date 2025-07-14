
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
  isExpanded?: boolean; // Controls initial open state of collapsible
};

export function TeamUpAlertCard({ alert, isExpanded = false }: TeamUpAlertCardProps) {
  const [isOpen, setIsOpen] = React.useState(isExpanded);
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
    setIsOpen(false);
  }
  
  return (
    <Card className="hover:shadow-md transition-shadow bg-background/50 border">
      <CardContent className="p-0">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-start gap-4 p-4">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>{alert.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <p className="font-semibold">{alert.name}</p>
              <p className="text-muted-foreground text-sm mt-1">{alert.query}</p>
            </div>
            <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                    <span className="sr-only">Toggle Details</span>
                </Button>
            </CollapsibleTrigger>
          </div>
        
          <CollapsibleContent className="px-4 pb-4">
            <div className="pl-[56px] space-y-4">
                <div className="flex flex-wrap gap-2 mt-3">
                  {alert.skills.map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id={`interested-${alert.id}`} />
                  <label htmlFor={`interested-${alert.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I'm Interested
                  </label>
                </div>
                <div className="space-y-2 pt-2">
                  <Textarea 
                    placeholder={`Reply to ${alert.name}...`} 
                    className="bg-muted" 
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  />
                  <Button onClick={handleReply} size="sm" className="rounded-full">
                      Send Reply <Send className="ml-2 h-4 w-4" />
                  </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
