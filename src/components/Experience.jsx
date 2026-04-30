import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
// import { SectionHeader } from "./SectionHeader";
import SectionHeader from "./SectionHeader"; 

const items = [
  {
    icon: GraduationCap,
    type: "Education",
    title: "B.Tech in Computer Science",
    place: "Cvr College of Engineering",
    period: "2021 — 2025",
    cgpa: "8.55/10",
    desc: "Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Web Technologies, Software Engineering.",
    color: "from-neon-blue to-neon-purple",
  },
  {
    icon: GraduationCap,
    type: "Education",
    title: "Intermediate (MPC)",
    place: "Narayana Junior College",
    period: "2019 — 2021",
    cgpa: "9.58/10",
    desc: "Core subjects: Mathematics, Physics, Chemistry",
    color: "from-neon-blue to-neon-purple",
  },
  {
    icon: GraduationCap,
    type: "Education",
    title: "Schooling (SSC)",
    place: "Narayana Concept School",
    period: "2018 — 2019",
    cgpa: "9.7/10",
    desc: "Core subjects: Telugu, Hindi, English, Maths, Science, Social",
    color: "from-neon-blue to-neon-purple",
  },
  {
    icon: Briefcase,
    type: "Training Experience",
    title: "Java Full Stack",
    place: "QJspiders",
    period: "Summer 2025",
    desc: "Built REST APIs with Spring Boot, integrated with MySQL, and shipped React-based admin dashboards.",
    color: "from-neon-purple to-neon-cyan",
  },
  {
    icon: Code2,
    type: "Internship",
    title: "Java Full Stack Developer",
    place: "Zenkara Tech Services",
    period: "2026 — Present",
    desc: "Built multiple full-stack applications using Java, Spring Boot, and React.",
    color: "from-neon-cyan to-neon-blue",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Journey" title="Education & experience" />

        <div className="relative mt-14">
          {/* <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan md:left-1/2" /> */}
          <div className="absolute left-4 top-0 h-full w-px 
  bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500 
  md:left-1/2"
/>
          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-4 -translate-x-1/2 md:left-1/2">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_20px_rgba(180,140,255,0.6)] ring-4 ring-background`}
                  >
                    <item.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>

                <div className="md:w-1/2" />

                {/* Card */}
                <div className="ml-12 flex-1 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(180,140,255,0.25)]">

                    {/* Type */}
                    <span className="text-xs uppercase tracking-widest text-neon-cyan">
                      {item.type}
                    </span>

                    {/* Title */}
                    <h3 className="mt-1 font-display text-lg font-semibold">
                      {item.title}
                    </h3>

                    {/* Place + Period */}
                    <p className="text-sm text-muted-foreground">
                      {item.place} · {item.period}
                    </p>

                    {/* CGPA */}
                    {item.cgpa && (
                      <div className="mt-2 inline-block rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neon-cyan">
                        CGPA: {item.cgpa}
                      </div>
                    )}

                    {/* Description */}
                    {item.desc && (
                      <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                        {item.desc}
                      </p>
                    )}

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}