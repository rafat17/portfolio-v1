"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getActiveTheme = (): Theme => {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
    <path
      strokeLinecap="round"
      strokeWidth="2"
      d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
    />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
    />
  </svg>
);

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  // Unknown until mounted: the server can't see the visitor's saved or system theme
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(getActiveTheme());

    // Follow system changes while the visitor hasn't picked a theme themselves
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(getActiveTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const handleToggle = () => {
    const next: Theme = getActiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked: the choice still applies for this visit
    }
    setTheme(next);
  };

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      title={label}
      className={`w-9 h-9 flex items-center justify-center rounded-full text-muted transition-colors hover:text-accent hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${className}`}
    >
      {theme === "dark" && <SunIcon />}
      {theme === "light" && <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
