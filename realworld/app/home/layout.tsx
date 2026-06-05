import Footer from "@/projects-component/footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <main>{children}</main>
            < div className="mt-auto">
                <Footer/>
            </div>
        </>
    );
}
