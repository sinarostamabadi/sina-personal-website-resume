"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Scene3D = dynamic(
  () => import("@/components/Scene3D").then((m) => m.Scene3D),
  { ssr: false },
);

export default function Home() {
  return (
    <ThemeProvider>
      <Scene3D />
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
