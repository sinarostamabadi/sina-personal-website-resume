"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, ready } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle ${isDark ? "is-dark" : "is-light"} ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      disabled={!ready}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle-icon"
          initial={{ opacity: 0, y: 6, rotate: -20 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: -6, rotate: 20 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          {isDark ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M20.2 14.2A7.6 7.6 0 0 1 9.8 3.8 6.4 6.4 0 1 0 20.2 14.2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 2.6v2M12 19.4v2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M2.6 12h2M19.4 12h2M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
