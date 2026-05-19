import { useEffect, useState, useCallback } from "react";

// ─── IMPORTANT ────────────────────────────────────────────────────────────────
// These IDs must EXACTLY match the `id` attribute on each section's wrapper div
// in your components. E.g. Hero must have <section id="home">, About → id="about"
// ──────────────────────────────────────────────────────────────────────────────
const sections = [
  { id: "home",           label: "Home"           },
  { id: "about",          label: "About"          },
  { id: "skills",         label: "Skills"         },
  { id: "projects",       label: "Projects"       },
  { id: "certifications", label: "Certifications"},
  { id: "experience",     label: "Journey"        },
  { id: "contact",        label: "Contact"        },
];

const NAV_HEIGHT = 80; 

export default function Navbar() {
  const [active, setActive]     = useState("home");
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── Active section tracker ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const offset = NAV_HEIGHT + 40;
      let current = sections[0].id;

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = s.id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Scroll to section ───────────────────────────────────────────────────
  const go = useCallback((id) => {
    setOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) {
      console.warn(`[Navbar] No element found with id="${id}".`);
      return;
    }

    let top = 0;
    let node = el;
    while (node) {
      top += node.offsetTop;
      node = node.offsetParent;
    }

    window.scrollTo({ top: top - NAV_HEIGHT - 16, behavior: "smooth" });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">

      {/* ── Navbar pill ── */}
      <nav
        className="pointer-events-auto mt-4 w-[92%] max-w-5xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8, 8, 18, 0.82)"
            : "rgba(8, 8, 18, 0.45)",
          backdropFilter:       "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: scrolled
            ? "1px solid rgba(139, 92, 246, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(109, 40, 217, 0.12), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "none",
        }}
      >
        {/* Logo - Name now visible on all screens */}
        <button onClick={() => go("home")} className="flex items-center gap-2.5 group shrink-0">
          <span
            className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #0891b2 100%)" }}
          >
            YH
          </span>
          <span className="text-[13px] sm:text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors duration-200 tracking-wide">
            Yellakanti Harika
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className="relative px-3.5 py-2 text-[13px] rounded-xl transition-colors duration-200 font-medium"
                  style={{ color: isActive ? "#e2e8f0" : "rgba(255,255,255,0.42)" }}
                >
                  {s.label}

                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #7c3aed, #2563eb, #0891b2)",
                        boxShadow:  "0 0 8px 1px rgba(124, 58, 237, 0.6)",
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open ? (
              <path fillRule="evenodd" clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
            ) : (
              <path fillRule="evenodd" clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile dropdown ── */}
      <div
        className="pointer-events-auto absolute top-[4.75rem] w-[92%] max-w-5xl rounded-2xl md:hidden overflow-hidden"
        style={{
          background:           "rgba(8, 8, 18, 0.95)",
          backdropFilter:       "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border:               "1px solid rgba(139, 92, 246, 0.18)",
          boxShadow:            "0 20px 60px rgba(0,0,0,0.6)",
          maxHeight:   open ? "480px" : "0px",
          opacity:     open ? 1 : 0,
          transition:  "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <ul className="flex flex-col p-3 gap-0.5">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200"
                  style={{
                    color: isActive ? "#e2e8f0" : "rgba(255,255,255,0.5)",
                    background: isActive
                      ? "rgba(124, 58, 237, 0.12)"
                      : "transparent",
                    borderLeft: isActive
                      ? "2px solid rgba(124, 58, 237, 0.7)"
                      : "2px solid transparent",
                  }}
                >
                  {s.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}