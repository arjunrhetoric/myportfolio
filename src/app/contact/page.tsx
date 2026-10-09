import Image from "next/image";
import InteractiveAvatar from "../../components/ui/InteractiveAvatar";
import { BlurredStagger } from "../../components/ui/blurred-stagger-text";
import { profile } from "../../data/portfolio";

export const dynamic = 'force-dynamic';

export default async function Contact() {
    const settings = profile;
    return (
        <div className="contact-page">
            <div className="hero-section">
                <div className="contact-name-curve">
                    <svg width="280" height="150" viewBox="0 0 280 150" className="curve-svg">
                        <path id="curve-contact" d="M 50,140 A 90,90 0 0,1 230,140" fill="transparent" />
                        <text fill="var(--text-primary)" className="instrument-serif" fontSize="44" textAnchor="middle" letterSpacing="-0.07em">
                            <textPath href="#curve-contact" startOffset="50%">
                                Wanna Contact?
                            </textPath>
                        </text>
                    </svg>
                </div>

                <div className="hero-avatar contact-avatar">
                    <InteractiveAvatar priority={true} />
                </div>

                <h1 className="contact-title"><BlurredStagger text="touch me" /></h1>

                <div className="contact-description">
                    <p>
                        if you wanna get in touch, feel free to connect with me over your preferred ways and i will get back to you :)
                    </p>
                </div>

                <div className="social-links">
                    <a href={settings?.linkedin || "#"} target={settings?.linkedin ? "_blank" : undefined} rel={settings?.linkedin ? "noopener noreferrer" : undefined} className="social-icon" aria-label="LinkedIn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href={settings?.email ? `mailto:${settings.email}` : "#"} className="social-icon" aria-label="Email">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="M2 4l10 8 10-8"></path>
                        </svg>
                    </a>
                    <a href={settings?.github || "#"} target={settings?.github ? "_blank" : undefined} rel={settings?.github ? "noopener noreferrer" : undefined} className="social-icon" aria-label="GitHub">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href={settings?.twitter || "#"} target={settings?.twitter ? "_blank" : undefined} rel={settings?.twitter ? "noopener noreferrer" : undefined} className="social-icon" aria-label="X (Twitter)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                    <a href={settings?.leetcode || "#"} target={settings?.leetcode ? "_blank" : undefined} rel={settings?.leetcode ? "noopener noreferrer" : undefined} className="social-icon" aria-label="LeetCode">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8l-8 8" />
                            <path d="M8 8l8 8" opacity="0" />
                            <path d="M13.5 4.5 15 3l7 7-2.5 2.5" />
                            <path d="M9 6 3 12l6 6 2-2" />
                            <path d="M12.5 9.5 15 7l3 3-3 3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
