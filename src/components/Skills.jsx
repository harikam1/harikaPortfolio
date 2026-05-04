  import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

const categories = [
    {
    icon: Code,
    title: "Languages",
    skills: ["Java", "JavaScript"],
    desc: "Foundation for logic and structure.",
    color: "text-blue-400",
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
    desc: "Crafting interactive user experiences.",
    color: "text-purple-400",
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Spring Boot", "REST APIs"],
    desc: "Robust architecture and business logic.",
    color: "text-rose-400",
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "PostgreSQL",  "MongoDB"],
    desc: "Efficient data management and storage.",
    color: "text-emerald-400",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git","AWS S3", "Postman"],
    desc: "The machinery that powers deployment.",
    color: "text-amber-400",
  },
];
  

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 bg-transparent">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="SKILLS"
          title="Technical Skills"
          desc="A comprehensive breakdown of my professional stack and capabilities."
        />

        <div className="mt-20 overflow-hidden rounded-xl border border-white/10 bg-white/[0.01]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="px-8 py-5 text-sm font-semibold uppercase tracking-wider text-zinc-400 w-1/3">Category</th>
                <th className="px-8 py-5 text-sm font-semibold uppercase tracking-wider text-zinc-400">Tech Stack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {categories.map((cat, i) => (
                <motion.tr
                  key={cat.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  {/* Category Column */}
                  <td className="px-8 py-8 align-top">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${cat.color}`}>
                        <cat.icon size={18} />
                      </div>
                      <span className="font-bold text-white tracking-tight">{cat.title}</span>
                    </div>
                  </td>

                  {/* Skills Column */}
                  <td className="px-8 py-8">
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors flex items-center gap-2"
                        >
                          <span className={`h-1 w-1 rounded-full bg-current opacity-30 ${cat.color}`} />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Professional Footer Detail */}
        <div className="mt-8 flex justify-end">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
            Verified Stack // 2026.0
          </p>
        </div>
      </div>
    </section>
  );
}
