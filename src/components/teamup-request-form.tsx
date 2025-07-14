
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

const teamUpSchema = z.object({
  name: z.string().min(2, "Name is required."),
  query: z.string().min(10, "Please describe your idea or what you're looking for (min. 10 characters)."),
  skills: z.string().min(1, "Please list at least one skill you're looking for."),
  contact: z.string().email("Please enter a valid email address.").optional().or(z.literal('')),
});

export function TeamUpRequestForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof teamUpSchema>>({
    resolver: zodResolver(teamUpSchema),
    defaultValues: {
      name: "",
      query: "",
      skills: "",
      contact: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof teamUpSchema>) => {
    setIsSubmitting(true);
    try {
      const skillsArray = values.skills.split(',').map(skill => skill.trim());
      await addDoc(collection(firestore, "teamupAlerts"), {
        ...values,
        skills: skillsArray,
        timestamp: serverTimestamp(),
      });
      toast({
        title: "Query Posted!",
        description: "Your team-up request is now live.",
      });
      form.reset({
        name: "",
        query: "",
        skills: "",
        contact: "",
      });
    } catch (error) {
      console.error("Error posting query:", error);
      toast({
        title: "Post Failed",
        description: "Could not post your query. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg border-t-4 border-yellow-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            Looking for a Team?
        </CardTitle>
        <CardDescription>Post a query to find collaborators for your next project idea.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl><Input placeholder="e.g., Alex Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField name="query" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Short Query</FormLabel>
                <FormControl><Textarea placeholder="Describe your project idea or the help you need..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField name="skills" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Skills Needed</FormLabel>
                <FormControl><Input placeholder="e.g., React, UI/UX Design, Firebase" {...field} /></FormControl>
                <FormDescription>Separate skills with commas.</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="contact" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Email (Optional)</FormLabel>
                <FormControl><Input placeholder="Your email for interested members to reach out" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting... </>
              ) : (
                <> Post Query <Send className="ml-2 h-4 w-4" /> </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
