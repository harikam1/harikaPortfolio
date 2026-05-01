import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const navbarOffset = 120;

    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      
      {/* Floating Navbar */}
      <nav className="mt-4 w-[90%] max-w-6xl rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="text-lg font-semibold tracking-tight"
        >
          {/* <span className="text-white">YH</span> */}
          <span className="ml-1 text-white/70">Yellakanti Harika</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-2 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition ${
                  active === s.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {s.label}

                {/* Active underline */}
                {active === s.id && (
                  <span className="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 w-[90%] max-w-6xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
          <ul className="flex flex-col gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                    active === s.id
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}