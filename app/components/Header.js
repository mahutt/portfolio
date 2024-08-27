"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import Dropdown from "./Dropdown";
import { LanguageContext } from "../context/LanguageContext";

export default function Header() {
    const { language, setLanguage } = useContext(LanguageContext);
    const pathname = usePathname();

    const socialLinks = [
        {
            href: "https://github.com/mahutt",
            icon: faGithub,
        },
        {
            href: "https://www.linkedin.com/in/mahutt/",
            icon: faLinkedin,
        },
    ];

    const bio = {
        english:
            "I'm an engineering undergraduate at Concordia University. I'm passionate about software and building on the web.",
        french: "Je suis un étudiant en génie à l'Université Concordia. Le développement logiciel et la conception d'applications web me passionnent.",
    };

    const navItems = [
        {
            href: "/projects",
            label: { english: "Projects", french: "Projets" },
        },
        {
            href: "/experience",
            label: {
                english: "Experience",
                french: "Expérience",
            },
        },
    ];

    return (
        <header>
            <div className="flex flex-col mb-5">
                <div className="mb-3">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-semibold tracking-tight">
                            Thomas Mahut
                        </p>
                        <Dropdown
                            language={language}
                            setLanguage={setLanguage}
                        />
                    </div>
                    <div className="mt-2 flex flex-row gap-2 text-zinc-500 dark:text-gray-500">
                        <p>@mahutt</p>
                        {socialLinks.map((link) => (
                            <a key={link.href} href={link.href} target="_blank">
                                <FontAwesomeIcon
                                    icon={link.icon}
                                    size="lg"
                                    className="hover:text-zinc-900 dark:hover:text-gray-100 transition-colors hover:scale-110 transition-transform duration-200"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <p>{bio[language]}</p>
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
                                        : "text-slate-700 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-slate-200"
                                } cursor-pointer transition-colors duration-200`}
                            >
                                {item.label[language]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
