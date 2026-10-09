import Image from "next/image";
import InteractiveAvatar from "./ui/InteractiveAvatar";
import { BlurredStagger } from "./ui/blurred-stagger-text";
import MoreSection from "./MoreSection";
import { profile } from "../data/portfolio";

export default async function HeroSection() {
    const jobTitle = profile.jobTitle;

    return (
        <div className="hero-section">
            <div className="hero-name-curve">
                <svg width="280" height="150" viewBox="0 0 280 150" className="curve-svg">
                    <path id="curve" d="M 40,140 A 100,100 0 0,1 240,140" fill="transparent" />
                    <text fill="var(--text-primary)" className="instrument-serif" fontSize="44" textAnchor="middle" letterSpacing="-0.07em">
                        <textPath href="#curve" startOffset="50%">
                            Arjun Singh
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className="hero-avatar">
                <InteractiveAvatar priority={true} />
            </div>

            <div className="hero-subtitle">
                <BlurredStagger text={jobTitle} />
            </div>

            <MoreSection />

            <div className="hero-description" style={{ width: "100%", maxWidth: "600px", textAlign: "center", margin: "32px auto 0 auto" }}>
                <p style={{ textAlign: "center" }}>
                    {profile.heroDescription}
                </p>
            </div>
        </div>
    );
}
