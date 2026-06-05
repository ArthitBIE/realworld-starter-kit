import React from 'react';
import Link from "next/link";

const MainHeader = () => {
    return (
        <nav className="main-header">
            <Link href="/" className=" pr-4 ">home</Link>
            <Link href="/sign-in" className=" pr-4 ">Sign in</Link>
            <Link href="/sign-up" className=" pr-4 ">Sign up</Link>
        </nav>
    );
};

export default MainHeader;