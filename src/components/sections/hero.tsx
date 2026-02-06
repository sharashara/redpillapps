"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TerminalText } from "@/components/terminal-text";
import { GlitchText } from "@/components/glitch-text";
import { ArrowDown, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.08)_0%,transparent_70%)]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Terminal prompt label */}
          <motion.div
            className="font-mono text-xs tracking-[0.3em] uppercase text-[#00ff41]/60 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#00ff41]">[</span> system.init{" "}
            <span className="text-[#00ff41]">]</span> — boutique ai &amp;
            automation studio
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="gradient-text-redpill">
              <GlitchText text="Red Pill" intensity="low" />
            </span>
          </motion.h1>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="gradient-text-matrix">Apps</span>
          </motion.h1>

          {/* Typing tagline */}
          <motion.div
            className="h-8 flex items-center font-mono text-lg sm:text-xl text-zinc-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-[#00ff41] mr-2">$</span>
            <TerminalText
              texts={[
                "Building AI agents that think for you",
                "Automating workflows that scale",
                "Engineering the future of business",
                "Deploying intelligent systems 24/7",
              ]}
              speed={45}
              deleteSpeed={25}
              pauseTime={2500}
            />
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="max-w-xl text-zinc-500 text-base sm:text-lg leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            We architect AI-powered systems and automations that transform how
            businesses operate. No bloat. No buzzwords. Just intelligent
            software that works.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#ff0040] hover:bg-[#cc0033] text-white font-mono text-sm tracking-wider px-8 animate-glow-pulse-red group"
            >
              <a href="#contact">
                <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                START_PROJECT
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/10 hover:border-[#00ff41]/50 font-mono text-sm tracking-wider px-8"
            >
              <a href="#services">EXPLORE_SERVICES</a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-[#00ff41]/40" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
