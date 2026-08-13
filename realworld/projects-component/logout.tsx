"use client";

import {authClient} from "@/lib/auth-client";
import {useRouter} from "next/navigation";

export function LogoutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/"); // redirect after logout
                },
            },
        });
    };

    return < button onClick={handleSignOut}> Sign out </button>;
}