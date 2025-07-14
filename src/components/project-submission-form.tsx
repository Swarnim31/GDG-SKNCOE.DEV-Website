
"use client";

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2, Github, Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

const contributorSchema = z.object({
  name: z.string().min(1, "Contributor name is required."),
  role: z.string().min(1, "Contributor role is required."),
});

const projectSchema = z.object({
  title: z.string().min(5, "Project title must be at least 5 characters."),
  description: z.string().min(20, "Description must be at least 20 characters."),
  tags: z.string().min(1, "Please add at least one tech tag."),
  link: z.string().url("Please enter a valid GitHub URL."),
  contributors: z.array(contributorSchema).min(1, "At least one contributor is required."),
  category: z.enum(["Web", "Mobile", "AI", "Cloud"]),
});

export function ProjectSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: "",
      link: "",
      contributors: [{ name: "", role: "" }],
      category: "Web",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "contributors",
  });

  const onSubmit = async (values: z.infer<typeof projectSchema>) => {
    setIsSubmitting(true);
    try {
      const tagsArray = values.tags.split(',').map(tag => tag.trim());
      await addDoc(collection(firestore, "teamupProjects"), {
        ...values,
        tags: tagsArray,
        timestamp: serverTimestamp(),
      });
      toast({
        title: "Project Submitted!",
        description: "Thank you for sharing your work with the community.",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting project:", error);
      toast({
        title: "Submission Failed",
        description: "Could not submit your project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg border-t-4 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Github className="h-6 w-6 text-green-600" />
            Submit Your Project
        </CardTitle>
        <CardDescription>Showcase your work and let others see what you've built.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField name="title" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl><Input placeholder="e.g., Community Connect Platform" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField name="description" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl><Textarea placeholder="A short, catchy description of your project." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField name="tags" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Tech Stack (comma-separated)</FormLabel>
                <FormControl><Input placeholder="e.g., Next.js, Firebase, Genkit" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField name="link" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub URL</FormLabel>
                <FormControl><Input placeholder="https://github.com/your/repository" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div>
              <FormLabel>Contributors</FormLabel>
              <div className="space-y-4 mt-2">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex gap-2 items-end">
                    <FormField control={form.control} name={`contributors.${index}.name`} render={({ field }) => (
                      <FormItem className="flex-grow">
                         <FormControl><Input placeholder="Contributor's Name" {...field} /></FormControl>
                         <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name={`contributors.${index}.role`} render={({ field }) => (
                       <FormItem className="flex-grow">
                         <FormControl><Input placeholder="Role (e.g., Frontend Dev)" {...field} /></FormControl>
                          <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="button" variant="destructive" size="icon" onClick={() => remove(index)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                ))}
              </div>
              <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ name: "", role: "" })}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Contributor
              </Button>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting... </>
              ) : (
                <> Submit Project <Send className="ml-2 h-4 w-4" /> </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
