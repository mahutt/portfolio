import { Inter } from "next/font/google";
import Header from "./components/Header";

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
            <body className={inter.className}>
                <main className="max-w-xl px-4 mt-8 mx-auto mb-3">
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    );
}
