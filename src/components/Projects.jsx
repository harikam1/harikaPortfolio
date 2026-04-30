import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Apartment Management System",
    desc: "Full-stack platform to manage tenants, payments, and announcements.",
    long: "Built a full-stack web application to manage apartment operations. Implemented JWT-based authentication with role-based access control (admin and tenant). Developed REST APIs using Node.js and MongoDB, and created a clean, responsive React frontend.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "REST APIs"],
  },
  {
    title: "AI Chatbot using Rasa",
    desc: "Contextual AI assistant using Rasa NLU and Core.",
    long: "Developed an intelligent chatbot using Rasa framework with intent classification and entity extraction.",
    tech: ["Python", "Rasa", "NLP"],
  },
  {
    title: "Ride Booking Backend System",
    desc: "High-performance ride booking system with Redis-based driver matching.",
    long: "Built scalable backend using Spring Boot with Redis for fast matching and wallet system.",
    tech: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "PursuitPro Resume Builder",
    desc: "Backend-driven resume builder with AWS S3 storage.",
    long: "Built backend with S3 integration and optimized payload handling.",
    tech: ["Java", "Spring Boot", "AWS S3"],
  },
  {
    title: "Therapist Platform UI",
    desc: "Frontend platform with modern UI and messaging features.",
    long: "Developed UI with smooth scrolling and card layouts.",
    tech: ["HTML", "CSS", "JavaScript","React"],
  },
];

const filters = ["All", "Java", "Spring Boot", "React", "MySQL", "AWS S3"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="relative px-4 py-24 overflow-hidden">
      
      {/* 🔥 Background Glow (same as About/Skills) */}
      <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_30%_20%,rgba(120,100,255,0.15),transparent_40%),
             radial-gradient(circle_at_80%_60%,rgba(0,200,255,0.1),transparent_40%)]"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work & experiments"
          desc="A few things I've designed, built, and shipped."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs transition ${
                filter === f
                  ? "bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-white"
                  : "border border-white/10 bg-white/5 backdrop-blur-md text-foreground/80 hover:bg-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setOpen(p)}
              className="group cursor-pointer relative rounded-2xl border border-white/10 
                bg-white/5 backdrop-blur-xl 
                p-6 transition-all 
                hover:-translate-y-2 
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Glow */}
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full 
                bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 
                blur-2xl opacity-20 group-hover:opacity-40 transition"
              />

              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{p.desc}</p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-md bg-white/10 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL (GLASS STYLE) */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setOpen(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-lg rounded-2xl border border-white/10 
              bg-white/5 backdrop-blur-xl p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 text-white/70 hover:text-white"
            >
              <X />
            </button>

            <h2 className="text-xl font-bold">{open.title}</h2>
            <p className="mt-3 text-sm text-foreground/80">{open.long}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {open.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md bg-white/10 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}