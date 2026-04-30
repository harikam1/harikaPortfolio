import { motion } from "framer-motion";
import { Code2, Server, Cloud, Lightbulb, Layers, GitBranch } from "lucide-react";
import SectionHeader from "./SectionHeader";

const strengths = [
  { icon: Server, title: "Java & Spring Boot", desc: "Robust backend services and microservices" },
  { icon: Code2, title: "React Frontend", desc: "Modern, responsive UIs with hooks & state" },
  { icon: Layers, title: "REST APIs", desc: "Designing clean, well-documented endpoints" },
  { icon: Cloud, title: "Cloud Basics", desc: "AWS S3, deployment & basic DevOps" },
  { icon: Lightbulb, title: "Problem Solving", desc: "Algorithms, DSA & clean architecture" },
  { icon: GitBranch, title: "Clean Code", desc: "Readable, testable, maintainable code" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 scroll-mt-28 overflow-hidden">
      
      {/* 🔥 Background Glow (like second image) */}
      <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_30%_20%,rgba(120,100,255,0.15),transparent_40%),
             radial-gradient(circle_at_80%_60%,rgba(0,200,255,0.1),transparent_40%)]" 
      />

      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <SectionHeader 
          eyebrow="About" 
          title="A developer who loves to build" 
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          {/* Description */}
          <p className="text-lg leading-relaxed text-foreground/80">
            I'm a passionate full stack developer specializing in{" "}
            <span className="text-neon-cyan">backend systems</span> and modern web applications.
            I enjoy turning complex problems into elegant, scalable solutions — from{" "}
            <span className="text-neon-purple">Spring Boot APIs</span> to polished React interfaces.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            I care deeply about clean code, performance, and developer experience. Always learning, always shipping.
          </p>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/10 
                  bg-white/5 backdrop-blur-xl 
                  p-6 transition-all 
                  hover:-translate-y-2 
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl 
                  bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 
                  shadow-[0_0_20px_rgba(120,100,255,0.3)] 
                  group-hover:scale-110 transition"
                >
                  <s.icon className="h-5 w-5 text-neon-cyan" />
                </div>

                {/* Title */}
                <p className="mt-4 font-medium text-foreground">
                  {s.title}
                </p>

                {/* Description */}
                <p className="mt-1 text-sm text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}