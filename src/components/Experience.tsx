"use client";

import { experience } from "@/data/content";
import { MotionReveal } from "./MotionReveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Experience</p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight">
                Roles & delivery
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted">
              Freelance, product teams and enterprise systems — shipping UI and
              full-stack features that hold up in production.
            </p>
          </div>
        </MotionReveal>

        <div className="border-t border-line">
          {experience.map((job, i) => (
            <MotionReveal key={`${job.company}-${job.role}`} delay={i * 0.06}>
              <article className="grid gap-6 border-b border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] md:gap-12 md:py-12">
                <div>
                  <p className="font-mono text-[0.68rem] font-extrabold tracking-[0.14em] text-accent uppercase">
                    {job.period}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-bold tracking-tight md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-2 font-semibold text-soft">{job.company}</p>
                </div>
                <ul className="space-y-3.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-[0.97rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {point}
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
