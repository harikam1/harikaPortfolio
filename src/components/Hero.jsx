import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiSpringboot, SiReact, SiPostgresql, SiDocker } from "react-icons/si";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbarOffset = 100;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 animate-blob rounded-full bg-blue-600/20 mix-blend-multiply blur-3xl filter" />
      <div className="animation-delay-2000 absolute top-1/3 -right-20 h-72 w-72 animate-blob rounded-full bg-purple-600/20 mix-blend-multiply blur-3xl filter" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-300/80 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </span>
          Actively Seeking New Opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-extrabold tracking-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Yellakanti Harika
          </span>
        </motion.h1>

        {/* Professional Tagline - Updated to reflect "Open for role" */}
        <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed">
          Open for <span className="text-white font-medium italic underline decoration-blue-500/50">Java Full Stack Developer</span> roles. 
          I specialize in building scalable backend systems with Spring Boot and crafting modern React interfaces.
        </motion.p>

        {/* Dynamic Tech Stack Pills */}
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: <SiSpringboot />, label: "Spring Boot", color: "text-green-400" },
            { icon: <SiReact />, label: "React.js", color: "text-cyan-400" },
            { icon: <SiPostgresql />, label: "SQL", color: "text-blue-300" },
            { icon: <SiDocker />, label: "Docker", color: "text-blue-500" },
          ].map((tech, i) => (
            <div key={i} className={`flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm font-medium ${tech.color} backdrop-blur-sm transition hover:bg-white/10`}>
              {tech.icon} <span>{tech.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Primary Actions */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity group-hover:opacity-10" />
            View My Work
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold backdrop-blur-md transition hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Connectivity */}
        <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center gap-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/harikam1", label: "GitHub" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/harikayellakanti", label: "LinkedIn" },
            { icon: <MdEmail />, link: "mailto:harikayellakanti82@gmail.com", label: "Email" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="group flex flex-col items-center gap-2 text-white/40 transition-all hover:text-white"
            >
              <span className="text-2xl transition-transform group-hover:-translate-y-1">{social.icon}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">{social.label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}