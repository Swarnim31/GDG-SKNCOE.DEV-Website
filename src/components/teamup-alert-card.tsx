
"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Mail } from "lucide-react";
import type { TeamUpAlert } from "@/lib/types";
import { cn } from "@/lib/utils";

type TeamUpAlertCardProps = {
  alert: TeamUpAlert;
  isExpanded?: boolean; // Controls initial open state of collapsible
};

export function TeamUpAlertCard({ alert, isExpanded = false }: TeamUpAlertCardProps) {
  const [isOpen, setIsOpen] = React.useState(isExpanded);
  
  return (
    <Card className="hover:shadow-md transition-shadow bg-background/50 border">
      <CardContent className="p-0">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <div className="flex items-start gap-4 p-4 cursor-pointer">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>{alert.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-semibold">{alert.name}</p>
                <p className="text-muted-foreground text-sm mt-1">{alert.query}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                  <span className="sr-only">Toggle Details</span>
              </Button>
            </div>
          </CollapsibleTrigger>
        
          <CollapsibleContent className="px-4 pb-4">
            <div className="pl-[56px] space-y-4">
                <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground/80">Skills Needed</h4>
                    <div className="flex flex-wrap gap-2">
                    {alert.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                    </div>
                </div>
                {alert.email && (
                    <div>
                        <h4 className="text-sm font-semibold mb-2 text-foreground/80">Contact</h4>
                        <a href={`mailto:${alert.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                            <Mail className="h-4 w-4" />
                            <span>{alert.email}</span>
                        </a>
                    </div>
                )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
