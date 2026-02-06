"use client";

import { useEffect, useState, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlitchText({
  text,
  className = "",
  intensity = "low",
}: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/~`01";
  const intervals = { low: 5000, medium: 3000, high: 1500 };

  const doGlitch = useCallback(() => {
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = 8;

    const interval = setInterval(() => {
      setGlitchedText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iterations) return text[i];
            return Math.random() > 0.5
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char;
          })
          .join("")
      );

      iterations++;
      if (iterations > maxIterations) {
        clearInterval(interval);
        setGlitchedText(text);
        setIsGlitching(false);
      }
    }, 50);
  }, [text, glitchChars]);

  useEffect(() => {
    const timer = setInterval(doGlitch, intervals[intensity]);
    return () => clearInterval(timer);
  }, [doGlitch, intensity, intervals]);

  return (
    <span
      className={`${className} ${isGlitching ? "text-[#00ff41]" : ""}`}
      style={{
        transition: "color 0.1s",
      }}
    >
      {glitchedText}
    </span>
  );
}
