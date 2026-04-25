"use client";

export default function Hero() {
  return (
    <section style={{ paddingTop: 56 }}>
      {/* Cover Photo */}
      <div style={{
        height: 280,
        backgroundImage: "url('/cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }} />

      {/* Profile Card */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1rem" }}>
        <div className="card" style={{ borderRadius: "var(--radius)", padding: "0 2rem 1.5rem", marginTop: -60 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            {/* Avatar */}
            <img
              src="/avatar.JPG"
              alt="Hello!"
              style={{
                width: 120, height: 120,
                borderRadius: "50%",
                border: "4px solid white",
                objectFit: "cover",
                boxShadow: "var(--shadow-md)",
                flexShrink: 0,
                marginTop: 0,
                position: "relative",
                zIndex: 10,
              }}
            />

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "0.75rem", paddingBottom: "0.25rem" }}>
              <a
                href="mailto:son.tnguyen97@gmail.com"
                style={{
                  padding: "0.5rem 1.25rem", borderRadius: 20,
                  background: "var(--accent)", color: "white",
                  fontSize: "0.85rem", fontWeight: 600, textDecoration: "none",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
              >
                Contact Me
              </a>
              <a
                href="https://github.com/sontnguyen97-droid"
                target="_blank" rel="noopener noreferrer"
                style={{
                  padding: "0.5rem 1.25rem", borderRadius: 20,
                  background: "transparent", color: "var(--accent)",
                  fontSize: "0.85rem", fontWeight: 600, textDecoration: "none",
                  border: "1.5px solid var(--accent)",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-light)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Name & Title */}
          <div style={{ marginTop: "1rem" }}>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.2 }}>
              Son T Nguyen
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginTop: "0.25rem", fontWeight: 400 }}>
              CS Student & Software Engineer
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>🎓 Boston University · Year 3</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>📍 Boston, MA</span>
              <span style={{ fontSize: "0.85rem", color: "var(--green)", fontWeight: 500 }}>🟢 Open to opportunities</span>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.75rem", flexWrap: "wrap" }}>
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/sonthanh515189", icon: "💼" },
                { label: "GitHub", href: "https://github.com/sontnguyen97-droid", icon: "💻" },
                { label: "Email", href: "mailto:son.tnguyen97@gmail.com", icon: "✉️" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "0.3rem",
                    fontSize: "0.82rem", color: "var(--accent)", textDecoration: "none",
                    fontWeight: 500, padding: "0.25rem 0.6rem",
                    borderRadius: 6, background: "var(--accent-light)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}