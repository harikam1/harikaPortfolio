import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="relative mx-auto h-20 w-20">
          <div
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-neon-blue border-r-neon-purple"
            style={{ animationDuration: "1.2s" }}
          />
          <div
            className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-neon-cyan border-l-neon-purple"
            style={{ animationDuration: "0.9s", animationDirection: "reverse" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-xl font-bold text-gradient">
              YH
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm tracking-[0.3em] text-muted-foreground">
          LOADING
        </p>
      </div>
    </div>
  );
}