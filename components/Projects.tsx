"use client";
import { useState } from "react";

const ACADEMIC = [
  {
    title: "5-Stage MIPS Pipeline Simulator",
    course: "CS472 — Computer Architecture",
    desc: "Simulated a full 5-stage MIPS pipeline (IF, ID, EX, MEM, WB) in Java with support for data hazard detection, forwarding, branch penalties, and NOP handling. Includes stall logic and register file simulation.",
    tags: ["Java", "Computer Architecture", "MIPS", "Pipeline"],
    icon: "⚙️",
  },
  {
    title: "Cache Simulator",
    course: "CS472 — Computer Architecture",
    desc: "Built an interactive cache simulator in Java supporting configurable cache sizes, associativity, and replacement policies. Features a menu-driven interface with formatted output for performance analysis.",
    tags: ["Java", "Cache Memory", "Systems Programming"],
    icon: "🗄️",
  },
];

const PERSONAL = [
  {
    title: "Real Time Translate",
    desc: "Built a real time chat app that automatically transaltes incoming messages the moment they arrive, no button pressed. Unlike other messaging platforms where translation is always manual, this app detects language(currently: Vietnamese and English) and translates instantly. Features include AI powered chat, voice messages with live-speech-to-text transcription, and photo translation that overlays translated text directly onto images at the original text positions.",
    tags: ["Next.js", "TypeScript", "React", "Claude AI"],
    icon: "🌐",
    live: "https://real-time-translate-six.vercel.app/",
    github: "https://github.com/sontnguyen97-droid/real-time-translate",
    highlight: true,
  },
];

export default function Projects() {
  const [tab, setTab] = useState<"personal" | "academic">("personal");

  return (
    <section id="projects" className="card fade-in fade-in-3" style={{ padding: "1.5rem 2rem" }}>
      <h2 className="section-title">Projects</h2>

      {/* Tab switcher */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
        {(["personal", "academic"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
            fontSize: "0.82rem", fontWeight: 600,
            background: tab === t ? "var(--accent)" : "var(--accent-light)",
            color: tab === t ? "white" : "var(--accent)",
            transition: "all 0.2s",
          }}>
            {t === "personal" ? "🚀 Personal" : "🎓 Academic"}
          </button>
        ))}
      </div>

      {/* Personal Projects */}
      {tab === "personal" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {PERSONAL.map((p, i) => (
            <div key={i} style={{
              border: p.highlight ? "2px solid var(--accent)" : "1px solid var(--border)",
              borderRadius: 10, padding: "1.25rem",
              background: p.highlight ? "var(--accent-light)" : "var(--surface)",
              position: "relative",
            }}>
              {p.highlight && (
                <span style={{
                  position: "absolute", top: -10, left: 16,
                  background: "var(--accent)", color: "white",
                  fontSize: "0.7rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: 10,
                }}>
                  ⭐ Featured
                </span>
              )}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", color: "var(--text-primary)" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.4rem", lineHeight: 1.7 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", margin: "0.6rem 0" }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontSize: "0.75rem", background: "white", color: "var(--text-secondary)", padding: "0.2rem 0.6rem", borderRadius: 6, fontWeight: 500, border: "1px solid var(--border)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.5rem" }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                        padding: "0.35rem 0.9rem", borderRadius: 16,
                        background: "var(--accent)", color: "white",
                        fontSize: "0.8rem", fontWeight: 600, textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                      >
                        🔗 Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                        padding: "0.35rem 0.9rem", borderRadius: 16,
                        background: "white", color: "var(--text-secondary)",
                        fontSize: "0.8rem", fontWeight: 600, textDecoration: "none",
                        border: "1px solid var(--border)",
                        transition: "opacity 0.2s",
                      }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                      >
                        💻 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Academic Projects */}
      {tab === "academic" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {ACADEMIC.map((p, i) => (
            <div key={i} style={{ border: "1px solid var(--border)", borderRadius: 10, padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 500, marginTop: "0.15rem" }}>{p.course}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.4rem", lineHeight: 1.7 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.6rem" }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontSize: "0.75rem", background: "#f3f4f6", color: "var(--text-secondary)", padding: "0.2rem 0.6rem", borderRadius: 6, fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}