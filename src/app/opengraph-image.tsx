import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0c0c0c",
          color: "#f5f5f5",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 42, color: "#f16a4b", marginBottom: 16 }}>
          product @ innoverse
        </div>
        <div style={{ fontSize: 110, lineHeight: 1, letterSpacing: -4 }}>
          Arjun Singh
        </div>
        <div style={{ fontSize: 32, color: "#8a8a8a", marginTop: 24 }}>
          full-stack dev · RAG · SaaS — Mumbai, India
        </div>
      </div>
    ),
    { ...size }
  );
}
