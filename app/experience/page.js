"use client";

import React from "react";

export default function Experience() {
    const jobs = [
        {
            id: 1,
            company: "Fundica",
            time: "Fall 2023 & Summer 2024",
            position: "Full Stack Developer",
            summary:
                "Developed and delivered new features, led PHP & Bootstrap migrations, and developed internal tools (UI test automation & web crawling) using Python & Java.",
            technologies: ["PHP", "SQL", "Python", "Java"],
        },
        {
            id: 2,
            company: "Tennis Montreal",
            time: "2019 - 2022",
            position: "Tennis Instructor",
            summary:
                "Organized leagues, designed and provided tennis lessons to all age groups. Developed a variety of methods to motivate and provide feedback to different personalities",
            technologies: [
                "Communication",
                "Motivation",
                "Patience",
                "Conflict Resolution",
            ],
        },
        {
            id: 3,
            company: "Monkland Tennis Club",
            time: "2018 - 2021",
            position: "Tennis Instructor",
            summary:
                "Taught tennis techniques & strategy in clinic and camp environments. Taught the importance of fitness, nutrition, mindset, and overall health.",
            technologies: [
                "Observation",
                "Adaptability",
                "Organizational Skills",
                "Leadership",
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
                        <h3 className="text-sm text-gray-300">{job.time}</h3>
                    </div>
                    <h3 className="text-base text-gray-300 font-normal">
                        {job.position}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{job.summary}</p>
                    <div className="mt-4 mb-1">
                        <div className="flex flex-wrap gap-2 mt-1">
                            {job.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-zinc-200 text-black text-xs rounded-lg px-3 py-1"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
