
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    // validation
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

      // simulate API call (replace with backend later)
      await new Promise((r) => setTimeout(r, 900));

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
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

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contacts.map((c) => (
              // <a
              //   key={c.label}
              //   href={c.href}
              //   target="_blank"
              //   rel="noreferrer"
              //   className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(180,140,255,0.25)]"
              // >
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(180,140,255,0.25)]"
                >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-lg">{c.icon}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            className="glass-strong rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4">

              {/* NAME */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neon-purple"
                  placeholder="Your name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neon-purple"
                  placeholder="you@example.com"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neon-purple"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={sending}
                className="rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan px-6 py-3 text-sm text-white disabled:opacity-50"
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
                    className="text-sm text-green-400 flex items-center gap-2"
                  >
                    <span>✅</span>
                    Message sent successfully!
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-400 flex items-center gap-2"
                  >
                    <span>❌</span>
                    Please fill all fields correctly
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

