import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      setSending(true);
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "harikayellakanti82@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=harikayellakanti82@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/harikayellakanti",
      href: "https://linkedin.com/in/harikayellakanti",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/harikam1",
      href: "https://github.com/harikam1",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 6302685657",
      href: "tel:+916302685657",
    },
  ];

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Connect & Collaborate"
          desc="Open to internships, full-time roles, and collaborations."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon-purple hover:shadow-[0_10px_35px_rgba(150,100,255,0.25)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple text-white shadow-md transition-transform group-hover:scale-110">
                  {c.icon}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    {c.label}
                  </p>
                  <p className="text-sm font-semibold text-white group-hover:text-neon-blue transition">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg shadow-xl"
          >
            <div className="grid gap-5">

              {/* NAME */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/40 transition"
                  placeholder="Your name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/40 transition"
                  placeholder="you@example.com"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-gray-400">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/40 transition"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={sending}
                className="mt-2 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(120,90,255,0.4)] disabled:opacity-50"
              >
                {sending ? "Sending..." : "📤 Send Message"}
              </button>

              {/* STATUS */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm text-green-400"
                  >
                    ✅ Message sent successfully!
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400"
                  >
                    ❌ Please fill all fields correctly
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}