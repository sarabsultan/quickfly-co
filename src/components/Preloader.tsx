import { useEffect, useState } from "react";
import logo from "@/assets/quickfly-logo.png.asset.json";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setDone(true), reduced ? 200 : 1900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ perspective: "1000px" }}
    >
      <div className="qf-plane-stage">
        <img src={logo.url} alt="" className="w-64 max-w-[70vw]" />
      </div>
      <div className="mt-8 h-[3px] w-40 overflow-hidden rounded-full bg-secondary">
        <div className="qf-bar h-full w-1/3 rounded-full bg-accent" />
      </div>
    </div>
  );
}
