import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "1.5rem 1rem 4rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer style={{ textAlign: "center", padding: "2rem", fontSize: "0.8rem", color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
        © 2025 Son Nguyen · Built with Next.js
      </footer>
    </>
  );
}

