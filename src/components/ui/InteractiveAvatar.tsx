"use client";

import { useState } from "react";
import Image from "next/image";

interface InteractiveAvatarProps {
    width?: number;
    height?: number;
    priority?: boolean;
}

export default function InteractiveAvatar({ width = 122, height = 122, priority = false }: InteractiveAvatarProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="avatar-wrapper interactive-avatar"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: 'relative', width, height, overflow: 'hidden', borderRadius: '50%' }}
        >
            <Image
                src="/avatar.png"
                alt="Arjun Singh Avatar"
                width={width}
                height={height}
                priority={priority}
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }}
            />

            <Image
                src="/blush.png"
                alt=""
                aria-hidden
                width={width}
                height={height}
                priority={priority}
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transition: "opacity 0.4s ease",
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
