"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
        { href: "/socials", label: "Socials" },
    ];

    return (
        <header>
            <div className="flex flex-col mb-5">
                <div className="mb-3">
                    <p className="text-2xl font-semibold">Thomas Mahut</p>
                    <p className="opacity-50">@mahutt</p>
                </div>
                <p>
                    I&apos;m an engineering undergraduate at Concordia
                    University.
                </p>
            </div>
            <nav>
                <ul className="flex space-x-4 py-3">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`${
                                    pathname === item.href
                                        ? "underline underline-offset-2"
                                        : "text-neutral-400"
                                } cursor-pointer transition-colors duration-200`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
