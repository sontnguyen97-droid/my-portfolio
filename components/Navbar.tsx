"use client";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.3s ease",
      padding: "0 1rem",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 400 }}>
          Hey there, Thanks for stopping by!  
        </span>
        <div style={{ display: "flex", gap: "0.25rem" }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              style={{
                padding: "0.4rem 0.75rem",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: 500,
                color: active === item.href ? "var(--accent)" : "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.2s",
                background: active === item.href ? "var(--accent-light)" : "transparent",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-light)")}
              onMouseLeave={e => (e.currentTarget.style.background = active === item.href ? "var(--accent-light)" : "transparent")}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}