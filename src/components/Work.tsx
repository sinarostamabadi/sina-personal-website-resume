"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { MotionReveal } from "./MotionReveal";

export function Work() {
  return (
    <section id="work" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-3">Selected projects</p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight">
                Live platforms shipped
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted">
              Production systems across accounting, payments, POS and enterprise
              workflow — from API contracts to UI and mobile.
            </p>
          </div>
        </MotionReveal>

        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <MotionReveal key={project.id} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 md:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:grid-cols-[72px_minmax(0,1fr)_minmax(0,1.2fr)]">
                  <div className="hidden lg:block">
                    <span className="font-display text-3xl font-bold text-accent/30 transition-colors group-hover:text-accent/55">
                      {project.id}
                    </span>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[0.68rem] font-extrabold tracking-[0.14em] text-accent uppercase">
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight md:text-[1.7rem]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-muted">{project.subtitle}</p>
                    <div className="mt-6">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.8rem] font-bold"
                        >
                          {project.urlLabel}
                          <span aria-hidden>↗</span>
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-muted">
                          Enterprise system · private deployment
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="border-t border-line pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                    <p className="text-[0.98rem] leading-relaxed text-soft">{project.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-line bg-white/5 px-2 py-1 text-[0.7rem] font-semibold text-muted transition-colors group-hover:border-accent/25 group-hover:text-soft"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
