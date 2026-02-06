# Tech Stack Reference: Animated Next.js 16 Website

> Project: **redpillapps** | Next.js 16.1.6 | React 19.2.3 | Tailwind CSS 4 | Motion 12.33+ | shadcn/ui (v3.8+)

---

## Table of Contents

1. [Next.js 16](#1-nextjs-16)
2. [shadcn/ui](#2-shadcnui)
3. [Tailwind CSS 4](#3-tailwind-css-4)
4. [Motion (formerly Framer Motion)](#4-motion-formerly-framer-motion)
5. [Matrix Rain / Terminal Animation Techniques](#5-matrix-rain--terminal-animation-techniques)
6. [shadcn/ui Components for Landing Pages](#6-shadcnui-components-for-landing-pages)
7. [Best Animation Patterns](#7-best-animation-patterns)
8. [Performance Tips](#8-performance-tips)

---

## 1. Next.js 16

**Version in project:** 16.1.6
**React version:** 19.2.3

### Key Features Relevant to This Project

#### Turbopack (Stable, Default)
Turbopack is now the default bundler for `next dev` and `next build`. Delivers up to 10x faster Fast Refresh and 2-5x faster builds.

```bash
# Turbopack is used by default; opt out with:
next build --webpack
```

#### React 19.2 - View Transitions
Next.js 16 ships React 19.2, which includes native View Transitions support. This enables smooth cross-fade animations between UI states during navigations.

```tsx
// next.config.ts
const nextConfig: NextConfig = {
  viewTransition: true, // enable experimental View Transitions
};
```

```tsx
import { ViewTransition } from 'react';

export default function Page() {
  return (
    <ViewTransition>
      {/* Content animates with cross-fade on navigation */}
    </ViewTransition>
  );
}
```

**Browser support:** Chrome, Edge, Safari 18+. Falls back gracefully in unsupported browsers.

#### React Compiler (Stable)
Automatic memoization -- zero manual `useMemo`/`useCallback` needed.

```ts
// next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: true,
};
```

```bash
npm install babel-plugin-react-compiler@latest
```

#### Cache Components
Explicit, opt-in caching with `"use cache"` directive:

```tsx
// next.config.ts
const nextConfig: NextConfig = {
  cacheComponents: true,
};
```

```tsx
async function CachedSection() {
  "use cache";
  const data = await fetchData();
  return <section>{/* ... */}</section>;
}
```

#### proxy.ts (Replaces middleware.ts)
Network-level request handling now uses `proxy.ts` instead of `middleware.ts`:

```ts
// proxy.ts
export default function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}
```

---

## 2. shadcn/ui

**CLI version:** shadcn 3.8+
**Style:** new-york
**Base color:** neutral
**CSS variables:** enabled
**Icon library:** lucide

### Installation (Already Configured)

The project is already initialized. To add new components:

```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add card dialog tabs accordion

# Add all components
npx shadcn@latest add --all

# Overwrite existing components
npx shadcn@latest add button --overwrite
```

### Project Configuration (`components.json`)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### Theming with CSS Variables

shadcn/ui uses a `background`/`foreground` naming convention. All colors use the **OKLCH** color space.

```css
/* The project's color system (from globals.css) */
:root {
  --background: oklch(0.07 0 0);    /* Near-black background */
  --foreground: oklch(0.95 0 0);    /* Near-white text */
  --primary: oklch(0.8 0.2 145);    /* Matrix green */
  --accent: oklch(0.65 0.25 15);    /* Red pill red */
  --card: oklch(0.1 0 0);           /* Slightly lighter than bg */
  --muted: oklch(0.15 0 0);
  --muted-foreground: oklch(0.6 0 0);
  --border: oklch(1 0 0 / 8%);
  --ring: oklch(0.8 0.2 145);
}
```

Custom theme colors are registered via `@theme inline`:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-matrix: #00ff41;
  --color-matrix-dim: #00cc33;
  --color-matrix-dark: #003300;
  --color-redpill: #ff0040;
  --color-redpill-dim: #cc0033;
}
```

Usage in components:

```tsx
<div className="bg-background text-foreground" />
<div className="bg-primary text-primary-foreground" />
<div className="text-matrix" />           {/* Custom color */}
<div className="bg-redpill text-white" /> {/* Custom color */}
```

### Adding Custom Colors

1. Define the CSS variable in `:root` (and `.dark` if needed):

```css
:root {
  --warning: oklch(0.84 0.16 84);
}
```

2. Register it in `@theme inline`:

```css
@theme inline {
  --color-warning: var(--warning);
}
```

3. Use in Tailwind classes: `bg-warning`, `text-warning`, `border-warning`

### Dark Mode Setup

This project uses a dark-by-default design. If you need light/dark toggling:

```bash
npm install next-themes
```

```tsx
// components/theme-provider.tsx
"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

Key props:
- `attribute="class"` -- toggles `.dark` class on `<html>` for Tailwind
- `suppressHydrationWarning` -- required on `<html>` to prevent hydration mismatch warnings
- `disableTransitionOnChange` -- prevents flash of unstyled content during theme switch

### Component Patterns (Tailwind v4 / React 19)

shadcn/ui components for Tailwind v4 / React 19 use a simplified pattern:
- No more `forwardRef` -- uses `React.ComponentProps` instead
- `data-slot` attributes for styling hooks
- Direct function components

```tsx
// Modern shadcn/ui component pattern (Tailwind v4)
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}
```

---

## 3. Tailwind CSS 4

**Version in project:** 4.x
**Animation library:** tw-animate-css (replaces tailwindcss-animate)

### What Changed from v3

| Feature | Tailwind v3 | Tailwind v4 |
|---------|------------|------------|
| Configuration | `tailwind.config.ts` | CSS-first with `@theme` |
| CSS Import | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| Content detection | Manual glob in config | Automatic |
| Color format | HSL | OKLCH |
| Animation plugin | `tailwindcss-animate` | `tw-animate-css` |
| Container queries | Plugin required | Built-in |
| Performance | Fast | 5x faster full builds, 100x faster incremental |

### CSS-First Configuration

No `tailwind.config.ts` needed. Everything lives in CSS:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... all theme mappings ... */
}
```

### New Features

**Container queries (built-in):**

```html
<div className="@container">
  <div className="@lg:grid-cols-2 @md:flex-row">
    {/* Responds to container size, not viewport */}
  </div>
</div>
```

**3D transforms:**

```html
<div className="rotate-x-12 rotate-y-6 perspective-500">
  {/* 3D transformed element */}
</div>
```

**`size-*` utility (replaces separate w/h):**

```html
<!-- Before -->
<div className="w-4 h-4" />
<!-- After -->
<div className="size-4" />
```

### tw-animate-css

Provides animation utility classes used by shadcn/ui:

```css
@import "tw-animate-css";
```

Available animation classes: `animate-in`, `animate-out`, `fade-in`, `fade-out`, `zoom-in`, `zoom-out`, `slide-in-from-top`, `slide-in-from-bottom`, `slide-in-from-left`, `slide-in-from-right`, `spin-in`, `spin-out`, and duration/delay modifiers.

---

## 4. Motion (formerly Framer Motion)

**Version in project:** 12.33+
**Import path:** `motion/react`
**For Server Components:** `motion/react-client`

### Migration from Framer Motion

```bash
# Uninstall framer-motion, install motion
npm uninstall framer-motion
npm install motion
```

```tsx
// OLD (framer-motion)
import { motion, AnimatePresence } from "framer-motion"

// NEW (motion)
import { motion, AnimatePresence } from "motion/react"

// For Next.js Server Components (if needed in client boundary)
import { motion } from "motion/react-client"
```

No other breaking changes in Motion 12 for React users.

### Core API: motion Component

The `motion` component is the foundation. It extends any HTML/SVG element with animation props.

```tsx
"use client"
import { motion } from "motion/react"

// Basic animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>

// With all gesture props
<motion.button
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  whileFocus={{ boxShadow: "0 0 0 2px #00ff41" }}
  whileInView={{ opacity: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  Click me
</motion.button>
```

### Transition Types

#### Spring (Physics-Based) -- Recommended

```tsx
transition={{
  type: "spring",
  stiffness: 300,  // Higher = snappier (default: 100)
  damping: 20,     // Higher = less oscillation (default: 10). 0 = infinite oscillation
  mass: 1,         // Higher = more lethargic (default: 1)
}}
```

Common spring presets:
```tsx
// Snappy button press
{ type: "spring", stiffness: 400, damping: 25 }

// Gentle float-in
{ type: "spring", stiffness: 100, damping: 15 }

// Bouncy entrance
{ type: "spring", stiffness: 200, damping: 10 }

// Heavy, deliberate movement
{ type: "spring", stiffness: 80, damping: 20, mass: 2 }
```

#### Tween (Duration-Based)

```tsx
transition={{
  type: "tween",
  duration: 0.5,
  ease: "easeInOut",       // or "easeIn", "easeOut", "linear"
  // ease: [0.42, 0, 0.58, 1],  // custom cubic-bezier
}}
```

#### Inertia

```tsx
transition={{
  type: "inertia",
  velocity: 200,
  power: 0.8,
  bounceStiffness: 300,
  bounceDamping: 20,
}}
```

### Keyframes

Animate through multiple values by passing an array:

```tsx
<motion.div
  animate={{
    x: [0, 100, 50, 100],
    opacity: [0, 1, 0.5, 1],
    rotate: [0, 90, 180, 360],
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.3, 0.6, 1],  // timing for each keyframe
    repeat: Infinity,
    repeatType: "loop",
  }}
/>
```

### Variants

Named animation states for orchestrating complex animations:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,    // delay between each child
      delayChildren: 0.3,     // delay before first child starts
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
}

function StaggeredList({ items }: { items: string[] }) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.li key={item} variants={itemVariants}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
```

### stagger() Function

For more precise stagger control:

```tsx
import { motion, stagger, useAnimate } from "motion/react"

function Component() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, y: 0 },
      { delay: stagger(0.1, { startDelay: 0.3 }) }
    )
  }, [])

  return (
    <ul ref={scope}>
      <li style={{ opacity: 0, y: 20 }}>Item 1</li>
      <li style={{ opacity: 0, y: 20 }}>Item 2</li>
      <li style={{ opacity: 0, y: 20 }}>Item 3</li>
    </ul>
  )
}
```

### AnimatePresence (Exit Animations)

Keeps elements in the DOM until their exit animation completes:

```tsx
import { motion, AnimatePresence } from "motion/react"

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"            // unique key is REQUIRED
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <h2>Modal Content</h2>
          <button onClick={onClose}>Close</button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

AnimatePresence modes:
- `mode="sync"` (default) -- children animate in/out simultaneously
- `mode="wait"` -- outgoing child completes exit before incoming child enters
- `mode="popLayout"` -- outgoing child is popped from layout flow immediately

### Layout Animations

Animate layout changes (position, size) using performant transforms:

```tsx
<motion.div layout>
  {/* Automatically animates when this element's layout changes */}
</motion.div>

<motion.div layout="position">
  {/* Only animates position changes, not size */}
</motion.div>

<motion.div
  layout
  layoutId="shared-element"
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  {/* Shared layout animation -- animates between two components with same layoutId */}
</motion.div>
```

### Scroll-Triggered Animations (whileInView)

The simplest way to trigger animations on scroll:

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{
    once: true,      // only animate once (don't re-trigger on scroll back)
    amount: 0.5,     // trigger when 50% of element is visible
    margin: "-100px", // trigger 100px before element enters viewport
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content that fades in on scroll
</motion.div>
```

### Scroll-Linked Animations (useScroll)

Link animation values directly to scroll position:

```tsx
import { motion, useScroll, useTransform, useSpring } from "motion/react"

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-matrix origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
```

#### Parallax Effect

```tsx
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when tracking begins/ends
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y, opacity }}>
        <h2>Parallax Content</h2>
      </motion.div>
    </section>
  )
}
```

#### Smoothed Scroll with useSpring

```tsx
const { scrollYProgress } = useScroll()
const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
})
```

#### useMotionValueEvent

React to motion value changes without re-renders:

```tsx
import { useScroll, useMotionValueEvent } from "motion/react"

function ScrollDirection() {
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous) {
      // Scrolling down
    } else {
      // Scrolling up
    }
  })
}
```

### Text Animations (Motion+)

Motion provides premium Typewriter and ScrambleText components (requires Motion+ subscription). Both are ~1kb.

**Typewriter** -- realistic human-like typing:

```tsx
import { Typewriter } from "motion/react"

<Typewriter
  text="Welcome to the Matrix"
  speed="normal"   // "fast" | "slow" | number (ms)
  cursor={true}
/>
```

**ScrambleText** -- scramble/decode text effect:

```tsx
import { ScrambleText } from "motion/react"

<ScrambleText
  text="SYSTEM ONLINE"
  active={true}     // toggle to start/stop
  characters="01"   // custom character set
/>
```

> **Note:** These are paid Motion+ components. For free alternatives, implement custom versions (see Section 5).

---

## 5. Matrix Rain / Terminal Animation Techniques

### Matrix Rain (Canvas-Based)

The most performant approach uses HTML Canvas with `requestAnimationFrame`.

#### Architecture

```typescript
type Column = {
  chars: string[];
  y: number;       // current head position
  speed: number;   // pixels per frame
  trail: number;   // trail length
};
```

#### Core Implementation Pattern

```tsx
"use client"
import { useEffect, useRef, useCallback } from "react"

// Character sets
const KATAKANA = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
const LATIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const NUMBERS = "0123456789"
const CHARS = KATAKANA + LATIN + NUMBERS

interface MatrixRainProps {
  fontSize?: number
  color?: string
  speed?: number
  density?: number
}

export function MatrixRain({
  fontSize = 14,
  color = "#00ff41",
  speed = 1,
  density = 0.95,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Semi-transparent black overlay creates trailing effect
    ctx.fillStyle = `rgba(0, 0, 0, 0.05)`
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = color
    ctx.font = `${fontSize}px monospace`

    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops array (stored on canvas element for persistence)
    if (!(canvas as any)._drops) {
      ;(canvas as any)._drops = Array(columns).fill(1)
    }
    const drops: number[] = (canvas as any)._drops

    for (let i = 0; i < drops.length; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)]

      // Head character is brighter/white
      if (Math.random() > 0.5) {
        ctx.fillStyle = "#ffffff"
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        ctx.fillStyle = color
      } else {
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
      }

      // Reset drop to top with randomized probability
      if (drops[i] * fontSize > canvas.height && Math.random() > density) {
        drops[i] = 0
      }
      drops[i] += speed
    }

    animationRef.current = requestAnimationFrame(draw)
  }, [fontSize, color, speed, density])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ;(canvas as any)._drops = null // Reset drops on resize
    }

    resize()
    window.addEventListener("resize", resize)
    animationRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  )
}
```

#### Performance Notes for Canvas
- Use `requestAnimationFrame` instead of `setInterval`/`setTimeout`
- Store animation state in `useRef` to avoid re-renders
- The `rgba(0, 0, 0, 0.05)` overlay controls trail length (lower alpha = longer trails)
- Adjust `density` (the reset probability threshold) to control column density
- Set `pointer-events: none` on the canvas so it does not block interaction

### Typing / Typewriter Animation

Custom implementation without external libraries:

```tsx
"use client"
import { useState, useEffect, useCallback } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  cursor?: boolean
  onComplete?: () => void
}

export function Typewriter({
  text,
  speed = 50,
  delay = 0,
  cursor = true,
  onComplete,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          setIsTyping(false)
          onComplete?.()
        }
      }, speed + Math.random() * 30) // slight randomness for realism

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, speed, delay, onComplete])

  return (
    <span className="font-mono">
      {displayedText}
      {cursor && (
        <span className="animate-blink text-matrix">_</span>
      )}
    </span>
  )
}
```

### Glitch Text Effect

CSS-based glitch with pseudo-elements:

```tsx
"use client"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{text}</span>
      {/* Glitch layers via CSS */}
      <span
        className="absolute inset-0 text-redpill opacity-70 animate-glitch-1"
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute inset-0 text-[#00ccff] opacity-70 animate-glitch-2"
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  )
}
```

Corresponding CSS keyframes:

```css
@keyframes glitch-1 {
  0%, 100% { clip-path: inset(0 0 90% 0); transform: translate(-2px, 0); }
  20% { clip-path: inset(30% 0 40% 0); transform: translate(2px, 0); }
  40% { clip-path: inset(60% 0 10% 0); transform: translate(-1px, 0); }
  60% { clip-path: inset(10% 0 70% 0); transform: translate(1px, 0); }
  80% { clip-path: inset(50% 0 20% 0); transform: translate(-2px, 0); }
}

@keyframes glitch-2 {
  0%, 100% { clip-path: inset(80% 0 0 0); transform: translate(2px, 0); }
  20% { clip-path: inset(10% 0 60% 0); transform: translate(-2px, 0); }
  40% { clip-path: inset(40% 0 30% 0); transform: translate(1px, 0); }
  60% { clip-path: inset(70% 0 5% 0); transform: translate(-1px, 0); }
  80% { clip-path: inset(20% 0 50% 0); transform: translate(2px, 0); }
}

.animate-glitch-1 { animation: glitch-1 2s infinite linear; }
.animate-glitch-2 { animation: glitch-2 3s infinite linear; }
```

### CRT Scanline Overlay

Already implemented in the project's `globals.css`. The key technique:

```css
/* Static scanlines via pseudo-element */
.crt-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 1;
}

/* Moving scanline bar */
.scanline-bar {
  width: 100%;
  height: 100px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.05) 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
  position: absolute;
  animation: scanline 8s linear infinite;
}

/* CRT text color separation / chromatic aberration */
@keyframes textShadow {
  0% { text-shadow: 0.4px 0 1px rgba(0,30,255,0.5), -0.4px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  5% { text-shadow: 2.8px 0 1px rgba(0,30,255,0.5), -2.8px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  /* ... continues with random offsets ... */
}
```

### Screen Flicker

```css
@keyframes flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.8; }
  94% { opacity: 1; }
  96% { opacity: 0.9; }
  97% { opacity: 1; }
}

.animate-flicker {
  animation: flicker 4s linear infinite;
}
```

---

## 6. shadcn/ui Components for Landing Pages

### Components Already Installed

| Component | Path | Use Case |
|-----------|------|----------|
| Button | `@/components/ui/button` | CTAs, navigation actions |
| Card | `@/components/ui/card` | Feature cards, pricing, testimonials |
| Badge | `@/components/ui/badge` | Status indicators, tags |
| Tabs | `@/components/ui/tabs` | Content sections, feature showcases |
| Accordion | `@/components/ui/accordion` | FAQ sections, collapsible content |
| Separator | `@/components/ui/separator` | Visual dividers |
| Navigation Menu | `@/components/ui/navigation-menu` | Main site navigation |
| Sheet | `@/components/ui/sheet` | Mobile nav drawer, side panels |
| Dialog | `@/components/ui/dialog` | Modals, signup forms, detail views |

### Usage Examples

#### Button with Matrix Styling

```tsx
import { Button } from "@/components/ui/button"

<Button
  variant="default"
  className="bg-matrix text-black hover:bg-matrix-dim animate-glow-pulse"
>
  Take the Red Pill
</Button>

<Button
  variant="outline"
  className="border-matrix text-matrix hover:bg-matrix/10"
>
  Learn More
</Button>
```

#### Card with Glass Effect

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card className="glass-card">
  <CardHeader>
    <CardTitle className="text-matrix">Feature Title</CardTitle>
    <CardDescription className="text-muted-foreground">
      Feature description text
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

#### Navigation Menu

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
          <li>
            <NavigationMenuLink href="/product-1">
              Product 1
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

#### Tabs for Feature Showcase

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="overview" className="w-full">
  <TabsList className="bg-secondary">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="features">Features</TabsTrigger>
    <TabsTrigger value="pricing">Pricing</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <Card>...</Card>
  </TabsContent>
</Tabs>
```

#### Accordion for FAQ

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Red Pill Apps?</AccordionTrigger>
    <AccordionContent>
      Description text here...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Recommended Additional Components

To add more components for a landing page:

```bash
# Hero / marketing sections
npx shadcn@latest add avatar          # Team/testimonial avatars
npx shadcn@latest add carousel        # Image/feature carousels
npx shadcn@latest add skeleton        # Loading states
npx shadcn@latest add tooltip         # Interactive hints

# Interactive elements
npx shadcn@latest add dropdown-menu   # Action menus
npx shadcn@latest add toggle          # Feature toggles
npx shadcn@latest add scroll-area     # Custom scrollable regions

# Forms (if needed for CTAs)
npx shadcn@latest add input           # Email signup, search
npx shadcn@latest add textarea        # Contact forms
npx shadcn@latest add label           # Form labels
```

---

## 7. Best Animation Patterns

### Pattern 1: Staggered Children on Scroll

The most common landing page pattern -- items fade/slide in one by one as the section scrolls into view.

```tsx
"use client"
import { motion } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {features.map((feature, i) => (
        <motion.div key={i} variants={itemVariants}>
          <Card className="glass-card">
            {/* feature content */}
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
```

### Pattern 2: Scroll-Linked Progress / Parallax

```tsx
"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export function ParallaxHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Background content / matrix rain */}
      </motion.div>
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        style={{ y: textY, opacity }}
      >
        <h1 className="text-6xl font-bold gradient-text-matrix">
          Red Pill Apps
        </h1>
      </motion.div>
    </section>
  )
}
```

### Pattern 3: Entrance Animation with Initial Delay Sequence

For hero sections where elements appear in a choreographed sequence:

```tsx
"use client"
import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Logo / icon first */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Logo />
      </motion.div>

      {/* Headline second */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Welcome to the Matrix
      </motion.h1>

      {/* Subtitle third */}
      <motion.p
        className="text-muted-foreground mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Choose your path
      </motion.p>

      {/* CTA buttons last */}
      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <Button>Red Pill</Button>
        <Button variant="outline">Blue Pill</Button>
      </motion.div>
    </section>
  )
}
```

### Pattern 4: Scroll-Reveal Wrapper (Reusable)

A reusable component that wraps any content with scroll-triggered animation:

```tsx
"use client"
import { motion, type Variant } from "motion/react"
import { type ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  className?: string
}

const getInitial = (direction: Direction): Variant => {
  const offset = 40
  switch (direction) {
    case "up":    return { opacity: 0, y: offset }
    case "down":  return { opacity: 0, y: -offset }
    case "left":  return { opacity: 0, x: offset }
    case "right": return { opacity: 0, x: -offset }
    case "none":  return { opacity: 0 }
  }
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

Usage:

```tsx
<ScrollReveal direction="up" delay={0.2}>
  <Card>...</Card>
</ScrollReveal>

<ScrollReveal direction="left" delay={0.4}>
  <Card>...</Card>
</ScrollReveal>
```

### Pattern 5: Page/Route Transition

Using AnimatePresence for page transitions:

```tsx
// app/template.tsx
"use client"
import { motion } from "motion/react"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
```

### Pattern 6: Hover Card with Depth

```tsx
<motion.div
  whileHover={{
    scale: 1.02,
    rotateX: 2,
    rotateY: -2,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  }}
  whileTap={{ scale: 0.98 }}
  className="glass-card rounded-lg p-6 cursor-pointer"
  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
>
  <Card>...</Card>
</motion.div>
```

---

## 8. Performance Tips

### GPU-Accelerated Properties

Only these CSS properties are composited on the GPU (no reflow/repaint):
- `transform` (translate, scale, rotate, skew)
- `opacity`
- `filter` (blur, brightness, etc.)

**Always prefer these over:** `width`, `height`, `top`, `left`, `margin`, `padding`, `border`, `color`, `background-color`

```tsx
// GOOD - GPU accelerated
<motion.div animate={{ x: 100, opacity: 0.5, scale: 1.1 }} />

// BAD - triggers layout recalculation
<motion.div animate={{ width: "200px", marginLeft: "100px" }} />

// GOOD - use scale instead of width/height
<motion.div animate={{ scaleX: 1.5, scaleY: 1.2 }} />
```

### will-change

Hint to the browser to promote elements to their own GPU layer:

```css
/* Apply sparingly -- only on elements that WILL animate */
.will-animate {
  will-change: transform, opacity;
}
```

```tsx
<motion.div
  style={{ willChange: "transform" }}
  animate={{ x: 100 }}
/>
```

**Rules for will-change:**
- Apply only to elements that will definitely animate
- Do NOT apply to too many elements (increases memory)
- Remove after animation completes if it is one-shot
- Motion handles this automatically for most cases

### Canvas Animation Performance

```tsx
// Use requestAnimationFrame, not setInterval
const animationRef = useRef<number>(0)

useEffect(() => {
  function draw() {
    // ... drawing logic ...
    animationRef.current = requestAnimationFrame(draw)
  }
  animationRef.current = requestAnimationFrame(draw)

  return () => cancelAnimationFrame(animationRef.current)
}, [])

// Store frequently-changing values in refs, not state
const dropsRef = useRef<number[]>([])  // avoids re-renders
```

### Reducing Motion for Accessibility

```tsx
import { useReducedMotion } from "motion/react"

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
      }}
    />
  )
}
```

CSS approach:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-scanline,
  .animate-flicker,
  .animate-text-glow,
  .animate-glow-pulse {
    animation: none !important;
  }
}
```

### Lazy Loading Animations

Only render heavy animations (like matrix rain) when they are in view:

```tsx
"use client"
import { useState, useEffect, useRef } from "react"

function LazyMatrixRain() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative h-screen">
      {isVisible && <MatrixRain />}
    </div>
  )
}
```

### Avoiding Common Pitfalls

1. **Do not animate layout-triggering properties**: Use `transform` and `opacity` instead of `width`, `height`, `top`, `left`.

2. **Use `layout` prop sparingly**: Layout animations are powerful but expensive. Only apply `layout` to elements that genuinely change position/size.

3. **Set `viewport={{ once: true }}`**: For scroll-triggered animations that should only play once, preventing repeated calculations.

4. **Batch DOM reads/writes**: Motion does this internally, but if mixing with vanilla DOM manipulation, group reads before writes.

5. **Limit simultaneous animations**: On mobile, keep concurrent animations under 10 elements. Use stagger to spread the load.

6. **Debounce resize handlers**: For responsive canvas (matrix rain), debounce the resize handler:

```tsx
useEffect(() => {
  let timeout: NodeJS.Timeout
  const resize = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }, 150)
  }
  window.addEventListener("resize", resize)
  return () => window.removeEventListener("resize", resize)
}, [])
```

7. **Use `transform: translateZ(0)` or `translate3d(0,0,0)` as a last resort** to force GPU compositing -- Motion handles this automatically.

8. **Profile with Chrome DevTools**: Open Performance tab, record interactions, and look for long frames (>16.6ms for 60fps). The Rendering tab can show paint flashing and layer borders.

---

## Quick Reference: Import Cheat Sheet

```tsx
// Motion
import { motion, AnimatePresence, useScroll, useTransform,
         useSpring, useMotionValueEvent, useAnimate,
         useReducedMotion, stagger } from "motion/react"

// shadcn/ui components
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription,
         CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionItem, AccordionTrigger,
         AccordionContent } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem,
         NavigationMenuLink, NavigationMenuTrigger,
         NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
         DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Utilities
import { cn } from "@/lib/utils"
```

---

## Sources

- [Next.js 16 Blog Post](https://nextjs.org/blog/next-16)
- [Next.js 16.1 Blog Post](https://nextjs.org/blog/next-16-1)
- [Next.js View Transitions Config](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition)
- [shadcn/ui Installation - Next.js](https://ui.shadcn.com/docs/installation/next)
- [shadcn/ui Theming](https://ui.shadcn.com/docs/theming)
- [shadcn/ui Dark Mode - Next.js](https://ui.shadcn.com/docs/dark-mode/next)
- [shadcn/ui Tailwind v4 Migration](https://ui.shadcn.com/docs/tailwind-v4)
- [shadcn/ui CLI Reference](https://ui.shadcn.com/docs/cli)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS v4.0 Blog Post](https://tailwindcss.com/blog/tailwindcss-v4)
- [Motion for React - Docs](https://motion.dev/docs/react)
- [Motion Component](https://motion.dev/docs/react-motion-component)
- [Motion Scroll Animations](https://motion.dev/docs/react-scroll-animations)
- [Motion useScroll](https://motion.dev/docs/react-use-scroll)
- [Motion AnimatePresence](https://motion.dev/docs/react-animate-presence)
- [Motion Layout Animations](https://motion.dev/docs/react-layout-animations)
- [Motion Transitions](https://motion.dev/docs/react-transitions)
- [Motion Stagger](https://motion.dev/docs/stagger)
- [Motion Spring](https://motion.dev/docs/spring)
- [Motion Upgrade Guide](https://motion.dev/docs/react-upgrade-guide)
- [Motion Typewriter](https://motion.dev/docs/react-typewriter)
- [Motion ScrambleText](https://motion.dev/docs/react-scramble-text)
- [React ViewTransition](https://react.dev/reference/react/ViewTransition)
- [Matrix Rain Effect - Maarten Hus](https://www.maartenhus.nl/blog/matrix-rain-effect/)
- [CRT Terminal in CSS + JS](https://dev.to/ekeijl/retro-crt-terminal-screen-in-css-js-4afh)
- [CSS GPU Acceleration Guide](https://www.lexo.ch/blog/2025/01/boost-css-performance-with-will-change-and-transform-translate3d-why-gpu-acceleration-matters/)
- [MDN CSS/JS Animation Performance](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
- [LogRocket: React Scroll Animations with Framer Motion](https://blog.logrocket.com/react-scroll-animations-framer-motion/)
