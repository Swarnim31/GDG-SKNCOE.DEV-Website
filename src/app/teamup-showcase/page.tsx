
"use client";

import * as React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/project-card";
import { TeamUpAlertCard } from "@/components/teamup-alert-card";
import { ProjectSubmissionForm } from "@/components/project-submission-form";
import { TeamUpRequestForm } from "@/components/teamup-request-form";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project, TeamUpAlert } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, Users } from "lucide-react";

export default function TeamUpShowcasePage() {
  const [isAllQueriesOpen, setIsAllQueriesOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fetch TeamUp Alerts
  const alertsQuery = query(collection(firestore, "teamQueries"), orderBy("timestamp", "desc"));
  const [alertsSnapshot, alertsLoading, alertsError] = useCollection(alertsQuery);
  const alerts: TeamUpAlert[] = alertsSnapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() } as TeamUpAlert)) || [];

  // Fetch Projects
  const projectsQuery = query(collection(firestore, "projects"), orderBy("timestamp", "desc"));
  const [projectsSnapshot, projectsLoading, projectsError] = useCollection(projectsQuery);
  const projects: Project[] = projectsSnapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project)) || [];

  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
        </div>
        <div className="space-y-16">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">TeamUp Showcase</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find collaborators, share your work, and build the future together.
        </p>
      </div>

      {/* 1. Incoming Team-Up Requests */}
      <div className="p-1 rounded-2xl animated-gradient-border shadow-lg mb-12">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Looking for Teammates?
            </CardTitle>
            <CardDescription>
              Connect with peers who are looking for collaborators on their next big idea.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertsLoading && (
                <>
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </>
              )}
              {alertsError && (
                <div className="text-destructive-foreground bg-destructive/80 p-4 rounded-md flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <p>Could not load team-up requests. Please try again later.</p>
                </div>
              )}
              {!alertsLoading && alerts.length === 0 && (
                <p className="text-muted-foreground text-center py-4">
                  No active team-up requests at the moment. Be the first to post one!
                </p>
              )}
              {alerts.slice(0, 3).map(alert => (
                <TeamUpAlertCard key={alert.id} alert={alert} />
              ))}
            </div>
            {alerts.length > 3 && (
              <div className="mt-6 text-center">
                <Dialog open={isAllQueriesOpen} onOpenChange={setIsAllQueriesOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">View All Queries</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>All Team-Up Queries</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto p-1 pr-4">
                      {alerts.map(alert => (
                        <TeamUpAlertCard key={alert.id} alert={alert} isExpanded />
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </CardContent>
        </Card>
      </div>


      <Separator className="my-16" />

      {/* 3. Student Projects Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Explore Projects by Students</h2>
        </div>
        <div>
          {projectsLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-96 w-full" />
            </div>
          )}
          {projectsError && (
            <div className="text-destructive-foreground bg-destructive/80 p-4 rounded-md flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              <p>Could not load projects. Please try again later.</p>
            </div>
          )}
          {!projectsLoading && projects.length === 0 && (
            <p className="text-muted-foreground text-center py-8">
              No projects have been submitted yet. Be the first to showcase your work!
            </p>
          )}
          {projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Separator className="my-16" />

      {/* 4. & 5. Submission Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <ProjectSubmissionForm />
        <TeamUpRequestForm />
      </div>
    </div>
  );
}
