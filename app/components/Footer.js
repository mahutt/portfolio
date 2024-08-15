"use client";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Header() {
    const { language } = useContext(LanguageContext);

    const message = {
        english: ["Made with", "in Montreal"],
        french: ["Fait avec", "à Montréal"],
    };

    return (
        <footer className="my-5 opacity-75 text-center">
            {message[language][0]}
            <HeartIcon className="h-5 w-5 mx-1 inline-block text-red-500" />
            {message[language][1]}
        </footer>
    );
}
