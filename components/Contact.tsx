"use client";
const CONTACTS = [
  { icon: "✉️", label: "Email", value: "son.tnguyen97@gmail.com", href: "mailto:son.tnguyen97@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/sonthanh515189", href: "https://linkedin.com/in/sonthanh515189" },
  { icon: "💻", label: "GitHub", value: "github.com/sontnguyen97-droid", href: "https://github.com/sontnguyen97-droid" },
];

export default function Contact() {
  return (
    <section id="contact" className="card fade-in fade-in-5" style={{ padding: "1.5rem 2rem" }}>
      <h2 className="section-title">Contact</h2>
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1rem", lineHeight: 1.7 }}>
        I&apos;m currently looking for internship opportunities or any single contributor position. Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {CONTACTS.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              padding: "0.75rem 1rem", borderRadius: 10,
              border: "1px solid var(--border)", background: "var(--bg)",
              textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "var(--accent-light)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--bg)"; }}
          >
            <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
            <div>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</p>
              <p style={{ fontSize: "0.875rem", color: "var(--accent)", fontWeight: 500 }}>{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}