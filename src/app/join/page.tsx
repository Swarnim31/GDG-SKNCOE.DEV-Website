
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
import { Separator } from "@/components/ui/separator";
import { Lock, Mail, User, ArrowRight } from "lucide-react";
import { GoogleIcon } from "@/components/icons/google";

export default function JoinPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] bg-background p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 max-w-6xl w-full">
        {/* Sign Up Card */}
        <div className="p-1 rounded-2xl animated-gradient-border shadow-lg">
          <Card className="rounded-xl h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join the Community</CardTitle>
              <CardDescription>
                Create an account to get started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="fullname" placeholder="Your Name" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="signup-email" type="email" placeholder="your.email@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                   <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="signup-password" type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>
                 <Button type="submit" className="w-full btn-google rounded-full">
                  Create Account <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                 <Button variant="outline" className="w-full rounded-full">
                  <GoogleIcon className="mr-2 h-5 w-5" />
                  Continue with Google
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Separator */}
        <div className="hidden lg:flex items-center justify-center relative">
          <Separator orientation="vertical" className="h-2/3" />
           <div className="absolute bg-background p-2 rounded-full border text-muted-foreground text-sm font-mono">OR</div>
        </div>

        {/* Login Card */}
        <div className="p-1 rounded-2xl animated-gradient-border shadow-lg">
          <Card className="rounded-xl h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your existing account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                 <div className="space-y-2">
                  <Label htmlFor="login-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="login-email" type="email" placeholder="your.email@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                   <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="login-password" type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>
                 <Button type="submit" className="w-full btn-google rounded-full">
                  Login <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                 <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                 <Button variant="outline" className="w-full rounded-full">
                  <GoogleIcon className="mr-2 h-5 w-5" />
                  Continue with Google
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
