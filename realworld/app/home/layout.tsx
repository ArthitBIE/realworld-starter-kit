import Footer from "@/projects-component/footer";
import {session} from "@/auth-schema";
import {redirect} from "next/navigation";

export default function Layout({children}: { children: React.ReactNode }) {
    if (!session) {
        redirect("/login");
    }
    return (
        <>
            <main>{children}</main>
            < div className="mt-auto">
                <Footer/>
            </div>
        </>
    );
}
