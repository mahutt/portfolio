"use client";
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [inFrench, setInFrench] = useState(false);

    return (
        <LanguageContext.Provider value={{ inFrench, setInFrench }}>
            {children}
        </LanguageContext.Provider>
    );
}
