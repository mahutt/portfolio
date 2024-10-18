"use client";

import React from "react";
import AnimatedAnchor from "./AnimatedAnchor";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import GlowCard from "../components/GlowCard";

export default function Projects() {
    const { language } = useContext(LanguageContext);
    const projects = [
        {
            id: 1,
            title: "DuoMove",
            description: {
                english:
                    "An AI-powered motion-capture fitness game, built in 40 hours and 2nd place winner of the 2024 Hack The Hill hackathon general challenge.",
                french: "Un jeu de fitness de capture de mouvement alimenté par l'IA, construit en 40 heures et 2e place gagnante du défi général du hackathon Hack The Hill 2024.",
            },
            technologies: [
                "Flask",
                "Raspberry Pi",
                "WebSockets",
                "GStreamer",
                "Hailo",
            ],
            links: [
                {
                    label: { english: "Source", french: "Source" },
                    href: "https://github.com/CarciDev/DuoMoves",
                },
                {
                    label: { english: "Devpost", french: "Devpost" },
                    href: "https://devpost.com/software/duo-move",
                },
            ],
        },
        {
            id: 2,
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
            id: 3,
            title: "Concordia Directory",
            description: {
                english: "A Concordia University faculty search engine.",
                french: "Un moteur de recherche de la faculté de l'Université Concordia.",
            },
            technologies: ["Golang", "Echo", "Digital Ocean"],
            links: [
                {
                    label: { english: "Project", french: "Projet" },
                    href: "https://conudir.com",
                },
                {
                    label: { english: "Source", french: "Source" },
                    href: "https://github.com/mahutt/ConcordiaDirectory",
                },
            ],
        },
        {
            id: 4,
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
            id: 5,
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
                <GlowCard key={project.id}>
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        {project.description[language]}
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
                                {link.label[language]}
                            </AnimatedAnchor>
                        ))}
                    </div>
                </GlowCard>
            ))}
        </div>
    );
}
