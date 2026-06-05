"use client";

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
});

export const GoogleSignIn = async () => {
    try {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/home", // Where to send the user after successful login
        });
        return data;
    } catch (error) {
        console.error("Google Sign-In failed:", error);
    }
};
