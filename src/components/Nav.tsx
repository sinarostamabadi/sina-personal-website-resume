"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav, profile } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`site-header fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_20px_60px_rgba(0,0,0,0.25)]" : ""
      }`}
    >
      <div className="section-pad container-wide hidden h-[4.25rem] items-center justify-between md:flex">
        <a href="#top" className="nav-brand font-display text-[1.1rem] font-bold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="dot">.</span>
        </a>
        <nav className="flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link rounded-lg px-3.5 py-2 text-[0.88rem] font-bold"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle className="ml-2" />
          <a href="#contact" className="nav-cta ml-2 rounded-full px-4 text-[0.82rem] font-bold">
            Hire me
          </a>
        </nav>
      </div>

      <div className="md:hidden">
        <div className="section-pad flex h-14 items-center justify-between gap-3">
          <a href="#top" className="nav-brand font-display text-[1.05rem] font-bold">
            {profile.name.split(" ")[0]}
            <span className="dot">.</span>
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="nav-cta shrink-0 rounded-full px-3.5 text-[0.78rem] font-bold">
              Hire me
            </a>
          </div>
        </div>
        <nav className="nav-scroll border-t border-line px-4 pb-2.5" aria-label="Mobile">
          <div className="flex items-center gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link shrink-0 rounded-full px-3 py-1.5 text-[0.78rem] font-bold whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
