"use client";
const EXPERIENCES = [
  {
    role: "Technical Specialist",
    company: "Turtle Screen - SmartPhoneBeast",
    period: "Sep 2023 - Sep 2025",
    desc: [
            "Primarily repair broken phones, tablets and maintain strong repair quality, consistency.",
            "Support front-of-house sales, intake, quoting and customer experience.",
            "Collaborate with store teams to support daily operations.",
            "Accurately document work orders, repairs, and parts usage in POS.",
    ],
    tags: ["Troubleshooting", "Android", "iOS"],
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="card fade-in fade-in-2" style={{ padding: "1.5rem 2rem" }}>
      <h2 className="section-title">Experience</h2>
      {EXPERIENCES.map((exp, i) => (
        <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div style={{
            width: 44, height: 44, borderRadius: 8,
            background: "var(--accent-light)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.2rem", flexShrink: 0,
          }}>💼</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{exp.role}</h3>
              {exp.current && (
                <span style={{ fontSize: "0.7rem", background: "var(--accent-light)", color: "var(--accent)", padding: "0.1rem 0.5rem", borderRadius: 10, fontWeight: 600 }}>   
                </span>
              )}
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 500 }}>{exp.company}</p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{exp.period}</p>
            <ul style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem", lineHeight: 1.6, paddingLeft: "1rem" }}>
    {exp.desc.map((line, i) => (
    <li key={i} style={{ marginBottom: "0.25rem" }}>{line}</li>
  ))}
</ul>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              {exp.tags.map(tag => (
                <span key={tag} style={{ fontSize: "0.75rem", background: "#f3f4f6", color: "var(--text-secondary)", padding: "0.2rem 0.6rem", borderRadius: 6, fontWeight: 500 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}