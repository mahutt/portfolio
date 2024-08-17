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

    const bio = {
        english: "I'm an engineering undergraduate at Concordia University.",
        french: "Je suis un étudiant en génie à l'Université Concordia.",
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
                        <p className="text-2xl font-semibold">Thomas Mahut</p>
                        <Dropdown
                            language={language}
                            setLanguage={setLanguage}
                        />
                    </div>
                    <div className="mt-2 flex flex-row gap-2 text-gray-500">
                        <p>@mahutt</p>
                        <a href="https://github.com/mahutt" target="_blank">
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="lg"
                                className="hover:text-gray-100 transition-colors hover:scale-110 transition-transform duration-200"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mahutt/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="lg"
                                className="hover:text-gray-100 transition-colors hover:scale-110 transition-transform duration-200"
                            />
                        </a>
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
                                        : "text-neutral-400 hover:text-slate-200"
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
