import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line py-8 text-muted">
      <div className="section-pad container-wide flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <p className="font-mono text-xs tracking-wider text-accent uppercase">
          {profile.stackLine}
        </p>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
