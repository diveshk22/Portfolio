import React, { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Initializing...");

  const messages = [
    "Initializing...",
    "Loading projects...",
    "Setting up experience...",
    "Preparing portfolio...",
    "Almost ready...",
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      setProgress(current);
      setText(
        messages[Math.floor((current / 100) * messages.length)] ||
          "Almost ready...",
      );
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 300);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      {/* Name */}
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#fff",
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          Divesh Kumar
        </h1>
        <p style={{ color: "#818cf8", fontSize: "1rem", margin: "8px 0 0" }}>
          Full Stack Developer
        </p>
      </div>

      {/* Circle Progress */}
      <div style={{ position: "relative", width: 128, height: 128 }}>
        <svg width="128" height="128" style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx="64"
            cy="64"
            r="54"
            fill="none"
            stroke="#1e293b"
            strokeWidth="8"
          />
          <circle
            cx="64"
            cy="64"
            r="54"
            fill="none"
            stroke="#6366f1"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.1s ease" }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#fff",
          }}
        >
          {progress}%
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ width: "260px" }}>
        <div
          style={{
            background: "#1e293b",
            borderRadius: "999px",
            height: "6px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #6366f1, #818cf8)",
              width: `${progress}%`,
              transition: "width 0.1s ease",
            }}
          />
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "0.85rem",
            marginTop: "12px",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
