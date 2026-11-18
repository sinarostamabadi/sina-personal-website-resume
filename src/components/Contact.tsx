"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { MotionReveal } from "./MotionReveal";
import { ResumeIcon } from "./ResumeIcon";

const links = [
  { label: "Email", value: profile.email, href: profile.emailHref },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "LinkedIn", value: "Sina Rostamabadi", href: profile.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display max-w-[14ch] text-[clamp(2.3rem,5.5vw,4.2rem)] font-bold leading-[1.05] tracking-tight">
            Let&apos;s build the next product.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">
            Open to remote roles and serious freelance collaborations — React,
            Next.js, NestJS and mobile.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="glass mt-12 grid overflow-hidden rounded-2xl sm:grid-cols-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -2 }}
                className="group border-b border-line px-6 py-7 transition-colors hover:bg-white/5 sm:border-r sm:border-b-0 last:sm:border-r-0"
              >
                <p className="mb-2 font-mono text-[0.68rem] font-extrabold tracking-[0.14em] text-accent uppercase">
                  {link.label}
                </p>
                <p className="text-lg font-bold tracking-tight break-all text-soft group-hover:text-ink">
                  {link.value}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-muted transition-all group-hover:translate-x-1 group-hover:text-accent">
                  Connect →
                </span>
              </motion.a>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={profile.emailHref} className="btn-primary">
              Send an email
            </a>
            <a href={profile.resumeHref} download={profile.resumeFileName} className="btn-ghost">
              <ResumeIcon />
              Download resume
            </a>
            <a href={profile.phoneHref} className="btn-ghost">
              Call / WhatsApp
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
