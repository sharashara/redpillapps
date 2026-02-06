"use client";

import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: number[] = [];

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\+=*&^%$#@!";
    const fontSize = 14;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      const columnCount = Math.floor(canvas!.width / fontSize);
      columns = Array.from({ length: columnCount }, () =>
        Math.floor(Math.random() * -canvas!.height / fontSize)
      );
    }

    function draw() {
      ctx!.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < columns.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        // Lead character is brighter
        if (Math.random() > 0.98) {
          ctx!.fillStyle = "#ffffff";
          ctx!.shadowColor = "#00ff41";
          ctx!.shadowBlur = 15;
        } else {
          const brightness = Math.random();
          if (brightness > 0.9) {
            ctx!.fillStyle = "#00ff41";
            ctx!.shadowColor = "#00ff41";
            ctx!.shadowBlur = 8;
          } else if (brightness > 0.7) {
            ctx!.fillStyle = "#00cc33";
            ctx!.shadowBlur = 0;
          } else {
            ctx!.fillStyle = "#00661a";
            ctx!.shadowBlur = 0;
          }
        }

        ctx!.font = `${fontSize}px monospace`;
        ctx!.fillText(char, x, y);
        ctx!.shadowBlur = 0;

        if (y > canvas!.height && Math.random() > 0.975) {
          columns[i] = 0;
        }
        columns[i]++;
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.15, zIndex: 0 }}
    />
  );
}
