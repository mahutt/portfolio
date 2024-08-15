"use client";

import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export default function Experience() {
    const { language } = useContext(LanguageContext);
    const jobs = [
        {
            id: 1,
            company: "Fundica",
            time: {
                english: "Fall 2023 & Summer 2024",
                french: "Automne 2023 et été 2024",
            },
            position: {
                english: "Full Stack Developer",
                french: "Développeur Full Stack",
            },
            summary: {
                english:
                    "Developed and delivered new features, led PHP & Bootstrap version migrations, and developed internal tools (UI test automation & web crawling) using Python & Java.",
                french: "Développement et livraison de nouvelles fonctionnalités, migrations de version PHP et Bootstrap, et développement d'outils internes (automatisation des tests de UI et crawler web) écrits en Python et en Java.",
            },
            technologies: [
                { english: "PHP", french: "PHP" },
                { english: "SQL", french: "SQL" },
                { english: "Python", french: "Python" },
                { english: "Java", french: "Java" },
            ],
        },
        {
            id: 2,
            company: "Tennis Montreal",
            time: {
                english: "2019 - 2022",
                french: "2019 - 2022",
            },
            position: {
                english: "Tennis Instructor",
                french: "Instructeur de tennis",
            },
            summary: {
                english:
                    "Organized leagues, designed and provided tennis lessons to all age groups. Developed a variety of methods to motivate and provide feedback to different personalities.",
                french: "Animation de ligues, conception et organisation de cours de tennis pour tous les groupes d'âge. Développement d'une variété de méthodes pour motiver et fournir des retours à différentes personnalités.",
            },
            technologies: [
                { english: "Communication", french: "Communication" },
                { english: "Motivation", french: "Motivation" },
                { english: "Patience", french: "Patience" },
                {
                    english: "Conflict Resolution",
                    french: "Résolution de conflits",
                },
            ],
        },
        {
            id: 3,
            company: "Monkland Tennis Club",
            time: {
                english: "2018 - 2021",
                french: "2018 - 2021",
            },
            position: {
                english: "Tennis Instructor",
                french: "Instructeur de tennis",
            },
            summary: {
                english:
                    "Taught tennis techniques & strategy in clinic and camp environments. Taught the importance of fitness, nutrition, mindset, and overall health.",
                french: "Enseigner les techniques et la stratégie du tennis dans des cliniques et des camps. Enseigner l'importance de la forme physique, de la nutrition, de l'état d'esprit et de la santé en général.",
            },
            technologies: [
                { english: "Observation", french: "Observation" },
                { english: "Adaptability", french: "Adaptabilité" },
                {
                    english: "Organizational Skills",
                    french: "Compétences organisationnelles",
                },
                { english: "Leadership", french: "Leadership" },
            ],
        },
    ];

    return (
        <div className="space-y-6 my-2">
            {jobs.map((job) => (
                <div
                    key={job.id}
                    className="border border-gray-800 rounded-lg p-4 hover:shadow-glow transition-shadow duration-200 linear"
                >
                    <div className="flex justify-between items-center flex-wrap gap-x-4">
                        <h3 className="text-lg font-medium">{job.company}</h3>
                        <h3 className="text-sm text-gray-300">
                            {job.time[language]}
                        </h3>
                    </div>
                    <h3 className="text-base text-gray-300 font-normal">
                        {job.position[language]}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                        {job.summary[language]}
                    </p>
                    <div className="mt-4 mb-1">
                        <div className="flex flex-wrap gap-2 mt-1">
                            {job.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-zinc-200 text-black text-xs rounded-lg px-3 py-1"
                                >
                                    {tech[language]}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
