"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/scroll-reveal";

const technologies = [
  { name: "OpenAI", category: "AI" },
  { name: "Anthropic", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "Hugging Face", category: "AI" },
  { name: "Next.js", category: "Dev" },
  { name: "Python", category: "Dev" },
  { name: "TypeScript", category: "Dev" },
  { name: "Node.js", category: "Dev" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "n8n", category: "Auto" },
  { name: "Make", category: "Auto" },
  { name: "Zapier", category: "Auto" },
  { name: "PostgreSQL", category: "Data" },
  { name: "Pinecone", category: "Data" },
  { name: "Redis", category: "Data" },
];

export function TechStackSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#00ff41]/60 mb-4">
              <span className="text-[#00ff41]">{">"}</span> ls tools/
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Our <span className="gradient-text-matrix">Arsenal</span>
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto">
              We pick the right tool for the job. Here&apos;s what we work
              with.
            </p>
          </div>
        </ScrollReveal>

        {/* Scrolling tech ticker */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[oklch(0.07_0_0)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[oklch(0.07_0_0)] to-transparent z-10" />

          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...technologies, ...technologies, ...technologies].map(
              (tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex-shrink-0 glass-card rounded-lg px-5 py-3 flex items-center gap-3 group hover:border-[#00ff41]/30 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        tech.category === "AI"
                          ? "#ff0040"
                          : tech.category === "Dev"
                          ? "#00ff41"
                          : tech.category === "Cloud"
                          ? "#00aaff"
                          : tech.category === "Auto"
                          ? "#ffaa00"
                          : "#00ff41",
                    }}
                  />
                  <span className="font-mono text-xs text-zinc-400 whitespace-nowrap group-hover:text-zinc-200 transition-colors">
                    {tech.name}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
