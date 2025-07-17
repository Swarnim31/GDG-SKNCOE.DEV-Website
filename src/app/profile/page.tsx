
"use client";

import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, Edit, Mail, Save, User, LogOut, Loader2 } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const [user, authLoading, authError] = useAuthState(auth);
  const router = useRouter();
  const { toast } = useToast();

  const userDocRef = user ? doc(firestore, "users", user.uid) : null;
  const [userData, userLoading, userError] = useDocumentData(userDocRef);

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/join');
    }
  }, [user, authLoading, router]);
  
  useEffect(() => {
    if (userData?.name) {
      setEditedName(userData.name);
    }
  }, [userData]);
  
  const handleLogout = async () => {
    await signOut(auth);
    toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
    });
    router.push('/join');
  }

  const handleSaveChanges = async () => {
      if (!userDocRef || !editedName.trim()) {
          toast({
              title: "Invalid Name",
              description: "Name cannot be empty.",
              variant: "destructive",
          });
          return;
      };
      setIsSaving(true);
      try {
          await updateDoc(userDocRef, { name: editedName });
          toast({
              title: "Profile Updated",
              description: "Your name has been successfully updated.",
          });
          setIsEditing(false);
      } catch (error) {
          console.error("Error updating profile:", error);
          toast({
              title: "Update Failed",
              description: "Could not update your profile. Please try again.",
              variant: "destructive",
          });
      } finally {
          setIsSaving(false);
      }
  }

  if (authLoading || userLoading) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="p-1 rounded-2xl animated-gradient-border shadow-lg">
                    <Card className="overflow-hidden rounded-xl">
                        <div className="bg-muted p-8">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Skeleton className="h-24 w-24 rounded-full" />
                                <div className="space-y-2 text-center sm:text-left">
                                    <Skeleton className="h-8 w-48" />
                                    <Skeleton className="h-6 w-64" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="p-1 rounded-2xl animated-gradient-border shadow-lg">
                    <Card className="rounded-xl">
                        <CardHeader>
                            <Skeleton className="h-6 w-32" />
                            <Skeleton className="h-4 w-48" />
                        </CardHeader>
                        <CardContent className="space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                                 <div className="space-y-2">
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
  }

  if (!user) {
    return null;
  }

  const getInitials = (name: string | undefined) => {
    if (!name) return "U";
    const names = name.split(' ');
    if (names.length > 1) {
        return names[0][0] + names[names.length - 1][0];
    }
    return name.substring(0, 2);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Profile Header Card */}
        <div className="p-1 rounded-2xl animated-gradient-border shadow-lg">
            <Card className="overflow-hidden rounded-xl">
              <div className="capsule-gradient-purple p-8 text-primary-foreground">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Avatar className="h-24 w-24 border-4 border-background/50">
                    <AvatarImage src={user.photoURL ?? undefined} alt={userData?.name} />
                    <AvatarFallback className="text-3xl bg-background/20">
                        {getInitials(userData?.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold">{userData?.name || 'User'}</h1>
                    <p className="text-lg opacity-80">{userData?.email}</p>
                  </div>
                   <div className="sm:ml-auto">
                        <Button variant="ghost" className="text-primary-foreground/80 hover:bg-white/20 hover:text-white" onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>
              </div>
            </Card>
        </div>

        {/* Profile Details Card */}
        <div className="p-1 rounded-2xl animated-gradient-border shadow-lg">
            <Card className="rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1">
                    <CardTitle>Profile Details</CardTitle>
                    <CardDescription>Update your personal information.</CardDescription>
                </div>
                <Button variant="outline" size="icon" onClick={() => setIsEditing(!isEditing)} disabled={isSaving}>
                    {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                    <span className="sr-only">{isEditing ? "Save Profile" : "Edit Profile"}</span>
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input id="fullName" value={editedName} onChange={(e) => setEditedName(e.target.value)} className="pl-10" disabled={!isEditing || isSaving} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                         <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input id="email" type="email" defaultValue={userData?.email} className="pl-10" disabled />
                        </div>
                    </div>
                </div>
                 {isEditing && (
                    <div className="flex justify-end">
                        <Button className="btn-google rounded-full" onClick={handleSaveChanges} disabled={isSaving}>
                            {isSaving ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4"/>
                                    Save Changes
                                </>
                            )}
                        </Button>
                    </div>
                )}
              </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
