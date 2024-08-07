"use client";

import { useState } from "react";
import Projects from "./Projects";

export default function Home() {
    const [selectedNavItem, setSelectedNavItem] = useState("projects");

    const handleNavItemClick = (item) => {
        setSelectedNavItem(item);
    };

    const renderSectionContent = () => {
        switch (selectedNavItem) {
            case "projects":
                return <Projects />;
            case "experience":
                return <p>Todo: Experience Page</p>;
            case "socials":
                return <p>Todo: Socials Page</p>;
        }
    };

    return (
        <main className="max-w-xl px-4 mt-8 mx-auto">
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
                    <li
                        onClick={() => handleNavItemClick("projects")}
                        className={
                            selectedNavItem === "projects"
                                ? "underline underline-offset-2 cursor-pointer"
                                : "cursor-pointer text-neutral-400"
                        }
                    >
                        Projects
                    </li>
                    <li
                        onClick={() => handleNavItemClick("experience")}
                        className={
                            selectedNavItem === "experience"
                                ? "underline underline-offset-2 cursor-pointer"
                                : "cursor-pointer text-neutral-400"
                        }
                    >
                        Experience
                    </li>
                    <li
                        onClick={() => handleNavItemClick("socials")}
                        className={
                            selectedNavItem === "socials"
                                ? "underline underline-offset-2 cursor-pointer"
                                : "cursor-pointer text-neutral-400"
                        }
                    >
                        Socials
                    </li>
                </ul>
            </nav>
            <section className="my-3">{renderSectionContent()}</section>
        </main>
    );
}
