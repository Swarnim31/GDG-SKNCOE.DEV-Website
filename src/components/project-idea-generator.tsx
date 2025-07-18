"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Lightbulb, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "Web" | "AI" | "Mobile" | "Cloud" | "Custom";

export function ProjectIdeaGenerator() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<Category | "">("");
  const [customCategory, setCustomCategory] = React.useState("");
  const router = useRouter();

  const handleGenerate = () => {
    let finalCategory = "";
    if (selectedCategory === "Custom") {
      finalCategory = customCategory.trim();
    } else {
      finalCategory = selectedCategory;
    }

    if (!finalCategory) return;
    
    router.push(`/project-idea?category=${encodeURIComponent(finalCategory)}`);
    setIsOpen(false);
    setSelectedCategory("");
    setCustomCategory("");
  };

  const isGenerateDisabled = 
    !selectedCategory || (selectedCategory === "Custom" && !customCategory.trim());

  return (
    <>
      <Button
        className={cn(
          "h-16 w-16 rounded-full shadow-2xl transition-transform hover:scale-110",
          "bg-gradient-to-br from-purple-500 to-indigo-600 text-white animate-float"
        )}
        style={{ animationDelay: '0.2s' }}
        aria-label="Generate Project Idea"
        onClick={() => setIsOpen(true)}
      >
        <Lightbulb className="h-8 w-8" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-background/80 backdrop-blur-2xl text-foreground rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="h-5 w-5 text-yellow-400" />
              AI Project Idea Generator
            </DialogTitle>
            <DialogDescription>
              Stuck for an idea? Select a category or enter your own, and let Gemini spark your next project.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <Select onValueChange={(value: Category) => setSelectedCategory(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a category..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Web">Web Development</SelectItem>
                    <SelectItem value="AI">Artificial Intelligence</SelectItem>
                    <SelectItem value="Mobile">Mobile Development</SelectItem>
                    <SelectItem value="Cloud">Cloud Computing</SelectItem>
                    <SelectItem value="Custom">Custom...</SelectItem>
                </SelectContent>
            </Select>

            {selectedCategory === "Custom" && (
                <Input 
                    placeholder="Enter your custom domain (e.g., 'Blockchain for Social Good')"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="animate-fade-in-up"
                />
            )}
          </div>
          
          <DialogFooter>
            <Button onClick={handleGenerate} disabled={isGenerateDisabled} className="w-full btn-gemini rounded-full">
                <Wand2 className="h-5 w-5 mr-2" />
                Generate Idea
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
