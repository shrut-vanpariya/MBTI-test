"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"


export default function Component() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const { toast } = useToast()

    const handleRegister = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/v1/register`, {
                method: "POST",
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password
                })
            })
            const data = await res.json();
            console.log(data);
            if(data.status === "success") {
                toast({
                    description: "Register Successful!",
                })
                router.push("/login")
            }
            else {
                toast({
                    variant: "destructive",
                    description: data.error,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl">Create an account</CardTitle>
                    <CardDescription>Enter your details to get started.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" value={username} placeholder="John123" onChange={(e) => (setUsername(e.target.value))} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={email} type="email" placeholder="m@example.com" onChange={(e) => (setEmail(e.target.value))} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" value={password} type="password" onChange={(e) => (setPassword(e.target.value))} required />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-5">
                    <Button type="submit" className="w-full" onClick={handleRegister}>
                        Register
                    </Button>
                    <p>Already have an account click <Link className="font-bold underline" href={'/login'}>here</Link> </p>
                </CardFooter>
            </Card>
        </div>
    )
}