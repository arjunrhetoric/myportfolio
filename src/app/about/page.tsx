import Image from "next/image";
import InteractiveAvatar from "../../components/ui/InteractiveAvatar";
import { BlurredStagger } from "../../components/ui/blurred-stagger-text";
import { aboutParagraphs } from "../../data/portfolio";

export const dynamic = 'force-dynamic';

export default async function About() {
    return (
        <div className="about-page">
            <div className="hero-section">
                <div className="hero-name-curve who-am-i-curve">
                    <svg width="280" height="150" viewBox="0 0 280 150" className="curve-svg">
                        <path id="curve-about" d="M 60,140 A 80,80 0 0,1 220,140" fill="transparent" />
                        <text fill="var(--text-primary)" className="instrument-serif" fontSize="46" textAnchor="middle" letterSpacing="-0.07em">
                            <textPath href="#curve-about" startOffset="50%">
                                Who am i?
                            </textPath>
                        </text>
                    </svg>
                </div>

                <div className="hero-avatar about-avatar">
                    <InteractiveAvatar priority={true} />
                </div>

                <h1 className="about-title"><BlurredStagger text="about me" /></h1>

                <div className="about-content" style={{ width: "100%", maxWidth: "600px", marginInline: "auto", textAlign: "left" }}>
                    {aboutParagraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
