import { motion } from "framer-motion";
import { Award } from "lucide-react";
// import { SectionHeader } from "./SectionHeader";
import SectionHeader from "./SectionHeader"; 

const certifications = [
  {
    title: "Salesforce Administrator",
    org: "SmartInternz",
  },
  {
    title: "AWS Academy Cloud Foundations",
    org: "AWS Academy",
  },
  {
    title: "Java Full Stack Training",
    org: "Wipro TalentNext",
  },
  {
    title: "Google Cybersecurity Certificate",
    org: "Coursera",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Certifications"
          title="My Certifications"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-6 transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(180,140,255,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan shadow-lg">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold">
                {cert.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {cert.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}