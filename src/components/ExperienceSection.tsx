"use client";

import { useState, useEffect } from "react";

interface Experience {
    _id: string;
    company: string;
    role: string;
    date: string;
    location?: string;
    description: string[];
    logo?: any;
    link?: string;
}

function ExperienceItem({ company, role, date, location, description, logo, link, isOpen, onClick }: any) {
    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "contain" as "contain",
        transition: "transform 0.3s ease"
    };

    return (
        <div className="experience-item">
            <div className={"experience-avatar"} style={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {logo ? (
                    link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" style={{ width: "100%", height: "100%", display: "block" }}>
                            <img src={typeof logo === "string" ? logo : ""} alt={`${company} logo`} style={imageStyle} />
                        </a>
                    ) : (
                        <img src={typeof logo === "string" ? logo : ""} alt={`${company} logo`} style={imageStyle} />
                    )
                ) : null}
            </div>
            <div className="experience-content">
                <div className="experience-header">
                    <div className="experience-info">
                        <h3 className="company-name">{company}</h3>
                        <p className="role-name">{role}</p>
                    </div>
                    <div className="experience-date">
                        <div>{date}</div>
                        {location && <div className="experience-location">{location}</div>}
                    </div>
                </div>
                <div className={`experience-details ${isOpen ? "open" : ""}`}>
                    <div className="experience-summary" onClick={onClick}>
                        <span className="summary-icon">►</span> my work
                    </div>
                    <div className="experience-dropdown">
                        <div className="experience-dropdown-inner">
                            <ul style={{ paddingLeft: "20px", margin: 0 }}>
                                {Array.isArray(description) ? description.map((bullet: string, i: number) => (
                                    <li key={i} style={{ marginBottom: "6px" }}>{bullet}</li>
                                )) : <p>{description}</p>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ExperienceSection({
    experiences: initialExperiences = [],
}: {
    experiences?: Experience[];
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [experiences, setExperiences] = useState<Experience[]>(initialExperiences);

    useEffect(() => {
        setExperiences(initialExperiences);
    }, [initialExperiences]);

    if (experiences.length === 0) return null;

    return (
        <section className="experience-section">
            <h2 className="section-title">my experience</h2>

            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={exp._id}
                        {...exp}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
}
