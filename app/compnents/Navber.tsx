"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">

                <Link href="/" className="logo">
                    J SHOP
                </Link>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                 <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link href="/login">login</Link>
                    </li>

                    <li>
                        <Link href="/register">register</Link>
                    </li>

                    <li>
                        <Link href="/forgot-password">forgot-password</Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}
