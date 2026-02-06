"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Bot,
  Workflow,
  Brain,
  Code2,
  Database,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Autonomous agents that handle complex tasks — from customer interactions to data processing. Built with the latest LLM architectures.",
    tags: ["GPT-4o", "Claude", "Custom Models"],
    accent: "#00ff41",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end business process automation. Connect your tools, eliminate manual work, and scale operations without scaling headcount.",
    tags: ["n8n", "Make", "Custom Pipelines"],
    accent: "#00ff41",
  },
  {
    icon: Brain,
    title: "AI Strategy",
    description:
      "Identify the highest-impact AI opportunities in your business. We cut through the hype and focus on what actually moves the needle.",
    tags: ["ROI Analysis", "Roadmapping", "Audit"],
    accent: "#ff0040",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Full-stack AI applications built from the ground up. APIs, dashboards, and production systems designed to scale.",
    tags: ["Next.js", "Python", "Cloud"],
    accent: "#00ff41",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "Intelligent ETL and data processing systems. Transform raw data into actionable insights with AI-enhanced pipelines.",
    tags: ["RAG", "Vector DBs", "Real-time"],
    accent: "#00ff41",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Smart chatbots and voice assistants that actually understand context. Trained on your data, deployed where your users are.",
    tags: ["Chat", "Voice", "Multi-modal"],
    accent: "#ff0040",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#00ff41]/60 mb-4">
              <span className="text-[#00ff41]">{">"}</span> cat services.txt
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              What We{" "}
              <span className="gradient-text-matrix">Build</span>
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-500 text-lg">
              From concept to production. We specialize in AI systems and
              automations that deliver measurable business outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                className="glass-card rounded-xl p-6 h-full group cursor-default relative overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.accent}08 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border"
                    style={{
                      borderColor: `${service.accent}30`,
                      backgroundColor: `${service.accent}08`,
                    }}
                  >
                    <service.icon
                      className="w-5 h-5"
                      style={{ color: service.accent }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-lg font-semibold mb-3 text-zinc-100">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 rounded border"
                        style={{
                          borderColor: `${service.accent}20`,
                          color: `${service.accent}`,
                          backgroundColor: `${service.accent}08`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
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
