'use client'

import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
            <div className="logo">
                <p>Salim</p>
            </div>
            </Link>
            <div className="grow"></div>
            <div className="links">
                <p><Link href="/about">About</Link></p>
                <p><Link href="/now">Now</Link></p>
                <p><Link href="/diary">Diary</Link></p>
                <p><Link href="/readinglist">Reading List</Link></p>
            </div>
        </nav>
    )
}