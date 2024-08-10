"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import Experience from "./components/Experience";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
    const [currentRoute, setCurrentRoute] = useState("/projects");

    const renderContent = () => {
        switch (currentRoute) {
            case "/projects":
                return <Projects />;
            case "/experience":
                return <Experience />;
            case "/socials":
                return <p>social</p>;
            default:
                return <Projects />;
        }
    };

    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="max-w-xl px-4 mt-8 mx-auto mb-3">
                    <Navigation
                        currentRoute={currentRoute}
                        setCurrentRoute={setCurrentRoute}
                    />
                    {renderContent()}
                </main>
            </body>
        </html>
    );
}
