import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Languages",
    skills: [{ name: "Java" }, { name: "JavaScript" }],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: [{ name: "React" }, { name: "HTML / CSS" }],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [{ name: "Spring Boot" }, { name: "REST APIs" }],
  },
  {
    icon: Database,
    title: "Database",
    skills: [{ name: "MySQL" }, { name: "PostgreSQL" }],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "Postman" },
      { name: "AWS S3" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 overflow-hidden">

      {/* 🔥 Background Glow (same as About) */}
      <div
        className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_20%_20%,rgba(120,100,255,0.15),transparent_40%),
             radial-gradient(circle_at_80%_70%,rgba(0,200,255,0.1),transparent_40%)]"
      />

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <SectionHeader
          eyebrow="Skills"
          title="My technical toolkit"
          desc="A blend of backend strength and modern frontend craft."
        />

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 
                bg-white/5 backdrop-blur-xl 
                p-6 transition-all 
                hover:-translate-y-2 
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Glow Blob */}
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full 
                bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 
                blur-2xl opacity-20 group-hover:opacity-40 transition"
              />

              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl 
                bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 
                shadow-[0_0_20px_rgba(120,100,255,0.3)] 
                group-hover:scale-110 transition"
              >
                <cat.icon className="h-5 w-5 text-neon-cyan" />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-semibold text-lg text-foreground">
                {cat.title}
              </h3>

              {/* Skills List */}
              <div className="mt-5 space-y-2">
                {cat.skills.map((s, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-neon-cyan">•</span>
                    {s.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}