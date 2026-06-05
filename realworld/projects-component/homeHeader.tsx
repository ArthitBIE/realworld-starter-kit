import React from 'react';
import Link from "next/link";

function HomeHeader() {
    return (
        <nav className="main-header">
            <Link href="/" className=" pr-4 ">conduit</Link>
            <Link href="/" className=" pr-4 ">home</Link>
            <Link href="/editor" className=" pr-4 ">article</Link>
            <Link href="/settings" className=" pr-4 ">setting</Link>
            <Link href="/profile" className=" pr-4 ">profile</Link>
        </nav>
    );
}

export default HomeHeader;