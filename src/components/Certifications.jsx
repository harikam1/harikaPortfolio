import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import salesforce from "../assets/salesforce.png";
import wipro from "../assets/wipro.png";
import awscert from "../assets/aws.png";
import cybersecurity from "../assets/cybersecurity.png";

const certifications = [
  {
    title: "Salesforce Administrator",
    org: "SmartInternz",
    image: salesforce,
  },
  {
    title: "AWS Academy Cloud Foundations",
    org: "AWS Academy",
    image: awscert,
  },
  {
    title: "Java Full Stack Training",
    org: "Wipro TalentNext",
    image: wipro,
  },
  {
    title: "Google Cybersecurity Certificate",
    org: "Coursera",
    image: cybersecurity,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCert]);

  return (
    <section id="certifications" className="relative px-6 py-24 bg-transparent">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="CERTIFICATIONS"
          title="Professional Certifications"
          desc="Verified credentials from industry-leading organizations."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-blue-500/40 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Award size={20} />
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {cert.org}
              </p>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-300 transition-colors">
                <ZoomIn size={12} />
                View Certificate
              </div>

              <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-500/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              // Changed max-w-4xl to max-w-3xl to keep vertical certificates from getting too wide
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-5">
                <div>
                  <h2 className="text-lg font-bold text-white leading-tight">{selectedCert.title}</h2>
                  <p className="text-xs text-zinc-400">{selectedCert.org}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Improved Image Area for Vertical Certificates */}
              <div className="relative bg-zinc-800 p-4 md:p-6 overflow-y-auto max-h-[80vh] flex justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  // Changed object-contain to w-auto and max-h for better portrait fit
                  className="w-auto h-auto max-h-[75vh] rounded-md shadow-2xl border border-white/10"
                />
              </div>

              <div className="flex items-center justify-center border-t border-white/10 bg-white/5 p-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                  Credential Verification Active
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}