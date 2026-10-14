import React from 'react'
import {Button} from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {Globe, GitBranch} from 'lucide-react';
import {signIn} from 'next-auth/react';
// checkout the next-auth documentation for more information on how to use the signIn function
async function handleGoogleSignIn() {
    "use server";
    await signIn("google")

}
async function handleGitHubSignIn() {
    "use server";
    await signIn("github")
}

// "use client";

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md rounded-xl border bg-card shadow-lg">
        <CardHeader className="space-y-2 p-6">
            <CardTitle className="text-center text-2xl font-bold">Sign In</CardTitle>
            <CardDescription className="text-center text-sm text-muted-foreground">
                Choose Your Preferred Sign-in Method
            </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-3 px-6 pb-6">
            <form action={handleGoogleSignIn}>
                <Button className="w-full" type="submit" variant="outline">
                    <Globe className="mr-2 size-4" />
                    <span>Sign in with Chrome</span>
                </Button>
            </form>
            <form action={handleGitHubSignIn}>
                <Button className="w-full" type="submit" variant="outline">
                    <GitBranch className="mr-2 size-4" />
                    <span>Sign in with GitHub</span>
                </Button>
            </form>
        </CardContent>

        <CardFooter className="justify-center px-6 pb-6 pt-0">
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
                By signing in, you agree to our{' '}
                <a href="/terms" className="underline underline-offset-4">
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="underline underline-offset-4">
                    Privacy Policy
                </a>
            </p>
        </CardFooter>
    </Card>
  )
}

export default SignInFormClient