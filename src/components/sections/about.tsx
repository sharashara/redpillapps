"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Shield, Cpu, Clock, Users } from "lucide-react";

const stats = [
  { icon: Cpu, value: "AI-First", label: "Architecture approach" },
  { icon: Clock, value: "24/7", label: "System monitoring" },
  { icon: Shield, value: "Secure", label: "Enterprise-grade" },
  { icon: Users, value: "Boutique", label: "Dedicated attention" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <ScrollReveal direction="left">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#00ff41]/60 mb-4">
                <span className="text-[#00ff41]">{">"}</span> whoami
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Take the{" "}
                <span className="gradient-text-redpill">Red Pill</span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Red Pill Apps LLC is a boutique AI and automation studio. We
                  don&apos;t do cookie-cutter solutions or bloated enterprise
                  consulting. We build real systems that work.
                </p>
                <p>
                  Every engagement starts with a hard question:{" "}
                  <span className="text-zinc-200">
                    &quot;What&apos;s the one automation that would 10x your
                    operations?&quot;
                  </span>{" "}
                  We find that answer, build it, and make sure it delivers.
                </p>
                <p>
                  Our stack is modern, our approach is pragmatic, and our only
                  metric is your ROI. No vendor lock-in. No black boxes. Just
                  intelligent software that gives you an unfair advantage.
                </p>
              </div>

              {/* Terminal-style highlight */}
              <div className="mt-8 bg-black/60 rounded-xl border border-[#00ff41]/10 p-6 font-mono text-sm">
                <div className="text-zinc-600 mb-2">
                  // Our philosophy
                </div>
                <div className="text-[#00ff41]">
                  <span className="text-zinc-500">const</span> approach ={" "}
                  <span className="text-[#ff0040]">&quot;pragmatic&quot;</span>;
                </div>
                <div className="text-[#00ff41]">
                  <span className="text-zinc-500">const</span> focus ={" "}
                  <span className="text-[#ff0040]">&quot;outcomes&quot;</span>;
                </div>
                <div className="text-[#00ff41]">
                  <span className="text-zinc-500">const</span> bs ={" "}
                  <span className="text-[#ff0040]">0</span>;
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Stats + visual */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-xl p-6 text-center group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center border border-[#00ff41]/20 bg-[#00ff41]/5 group-hover:border-[#00ff41]/40 transition-colors">
                    <stat.icon className="w-6 h-6 text-[#00ff41]" />
                  </div>
                  <div className="font-mono text-xl font-bold text-zinc-100 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
