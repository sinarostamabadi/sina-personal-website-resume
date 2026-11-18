"use client";

import { coreSkills, skillGroups } from "@/data/content";
import { MotionReveal } from "./MotionReveal";

const levels: Record<string, string> = {
  Expert: "94%",
  Advanced: "84%",
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Capabilities</p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight">
                A TypeScript stack from UI to API
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted">
              The same production stack used across accounting, POS and mobile
              products — frontend to API.
            </p>
          </div>
        </MotionReveal>

        <MotionReveal>
          <div className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreSkills.map((item) => (
              <div key={item.name} className="glass rounded-2xl p-5">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <p className="font-display text-[0.98rem] font-bold">{item.name}</p>
                  <span className="font-mono text-[0.62rem] font-extrabold tracking-wide text-accent uppercase">
                    {item.level}
                  </span>
                </div>
                <div className="skill-track h-1 overflow-hidden rounded-full">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-deep to-accent"
                    style={{ width: levels[item.level] ?? "75%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <MotionReveal key={group.title} delay={(i % 3) * 0.05}>
              <article className="glass flex h-full flex-col rounded-2xl p-6 md:p-7">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold">{group.title}</h3>
                  <span className="font-mono text-[0.68rem] font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-white/5 px-2 py-1 text-[0.7rem] font-semibold text-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
