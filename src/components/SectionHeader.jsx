import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, desc, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "mx-auto max-w-2xl text-center" : ""}
    >
      <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-neon-cyan" />
        {eyebrow}
      </span>

      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
        {title.split(" ").map((w, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="text-gradient">
              {" "}{w}
            </span>
          ) : (
            <span key={i}>
              {i === 0 ? "" : " "}
              {w}
            </span>
          )
        )}
      </h2>

      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}