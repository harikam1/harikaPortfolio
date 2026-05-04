import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const highlights = [
  "Built full-stack applications",
  "Strong in Java & backend systems",
  "Experience with REST APIs & databases",
  "Practicing DSA & problem solving",
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 scroll-mt-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_30%_20%,rgba(120,100,255,0.15),transparent_40%),
             radial-gradient(circle_at_80%_60%,rgba(0,200,255,0.1),transparent_40%)]" 
      />

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <SectionHeader 
          eyebrow="About" 
          title="Building scalable systems with real-world impact"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 space-y-8"
        >

          {/* Short Intro */}
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm a Computer Science graduate and a full stack developer focused on building scalable backend systems and clean, user-friendly web applications. 
I'm actively building projects and strengthening my skills to contribute effectively in a professional development environment.
          </p>

          {/* Highlights */}
          {/* <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur"
              >
                {item}
              </motion.div>
            ))}
          </div> */}
          <div className="mt-10 space-y-4">
  {highlights.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: i * 0.2,
        ease: "easeOut",
      }}
      className="px-5 py-3 rounded-xl 
                 bg-white/5 border border-white/10 
                 backdrop-blur-md
                 text-sm text-muted-foreground
                 hover:text-white
                 hover:border-purple-400/40
                 hover:shadow-[0_0_15px_rgba(120,100,255,0.3)]
                 transition-all"
    >
      {item}
    </motion.div>
  ))}
</div>

          {/* Mindset Line */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            I focus on clean code, scalability, and building things that actually solve problems.
          </p>

        </motion.div>
      </div>
    </section>
  );
}