
"use client";

import Link from "next/link";
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
import { Lock, Mail, User, ArrowRight, Loader2 } from "lucide-react";
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { auth, firestore } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const signUpSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function JoinPage() {
    const [isMounted, setIsMounted] = React.useState(false);
    const [isSignUpSubmitting, setIsSignUpSubmitting] = React.useState(false);
    const [isLoginSubmitting, setIsLoginSubmitting] = React.useState(false);
    const { toast } = useToast();
    const router = useRouter();

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const signUpForm = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
    });

    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleSignUp = async (values: z.infer<typeof signUpSchema>) => {
        setIsSignUpSubmitting(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            await setDoc(doc(firestore, "users", user.uid), {
                name: values.fullName,
                email: values.email,
                uid: user.uid,
            });

            toast({
                title: "Account Created!",
                description: "Welcome to the community. Redirecting to your profile...",
            });
            signUpForm.reset();
            router.push('/profile');

        } catch (error: any) {
            console.error("Sign up error:", error);
            if (error.code === 'auth/email-already-in-use') {
                 toast({
                    title: "Sign-up Failed",
                    description: "An account with this email already exists.",
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Sign-up Failed",
                    description: error.message || "An unexpected error occurred. Please try again.",
                    variant: "destructive",
                });
            }
        } finally {
            setIsSignUpSubmitting(false);
        }
    };
    
    const handleLogin = async (values: z.infer<typeof loginSchema>) => {
        setIsLoginSubmitting(true);
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            toast({
                title: "Welcome Back!",
                description: "You've successfully logged in. Redirecting...",
            });
            loginForm.reset();
            router.push('/profile');
        } catch (error: any) {
            console.error("Login error:", error);
            toast({
                title: "Login Failed",
                description: "Invalid email or password. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoginSubmitting(false);
        }
    };
    
    if (!isMounted) {
        return null;
    }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center space-y-8">
      
      {/* Sign Up Card */}
      <div className="w-full max-w-md p-1 rounded-2xl animated-gradient-border shadow-lg">
        <Card className="w-full rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join the Community</CardTitle>
              <CardDescription>
                Create an account to get started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...signUpForm}>
                <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="space-y-6">
                  <FormField
                    control={signUpForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <FormControl>
                            <Input placeholder="Your Name" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signUpForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                         <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signUpForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <FormControl>
                            <Input type="password" placeholder="••••••••" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full btn-gemini rounded-full" disabled={isSignUpSubmitting}>
                    {isSignUpSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
        </Card>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md p-1 rounded-2xl animated-gradient-border shadow-lg">
        <Card className="w-full rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your existing account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <FormControl>
                            <Input type="password" placeholder="••••••••" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full btn-gemini rounded-full" disabled={isLoginSubmitting}>
                    {isLoginSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging In...
                      </>
                    ) : (
                      <>
                        Login <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
              <p className="text-center text-sm text-muted-foreground mt-6">
                New here?{' '}
                <Link href="#" className="font-semibold text-primary hover:underline" onClick={(e) => { e.preventDefault(); document.querySelector('input[name="fullName"]')?.focus(); }}>
                  Create an account
                </Link>
              </p>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
