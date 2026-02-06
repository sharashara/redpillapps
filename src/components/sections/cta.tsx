"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Terminal } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="relative py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,64,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,255,65,0.04)_0%,transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            {/* Terminal prompt */}
            <div className="inline-flex items-center gap-2 bg-black/60 border border-[#00ff41]/20 rounded-full px-4 py-2 mb-8">
              <Terminal className="w-3 h-3 text-[#00ff41]" />
              <span className="font-mono text-xs text-[#00ff41]/60">
                ready to connect
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to{" "}
              <span className="gradient-text-redpill">Wake Up</span>?
            </h2>

            <p className="max-w-xl mx-auto text-zinc-500 text-lg mb-12 leading-relaxed">
              Tell us about your project. We&apos;ll analyze your operations
              and show you exactly where AI can deliver the biggest impact —
              free of charge.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-[#ff0040] hover:bg-[#cc0033] text-white font-mono text-sm tracking-wider px-8 animate-glow-pulse-red group"
              >
                <a href="mailto:hello@redpillapps.com">
                  <Mail className="w-4 h-4 mr-2" />
                  SEND_TRANSMISSION
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10 hover:border-[#00ff41]/50 font-mono text-sm tracking-wider px-8"
              >
                <a href="mailto:hello@redpillapps.com">
                  SCHEDULE_CALL
                </a>
              </Button>
            </div>

            {/* Email display */}
            <motion.div
              className="inline-block bg-black/40 border border-[#00ff41]/10 rounded-lg px-6 py-3"
              whileHover={{ borderColor: "rgba(0, 255, 65, 0.3)" }}
            >
              <code className="font-mono text-sm text-zinc-500">
                <span className="text-[#00ff41]">$</span> echo{" "}
                <a
                  href="mailto:hello@redpillapps.com"
                  className="text-[#00ff41] hover:text-[#00ff41]/80 transition-colors"
                >
                  hello@redpillapps.com
                </a>
              </code>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
