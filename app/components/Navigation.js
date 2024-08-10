import Link from "next/link";

export default function Navigation({ currentRoute, setCurrentRoute }) {
    const getNavItemClass = (route) => {
        return currentRoute === route
            ? "underline underline-offset-2 cursor-pointer"
            : "cursor-pointer text-neutral-400";
    };

    return (
        <header>
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
                        className={getNavItemClass("/projects")}
                        onClick={() => setCurrentRoute("/projects")}
                    >
                        Projects
                    </li>
                    <li
                        className={getNavItemClass("/experience")}
                        onClick={() => setCurrentRoute("/experience")}
                    >
                        Experience
                    </li>
                    <li
                        className={getNavItemClass("/socials")}
                        onClick={() => setCurrentRoute("/socials")}
                    >
                        Socials
                    </li>
                </ul>
            </nav>
        </header>
    );
}
