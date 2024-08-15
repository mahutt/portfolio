import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

import "./globals.css";

// Loading fontawesome styles before rendering icons to avoid flickering
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "mahutt",
    description: "Thomas Mahut's Online Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <LanguageProvider>
                    <main className="flex-grow max-w-xl px-4 pt-8 mx-auto pb-3">
                        <Header />
                        {children}
                    </main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
