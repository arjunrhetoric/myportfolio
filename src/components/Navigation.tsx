"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { profile } from "../data/portfolio";

interface Star {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

export default function Navigation() {
    const pathname = usePathname();
    const [stars, setStars] = useState<Star[]>([]);
    const resumeUrl = profile.resumeUrl;
    const hideOnImmersiveArt =
        pathname.startsWith("/art/music/") ||
        pathname.startsWith("/art/gallery/") ||
        pathname.startsWith("/art/book/");

    const triggerStars = useCallback(() => {
        const newStars: Star[] = Array.from({ length: 35 }).map(() => ({
            id: Math.random(),
            left: Math.random() * 100,
            size: Math.random() * 1.5 + 0.5,
            duration: Math.random() * 2 + 1.5,
            delay: Math.random() * 0.5,
            color: Math.random() > 0.5 ? "var(--text-primary)" : "var(--capsule-bg)",
        }));

        setStars((prev) => [...prev, ...newStars]);

        setTimeout(() => {
            setStars((prev) => prev.filter(star => !newStars.find(s => s.id === star.id)));
        }, 4500);
    }, []);

    if (hideOnImmersiveArt) {
        return null;
    }

    return (
        <>
            <div className="raining-stars-container">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="falling-star"
                        style={{
                            left: `${star.left}%`,
                            fontSize: `${star.size}rem`,
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`,
                            color: star.color,
                        }}
                    >
                        ✦
                    </div>
                ))}
            </div>

            <header className="top-nav">
                <nav>
                    <a href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>home</a>
                    <a href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>about</a>
                    <div className="nav-logo" onClick={triggerStars} style={{ cursor: "pointer" }}>
                        <Image src="/avatar.png" alt="Arjun Singh" width={28} height={28} style={{ objectFit: 'cover', borderRadius: '50%' }} />
                    </div>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={`nav-link`}>resume</a>
                    <a href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>contact</a>
                </nav>
            </header>
        </>
    );
}
