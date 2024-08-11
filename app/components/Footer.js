"use client";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Header() {
    return (
        <footer className="my-5 opacity-75 text-center">
            Made with
            <HeartIcon className="h-5 w-5 mx-1 inline-block text-red-500" />
            in Montreal
        </footer>
    );
}
