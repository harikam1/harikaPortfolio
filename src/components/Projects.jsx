import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import * as Icons from "lucide-react"; 
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Apartment Management System",
    desc: "Full-stack platform to manage tenants, payments, and announcements.",
    long: "A comprehensive solution for property managers and tenants. This system automates rent tracking, maintenance requests, and community notices. Built with a focus on security and scalability, it leverages JWT for protected routes and MongoDB for flexible data modeling.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    link: "https://your-demo-link.com",
    github: "https://github.com/harikam1/apartment_management_system.git",
    // Professional property management/real estate dashboard visual
    image: "https://fortresstech.io/hubfs/property_management_software-1.webp",
    iconName: "Home"
  },
  {
    title: "AI Chatbot using Rasa",
    desc: "Contextual AI assistant using Rasa NLU and Core.",
    long: "An intelligent conversational agent capable of understanding user intent and extracting entities for dynamic responses. The project involves training custom NLU models and integrating external APIs via Rasa Actions to provide real-time information.",
    tech: ["Python", "Rasa", "NLP", "Machine Learning"],
    link: "https://your-demo-link.com",
    github: "https://github.com/harikam1/Vcs.git",
    // Modern AI/Neural network interface visual
    image: "https://learn.g2.com/hubfs/chatbot-3.jpg",
    iconName: "Bot"
  },
  {
    title: "PursuitPro Resume Builder",
    desc: "Backend-driven resume builder with AWS S3 storage.",
    long: "PursuitPro streamlines the resume creation process. It features a robust backend architecture using Spring Boot to handle complex data structures, while AWS S3 ensures reliable storage for generated documents and user assets.",
    tech: ["Java", "Spring Boot", "AWS S3", "PostgreSQL"],
    link: "https://your-demo-link.app",
    github: "https://github.com/harikam1",
    // Clean document/resume editor interface visual
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
    iconName: "FileText"
  },
  {
    title: "Therapist Platform UI",
    desc: "Frontend platform with modern UI and messaging features.",
    long: "Designed for a seamless mental health support experience. This project focuses on high-performance UI rendering, smooth page transitions, and a clean aesthetic to promote user trust and ease of use during sensitive interactions.",
    tech: ["React.js"],
    link: "https://www.amkspecialeducation.com/AMKspecialeducation/",
    github: "https://github.com/harikam1/amk_therapist_platform.git",
    // Calming, modern healthcare/wellness UI visual
    image: "https://static.wixstatic.com/media/e7bdef_e25ad6e130ff49328d691df242ca7b7b~mv2.jpeg/v1/fill/w_640,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e7bdef_e25ad6e130ff49328d691df242ca7b7b~mv2.jpeg",
    iconName: "HeartPulse"
  },
];

const LucideIcon = ({ name, ...props }) => {
  const Icon = Icons[name] || Icons.HelpCircle;
  return <Icon {...props} />;
};

export default function Projects() {
  const [selected, setSelected] = useState(null);

  // Prevent scrolling when a project is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selected]);

  return (
    <section id="projects" className="relative px-6 py-24 bg-transparent">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="PROJECTS"
          title="Selected Projects"
          desc="Click a project to explore its architecture and live deployment."
        />

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              layoutId={`card-container-${p.title}`} 
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer relative bg-zinc-900/50 rounded-[2rem] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-colors duration-500"
            >
              <motion.div layoutId={`card-image-${p.title}`} className="aspect-[16/9] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </motion.div>
              
              <div className="p-8">
                <motion.div layoutId={`card-title-${p.title}`} className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <LucideIcon name={p.iconName} size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                </motion.div>
                <p className="text-zinc-400 text-sm mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} className="px-3 py-1 text-[10px] uppercase font-mono tracking-tighter bg-white/5 text-zinc-500 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />
            
            <motion.div
              layoutId={`card-container-${selected.title}`} 
              className="relative w-full max-w-5xl bg-[#0d0d0d] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute right-6 top-6 z-30 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black transition-all"
              >
                <LucideIcon name="X" size={24} />
              </button>

              <div className="flex flex-col lg:flex-row">
                <motion.div layoutId={`card-image-${selected.title}`} className="lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">
                  <img src={selected.image} className="w-full h-full object-cover" alt={selected.title} />
                </motion.div>

                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <motion.div layoutId={`card-title-${selected.title}`}>
                    <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">{selected.title}</h2>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2 }}
                    className="text-zinc-400 leading-relaxed mb-8 text-lg"
                  >
                    {selected.long}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-10"
                  >
                    {selected.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 text-xs font-semibold bg-white/5 border border-white/10 text-zinc-300 rounded-xl">
                        {t}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.4 }}
                    className="flex gap-4"
                  >
                    <a href={selected.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-blue-400 transition-all">
                      <LucideIcon name="Globe" size={18} /> Live Demo
                    </a>
                    <a href={selected.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all">
                      <LucideIcon name="Github" size={18} /> Code
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}