"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Red Pill Apps automated our entire lead qualification process. What used to take 3 people now runs on autopilot — and it's more accurate.",
    author: "Operations Lead",
    company: "SaaS Startup",
  },
  {
    quote:
      "They built us a custom AI agent that handles 80% of our customer support tickets. Response time went from hours to seconds.",
    author: "CTO",
    company: "E-commerce Platform",
  },
  {
    quote:
      "No fluff, no buzzwords. They analyzed our workflows, found the bottleneck, and shipped a solution in 2 weeks. That's it. It just works.",
    author: "Founder",
    company: "Fintech Startup",
  },
];

export function SocialProofSection() {
  return (
    <section className="relative py-24">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#00ff41]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#00ff41]/60 mb-4">
              <span className="text-[#00ff41]">{">"}</span> cat
              testimonials.log
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Transmission{" "}
              <span className="gradient-text-matrix">Received</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                className="glass-card rounded-xl p-6 h-full flex flex-col"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Quote className="w-5 h-5 text-[#00ff41]/30 mb-4" />
                <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-[#00ff41]/10 pt-4">
                  <div className="font-mono text-xs text-zinc-300">
                    {testimonial.author}
                  </div>
                  <div className="font-mono text-[10px] text-zinc-600">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
