"use client";

import { Separator } from "@/components/ui/separator";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-[#00ff41]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-[#00ff41]/30 flex items-center justify-center bg-[#00ff41]/5">
              <Terminal className="w-3 h-3 text-[#00ff41]" />
            </div>
            <span className="font-mono text-xs tracking-wider">
              <span className="text-[#ff0040]">RED</span>
              <span className="text-[#00ff41]">PILL</span>
              <span className="text-zinc-600">.apps</span>
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {["Services", "Process", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 hover:text-[#00ff41] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-mono text-[10px] tracking-wider text-zinc-700">
            &copy; {new Date().getFullYear()} Red Pill Apps LLC
          </div>
        </div>

        {/* Terminal-style status bar */}
        <div className="mt-8 pt-6 border-t border-zinc-900">
          <div className="flex items-center justify-center gap-4 font-mono text-[10px] text-zinc-700">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
              SYSTEMS ONLINE
            </span>
            <span className="text-zinc-800">|</span>
            <span>LOS ANGELES, CA</span>
            <span className="text-zinc-800">|</span>
            <span>BUILT WITH NEXT.JS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
