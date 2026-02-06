"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We deep-dive into your operations to find the highest-ROI automation opportunities. No generic advice — just targeted analysis.",
    terminal: "$ scan --target=operations --depth=full",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Architect",
    description:
      "Design the optimal AI system architecture. We select the right models, tools, and integrations for your specific use case.",
    terminal: "$ design --mode=optimal --constraints=budget,timeline",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy",
    description:
      "Rapid, iterative development. We ship working systems fast, gather feedback, and refine until it's production-ready.",
    terminal: "$ deploy --env=production --monitor=true",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize",
    description:
      "Continuous monitoring and improvement. We track performance metrics and fine-tune your systems for maximum impact.",
    terminal: "$ optimize --metric=roi --iterations=continuous",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,0,64,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#00ff41]/60 mb-4">
              <span className="text-[#00ff41]">{">"}</span> cat process.txt
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              How We{" "}
              <span className="gradient-text-redpill">Operate</span>
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-500 text-lg">
              A battle-tested process refined across dozens of AI deployments.
              Transparent, efficient, and outcome-driven.
            </p>
          </div>
        </ScrollReveal>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.15}>
              <div className="relative group">
                {/* Step card */}
                <div className="glass-card rounded-xl p-8 h-full">
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-3xl font-bold text-[#00ff41]/20 group-hover:text-[#00ff41]/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#00ff41]/20 bg-[#00ff41]/5">
                      <step.icon className="w-5 h-5 text-[#00ff41]" />
                    </div>
                    <h3 className="font-mono text-xl font-semibold text-zinc-100">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-500 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Terminal command */}
                  <div className="bg-black/60 rounded-lg px-4 py-2 border border-[#00ff41]/10">
                    <code className="font-mono text-xs text-[#00ff41]/60">
                      {step.terminal}
                    </code>
                  </div>
                </div>

                {/* Connector line (visible on md+) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-px bg-gradient-to-r from-[#00ff41]/20 to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
