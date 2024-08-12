import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function AnimatedAnchor({ href, target, children }) {
    return (
        <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            className="group inline-block text-sm text-blue-600 hover:underline"
        >
            {children}
            <div className="ml-1 inline-block transition-transform duration-200 ease-in-out group-hover:-translate-y-0.5">
                <ArrowUpRightIcon className="w-3 h-3" />
            </div>
        </a>
    );
}
