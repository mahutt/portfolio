import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Dropdown = ({ language, setLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch(
            "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
        );
    }, []);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (language) => {
        if (language === "Français") {
            setLanguage("french");
        } else {
            setLanguage("english");
        }
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    className={`${
                        isOpen ? "bg-gray-900" : ""
                    } flex flex-row items-center inline-flex justify-center w-full rounded-2xl shadow-sm px-4 py-2 text-sm text-slate-200 focus:outline-none ${
                        isTouch ? "" : "hover:bg-gray-900"
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {language === "french" ? "Français" : "English"}
                    <div className="relative -mr-1 ml-2 h-4 w-4">
                        <ChevronUpIcon
                            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                                isOpen
                                    ? "transform rotate-0 opacity-100 scale-100"
                                    : "transform rotate-180 opacity-0 scale-50"
                            }`}
                        />
                        <ChevronDownIcon
                            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                                isOpen
                                    ? "transform rotate-180 opacity-0 scale-50"
                                    : "transform rotate-0 opacity-100 scale-100"
                            }`}
                        />
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-28 rounded-md border border-gray-900 bg-black ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {["English", "Français"].map((item, index) => (
                            <a
                                key={index}
                                className={`block px-4 py-3 text-sm text-slate-200 hover:bg-gray-900 cursor-pointer ${
                                    (language === "french" &&
                                        item === "Français") ||
                                    (language === "english" &&
                                        item === "English")
                                        ? "underline underline-offset-2"
                                        : ""
                                }`}
                                role="menuitem"
                                onClick={() => handleLanguageChange(item)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
