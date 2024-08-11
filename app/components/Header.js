"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
    ];

    return (
        <header>
            <div className="flex flex-col mb-5">
                <div className="mb-3">
                    <p className="text-2xl font-semibold">Thomas Mahut</p>
                    <div className="mt-2 flex flex-row gap-2 opacity-50">
                        <p>@mahutt</p>
                        <a href="https://github.com/mahutt">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="https://www.linkedin.com/in/mahutt/">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </div>
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
