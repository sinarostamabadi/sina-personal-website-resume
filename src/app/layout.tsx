import type { Metadata } from "next";
import { Manrope, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sina Rostamabadi — Full Stack Developer",
  description:
    "Immersive dual-theme portfolio of Sina Rostamabadi — Full Stack Developer specializing in React, Next.js and NestJS.",
  keywords: ["Sina Rostamabadi", "Full Stack Developer", "React", "Next.js", "NestJS", "Three.js"],
  authors: [{ name: "Sina Rostamabadi" }],
  openGraph: {
    title: "Sina Rostamabadi — Full Stack Developer",
    description: "Production systems end to end — React, Next.js and NestJS.",
    type: "website",
  },
};

const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem("sina-3d-theme");
    const theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.style.colorScheme = "dark";
  }
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${manrope.variable} ${syne.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="relative flex min-h-full flex-col bg-void font-sans text-ink">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
