"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { generateProjectIdea, type ProjectIdea } from "@/ai/flows/generate-project-idea-flow";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check, ExternalLink, Lightbulb, AlertCircle, ArrowLeft, BotMessageSquare } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const IdeaDisplaySkeleton = () => (
    <div className="w-full max-w-4xl mx-auto space-y-8">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-5/6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
            <Skeleton className="h-64 w-full rounded-xl" />
            <Skeleton className="h-64 w-full rounded-xl" />
        </div>
        <Skeleton className="h-96 w-full rounded-xl" />
    </div>
)

const ErrorDisplay = ({ error }: { error: string }) => (
    <div className="w-full max-w-3xl mx-auto">
         <Alert variant="destructive" className="border-red-500/50 text-center">
            <AlertCircle className="h-6 w-6 mx-auto mb-2" />
            <AlertTitle className="text-xl">Error Generating Idea</AlertTitle>
            <AlertDescription>
                <p>Sorry, something went wrong while generating your project idea. Please try again later.</p>
                <p className="mt-2 text-xs opacity-70">Details: {error}</p>
            </AlertDescription>
        </Alert>
    </div>
)

export default function ProjectIdeaPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    
    const [idea, setIdea] = React.useState<ProjectIdea | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!category) {
            router.replace("/");
            return;
        }

        const getIdea = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const generatedIdea = await generateProjectIdea(category);
                setIdea(generatedIdea);
            } catch (err: any) {
                console.error("Error generating project idea:", err);
                setError(err.message || "An unknown error occurred.");
            } finally {
                setIsLoading(false);
            }
        };

        getIdea();
    }, [category, router]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
             <Button onClick={() => router.push('/')} className="mb-8 btn-gemini rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Button>
            {isLoading && <IdeaDisplaySkeleton />}
            {error && <ErrorDisplay error={error} />}
            {idea && (
                <div className="w-full max-w-4xl mx-auto animate-fade-in-up space-y-12">
                    <div className="text-center">
                        <Badge variant="secondary" className="text-sm mb-2 capitalize">{category}</Badge>
                        <h1 className="text-4xl font-bold tracking-tight">{idea.title}</h1>
                        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">{idea.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="p-1 rounded-2xl animated-gradient-border shadow-lg h-full">
                            <Card className="rounded-xl h-full">
                                <CardHeader>
                                    <CardTitle>Tech Stack & Resources</CardTitle>
                                    <CardDescription>Recommended tools to get started.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {idea.techStack.map(tech => (
                                        <div key={tech.name} className="flex items-center justify-between gap-2 text-sm p-3 rounded-md bg-background/80 border">
                                            <span className="font-semibold">{tech.name}</span>
                                            <Button asChild variant="ghost" size="sm" className="h-7 gap-1.5 text-primary">
                                                <Link href={tech.link} target="_blank" rel="noopener noreferrer">
                                                    Docs
                                                    <ExternalLink className="h-3.5 w-3.5" />
                                                </Link>
                                            </Button>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                        <div className="p-1 rounded-2xl animated-gradient-border shadow-lg h-full">
                            <Card className="rounded-xl h-full">
                                <CardHeader>
                                    <CardTitle>Key Features</CardTitle>
                                    <CardDescription>Core functionalities to implement.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {idea.features.map(feature => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="p-1 rounded-2xl animated-gradient-border shadow-lg">
                        <Card className="rounded-xl">
                            <CardHeader>
                                <CardTitle>Project Roadmap</CardTitle>
                                <CardDescription>Your step-by-step guide from zero to deployed.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {idea.roadmap.map(step => (
                                    <div key={step.step} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-center h-10 w-10 rounded-full btn-gemini text-primary-foreground font-bold text-lg flex-shrink-0">
                                                {step.step}
                                            </div>
                                            {idea.roadmap.length > step.step && <div className="w-0.5 flex-grow bg-border my-2"></div>}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center">
                         <Button asChild className="btn-gemini rounded-full">
                            <Link href="https://ai.google/" target="_blank" rel="noopener noreferrer">
                                <BotMessageSquare className="mr-2 h-5 w-5" />
                                Learn More on Google AI
                            </Link>
                        </Button>
                    </div>

                </div>
            )}
        </div>
    );
}
