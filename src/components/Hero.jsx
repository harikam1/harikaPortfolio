import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarOffset = 120; // adjust if needed (100–140)

    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      <div className="text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-muted-foreground backdrop-blur">
          ✨ Available for opportunities
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold">
          Hi, I’m{" "}
          {/* <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Yellakanti Harika
          </span> */}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(120,180,255,0.8)]">
  Yellakanti Harika
</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-foreground/80">
          Open for Full Stack <span className="text-neon-cyan">Java</span> Roles
        </p>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground">
          Crafting clean APIs with Java & Spring Boot
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan px-6 py-3 font-medium text-primary-foreground shadow-[0_0_30px_rgba(180,140,255,0.4)] transition hover:scale-105"
          >
            View Projects →
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-xl border border-white/10 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/5"
          >
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex items-center justify-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/harikam1"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full glass hover:scale-110 hover:shadow-[0_0_15px_rgba(180,140,255,0.5)] transition"
          >
            <FaGithub className="h-5 w-5 text-foreground" />
          </a>

          {/* Email */}
          <a
            href="mailto:harikayellakanti82@gmail.com"
            className="p-3 rounded-full glass hover:scale-110 hover:shadow-[0_0_15px_rgba(180,140,255,0.5)] transition"
          >
            <MdEmail className="h-5 w-5 text-foreground" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/harikayellakanti"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full glass hover:scale-110 hover:shadow-[0_0_15px_rgba(180,140,255,0.5)] transition"
          >
            <FaLinkedin className="h-5 w-5 text-foreground" />
          </a>

        </div>

      </div>
    </section>
  );
}