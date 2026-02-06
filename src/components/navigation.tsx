"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-[#00ff41]/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded border border-[#00ff41]/40 flex items-center justify-center bg-[#00ff41]/5 group-hover:bg-[#00ff41]/10 group-hover:border-[#00ff41]/60 transition-all">
            <Terminal className="w-4 h-4 text-[#00ff41]" />
          </div>
          <span className="font-mono font-bold text-sm tracking-wider">
            <span className="text-[#ff0040]">RED</span>
            <span className="text-[#00ff41]">PILL</span>
            <span className="text-zinc-400">.apps</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase text-zinc-400 hover:text-[#00ff41] transition-colors relative group"
            >
              <span className="text-[#00ff41]/0 group-hover:text-[#00ff41]/100 transition-colors">
                {"> "}
              </span>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff41] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-[#ff0040] hover:bg-[#cc0033] text-white font-mono text-xs tracking-wider border-0 animate-glow-pulse-red"
          >
            <a href="#contact">JACK_IN</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#00ff41]">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black/95 border-l border-[#00ff41]/20 w-72"
          >
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm tracking-widest uppercase text-zinc-400 hover:text-[#00ff41] transition-colors"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-[#00ff41]">{">"}</span> {link.label}
                </motion.a>
              ))}
              <Button
                asChild
                className="bg-[#ff0040] hover:bg-[#cc0033] text-white font-mono text-xs tracking-wider mt-4"
              >
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  JACK_IN
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
