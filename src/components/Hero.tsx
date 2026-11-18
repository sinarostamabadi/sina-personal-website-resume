"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { ResumeIcon } from "./ResumeIcon";

const tags = ["React", "Next.js", "NestJS", "TypeScript", "Node.js", "REST APIs"];
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden" aria-label="Introduction">
      <div className="section-pad relative z-10 flex min-h-[100svh] flex-col justify-center pb-16 pt-32 md:pt-28">
        <div className="container-wide">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease }}
              className="mx-auto w-[168px] sm:w-[190px] lg:mx-0 lg:w-[220px]"
            >
              <div className="photo-ring">
                <div className="photo-ring-inner aspect-square">
                  <Image
                    src="/sina.jpg"
                    alt={profile.name}
                    width={440}
                    height={440}
                    priority
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>

            <div className="min-w-0 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="eyebrow mb-4"
              >
                {profile.role} · {profile.location}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.18, ease }}
                className="font-display text-[clamp(2.7rem,7.5vw,5.6rem)] font-bold leading-[0.94] tracking-[-0.04em]"
              >
                {profile.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28, ease }}
                className="mx-auto mt-5 max-w-2xl text-[clamp(1.02rem,2vw,1.22rem)] leading-relaxed text-soft lg:mx-0"
              >
                {profile.headline}{" "}
                <span className="font-semibold text-accent">{profile.stackLine}</span> —
                strong TypeScript, clean APIs, production-ready delivery.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.36, ease }}
                className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
              >
                {tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 text-[0.74rem] font-bold ${
                      i < 3
                        ? "border-accent/40 bg-accent-soft text-accent"
                        : "tag-muted"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.44, ease }}
                className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
              >
                <a href="#work" className="btn-primary">
                  View selected work
                  <span aria-hidden>→</span>
                </a>
                <a href={profile.resumeHref} download={profile.resumeFileName} className="btn-ghost">
                  <ResumeIcon />
                  Download resume
                </a>
                <a href="#contact" className="btn-ghost">
                  Get in touch
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="glass mt-14 grid overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { label: "Email", value: profile.email, href: profile.emailHref },
              { label: "Phone", value: profile.phone, href: profile.phoneHref },
              { label: "LinkedIn", value: "Sina Rostamabadi", href: profile.linkedin },
              { label: "Based in", value: "Karaj · Remote OK", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="border-b border-line px-5 py-4 transition-colors hover:bg-white/5 sm:border-r lg:border-b-0 last:lg:border-r-0"
              >
                <span className="mb-1 block font-mono text-[0.64rem] font-extrabold tracking-[0.14em] text-accent uppercase">
                  {item.label}
                </span>
                <span className="block truncate text-sm font-semibold text-soft">{item.value}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
