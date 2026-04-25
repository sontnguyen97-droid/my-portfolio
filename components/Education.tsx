"use client";
export default function Education() {
  return (
    <section id="education" className="card fade-in fade-in-4" style={{ padding: "1.5rem 2rem" }}>
      <h2 className="section-title">Education</h2>
      <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        <div style={{
          width: 48, height: 48, borderRadius: 8,
          background: "linear-gradient(135deg, #cc0000, #990000)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.4rem", flexShrink: 0,
        }}>
        <img src="/bu-logo.jpg" alt="Boston University" style={{ width: 50, height: 50, objectFit: "contain" }} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
            Boston University
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--accent)", fontWeight: 500, marginTop: "0.15rem" }}>
            Bachelor of Science in Computer Science
          </p>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
            2025 – Expected May 2027 · Boston, MA
          </p>
          <div style={{ marginTop: "0.75rem" }}>
            <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
              Relevant Coursework:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {[
                "Computer Architecture",
                "Data Structures & Algorithms",
                "Operating Systems",
                "Software Engineering",
                "Database Systems",
                "Discrete Mathematics",
                "Informative Structure - OOP",
              ].map((course) => (
                <span key={course} style={{
                  fontSize: "0.75rem", background: "var(--bg)",
                  color: "var(--text-secondary)", padding: "0.25rem 0.6rem",
                  borderRadius: 6, border: "1px solid var(--border)", fontWeight: 500,
                }}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}