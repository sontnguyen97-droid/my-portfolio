"use client";
const SKILLS = [
  {
    category: "Languages",
    icon: "💻",
    items: ["Java", "Python", "C", "C#", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend & Tools",
    icon: "⚙️",
    items: ["Node.js", "REST APIs", "Git", "GitHub", "VS Code"],
  },
  {
    category: "CS Fundamentals",
    icon: "📚",
    items: ["Data Structures", "Algorithms", "Computer Architecture", "OOP", "Software Engineering"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="card fade-in fade-in-3" style={{ padding: "1.5rem 2rem" }}>
      <h2 className="section-title">Skills</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {SKILLS.map((group) => (
          <div key={group.category} style={{
            background: "var(--bg)", borderRadius: 10, padding: "1rem",
            border: "1px solid var(--border)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "1rem" }}>{group.icon}</span>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", color: "var(--text-primary)" }}>
                {group.category}
              </h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {group.items.map((skill) => (
                <span key={skill} style={{
                  fontSize: "0.78rem", background: "white",
                  color: "var(--text-secondary)", padding: "0.25rem 0.6rem",
                  borderRadius: 6, border: "1px solid var(--border)", fontWeight: 500,
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}