import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ParticlesBg from "./components/ParticlesBg";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import { About } from "./components/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader duration (2s)

    return () => clearTimeout(timer);
  }, []);

  // 👇 THIS IS THE KEY FIX
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1b2a] to-[#020617] text-white">
      
      <ParticlesBg />
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-muted-foreground">
        Yellakanti Harika © {new Date().getFullYear()}
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;