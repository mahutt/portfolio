"use client";

import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Nin's Things",
            description:
                "An e-commerce store from which a local business sells hand-made goods - built from the ground up and self-hosted on a VPS.",
            technologies: [
                "Laravel",
                "Boostrap",
                "Stripe API",
                "Digital Ocean",
            ],
            links: {
                "View Project": "https://ninsthings.co",
            },
        },
        {
            id: 2,
            title: "ThumbRead",
            description:
                "A web application that scrapes and renders a target web page so that it is mobile friendly and accessibility-oriented.",
            technologies: ["Golang", "Echo", "Digital Ocean"],
            links: {
                "View Project": "https://thumbread.com",
                "View Source": "https://github.com/mahutt/thumbread",
            },
        },
        {
            id: 3,
            title: "Cue",
            description:
                "A web application for creating and studying flash cards.",
            technologies: ["Express", "Bootstrap", "SQLite"],
            links: {
                "View Project": "https://cue.is",
            },
        },
        {
            id: 4,
            title: "Rides",
            description:
                "Given a starting location and destination in the city of Montreal, Rides delivers the fastest, safest, and least traffic-heavy bike routes to take.",
            technologies: [
                "Express",
                "Google Maps API",
                "Destinations API",
                "SQLite",
            ],
            links: {
                "View Source": "https://github.com/mahutt/rides",
            },
        },
    ];

    return (
        <div className="space-y-6 my-2">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="border border-gray-800 rounded-lg p-4 hover:shadow-glow transition-shadow duration-200 linear"
                >
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        {project.description}
                    </p>
                    <div className="mt-3">
                        <div className="flex flex-wrap gap-2 mt-1">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-zinc-200 text-black text-xs rounded-lg px-3 py-1"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3">
                        {Object.entries(project.links).map(([key, link]) => (
                            <a
                                key={key}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-sm text-blue-600 hover:underline"
                            >
                                {key}
                                <ArrowUpRightIcon className="h-3 w-3 inline-block ml-1" />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
