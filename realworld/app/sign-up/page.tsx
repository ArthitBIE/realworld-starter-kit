"use client"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link";
import {authClient} from "@/lib/auth-client";
import {useState} from "react";


export default function SignUpField() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Card className="w-full max-w-sm m-auto">
            <CardHeader>
                <CardTitle>Register to your account</CardTitle>
                <CardDescription>
                    Enter your email below to register to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Username</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="gmail@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full"
                        onClick={async () => {
                            const {data, error} = await authClient.signUp.email({
                                name,
                                email,
                                password,
                            })
                            console.log("data", data)
                            console.log("error", JSON.stringify(error, null, 2));
                        }}>
                    Register
                </Button>
                <Link href="/sign-in" className="hover:underline underline-offset-4">Already have account? <span
                    className="font-bold">Login</span></Link>
            </CardFooter>
        </Card>
    )
}
