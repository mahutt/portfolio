"use client";

import React from "react";
import AnimatedAnchor from "./AnimatedAnchor";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {
    const { inFrench } = useContext(LanguageContext);
    const projects = [
        {
            id: 1,
            title: "Nin's Things",
            description: {
                english:
                    "An e-commerce store from which a local business sells hand-made goods - built from the ground up and self-hosted on a VPS.",
                french: "Une boutique en ligne à partir de laquelle une entreprise locale vend des produits artisanaux - construite de zéro et auto-hébergée sur un VPS.",
            },
            technologies: [
                "Laravel",
                "Boostrap",
                "Stripe API",
                "Digital Ocean",
            ],
            links: [
                {
                    label: { english: "Project", french: "Projet" },
                    href: "https://ninsthings.co",
                },
            ],
        },
        {
            id: 2,
            title: "ThumbRead",
            description: {
                english:
                    "A web application that scrapes and renders a target web page so that it is mobile friendly and accessibility-oriented.",
                french: "Une application web qui extrait et rend une page web cible de manière à ce qu'elle soit adaptée aux mobiles et axée sur l'accessibilité.",
            },
            technologies: ["Golang", "Echo", "Digital Ocean"],
            links: [
                {
                    label: { english: "Project", french: "Projet" },
                    href: "https://thumbread.com",
                },
                {
                    label: { english: "Source", french: "Source" },
                    href: "https://github.com/mahutt/thumbread",
                },
            ],
        },
        {
            id: 3,
            title: "Cue",
            description: {
                english:
                    "A web application for creating and studying flash cards.",
                french: "Une application web pour créer et étudier des cartes mémoire.",
            },
            technologies: ["Express", "Bootstrap", "SQLite"],
            links: [
                {
                    label: { english: "Project", french: "Projet" },
                    href: "https://cue.is",
                },
            ],
        },
        {
            id: 4,
            title: "Rides",
            description: {
                english:
                    "Given a starting location and destination in the city of Montreal, Rides delivers the fastest, safest, and least traffic-heavy bike routes to take.",
                french: "Étant donné un lieu de départ et une destination dans la ville de Montréal, Rides propose les itinéraires à vélo les plus rapides, les plus sûrs et les moins encombrés de circulation à prendre.",
            },
            technologies: [
                "Express",
                "Google Maps API",
                "Destinations API",
                "SQLite",
            ],
            links: [
                {
                    label: { english: "Source", french: "Source" },
                    href: "https://github.com/mahutt/rides",
                },
            ],
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
                        {inFrench
                            ? project.description.french
                            : project.description.english}
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
                        {Object.entries(project.links).map(([index, link]) => (
                            <AnimatedAnchor
                                key={index}
                                href={link.href}
                                target="_blank"
                            >
                                {link.label[inFrench ? "french" : "english"]}
                            </AnimatedAnchor>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
