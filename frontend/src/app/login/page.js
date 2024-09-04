"use client"

import Link from "next/link"
import { useState } from "react"
import { useStore } from "@/lib/GlobalStore"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"


export default function Component() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { userData, setUserData } = useStore();

    const router = useRouter();

    const { toast } = useToast()

    const handleLogin = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/v1/login`, {
                method: "POST",
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            })
            const data = await res.json();
            if (data.status === "success") {
                toast({
                    description: "Login Successful!",
                })
                router.push("/")
            }
            else {
                toast({
                    variant: "destructive",
                    description: data.error,
                })
            }
            setUserData(data);
            localStorage.setItem("userData", JSON.stringify(data));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl">Sign in to your account</CardTitle>
                    <CardDescription>Enter your email and password to sign in to your account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" type="text" value={username} onChange={(e) => (setUsername(e.target.value))} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" value={password} type="password" onChange={(e) => (setPassword(e.target.value))} required />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-5">
                    <Button type="submit" className="w-full" onClick={handleLogin}>
                        Sign in
                    </Button>
                    <p>Don&#39;t have an account? click <Link className="font-bold underline" href={'/register'}>here</Link> </p>
                </CardFooter>
            </Card>
        </div>
    )
}