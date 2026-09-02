"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-7 right-7 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-surface text-accent shadow-lg transition-all duration-300 hover:border-accent ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-[18px] w-[18px]" />
    </button>
  );
}
