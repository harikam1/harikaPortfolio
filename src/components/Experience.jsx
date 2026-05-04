import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Milestone, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Code2,
    period: "2026 — Present",
    type: "Internship",
    title: "Java Full Stack Developer",
    place: "Zenkara Tech Services",
    desc: "Architecting full-stack solutions with Spring Boot and React. Focus on high-performance API design and scalable infrastructure.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Briefcase,
    period: "2025 — 2026",
    type: "Training",
    title: "Java Full Stack Training",
    place: "QJspiders",
    desc: "Intensive training in enterprise Java development, Spring framework architecture, and MySQL database optimization.",
    color: "from-purple-500 to-indigo-400",
  },
  {
    icon: GraduationCap,
    period: "2021 — 2025",
    type: "Degree",
    title: "B.Tech in CSE",
    place: "CVR College of Engineering",
    desc: "Graduated with 8.55 CGPA. Specialized in Algorithms, DBMS, and Web Technologies through a rigorous academic curriculum.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: GraduationCap,
    period: "2019 — 2021",
    type: "Intermediate",
    title: "Intermediate (MPC)",
    place: "Narayana Junior College",
    desc: "Achieved 9.58 CGPA. Core focus on Mathematics, Physics, and Chemistry, building strong analytical foundations.",
    color: "from-rose-500 to-orange-400",
  },
  {
    icon: Target,
    period: "2018 — 2019",
    type: "Foundation",
    title: "Schooling (SSC)",
    place: "Narayana Concept School",
    desc: "Achieved 9.7 CGPA. Established a strong academic base in science and mathematics during initial secondary education.",
    color: "from-blue-400 to-emerald-400",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="JOURNEY" title="Education & Experience" />

        <div className="mt-20 flex flex-col md:flex-row gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative min-w-[300px] md:min-w-[420px] snap-center"
            >
              {i !== items.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[70%] w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" />
              )}

              <div className="relative z-10 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[2rem] bg-zinc-900 border border-white/10 group-hover:border-blue-500/50 transition-all duration-500 shadow-xl">
                    <item.icon size={28} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white/20 group-hover:text-blue-500/40 transition-colors uppercase italic tracking-tighter">
                      {item.period}
                    </h4>
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent mt-1" />
                  </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-wider">
                    {item.place}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
           <Milestone size={16} className="text-zinc-700" />
           <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold">Scroll horizontally to view journey</span>
        </div>
      </div>
    </section>
  );
}