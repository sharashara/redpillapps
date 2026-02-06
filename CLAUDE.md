# Red Pill Apps - Project Documentation

## Project Overview
- **Company:** Red Pill Apps LLC
- **Domain:** redpillapps.com
- **Type:** Boutique AI and automation app developer
- **Repo:** github.com/sharashara/redpillapps

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS 4 + shadcn/ui (new-york style)
- **Animations:** Motion (formerly Framer Motion) + custom CSS keyframes
- **Components:** shadcn/ui (button, card, badge, tabs, accordion, separator, navigation-menu, sheet, dialog)
- **Deployment:** Vercel (connected to GitHub for auto-deploy)
- **Domain:** Namecheap (see DOMAIN_SETUP.md)

## Design Decisions

### Theme: Matrix / Terminal / Cyberpunk
- **Primary background:** #0a0a0a (near-black, not pure black)
- **Matrix green accent:** #00ff41 (primary brand color for tech/code elements)
- **Red Pill accent:** #ff0040 (brand color for CTAs and emotional emphasis)
- **Typography:** Geist Sans (body) + Geist Mono (code/terminal elements)
- Dark theme ONLY - no light mode toggle (deliberate choice for brand cohesion)
- Glass morphism cards with subtle green tint borders

### Animations
- Matrix rain: Full-screen canvas with Katakana + alphanumeric characters at 15% opacity
- Terminal typing effect: Rotating taglines with blinking cursor
- Glitch text: Periodic character scramble on "Red Pill" heading
- Scroll reveal: Fade-up entrance animations on all sections (once-only trigger)
- Glow pulse: CTAs have animated box-shadow glow effects
- CRT scanlines: Repeating-gradient pseudo-element overlay
- All animations respect `prefers-reduced-motion: reduce`

### Site Structure (Single Page)
1. **Hero** - Full viewport, Matrix rain BG, terminal typing, dual CTAs
2. **Services** - 3x2 grid of service cards with glass morphism
3. **Social Proof** - 3 testimonial cards with quotes
4. **Process** - 4-step process with terminal commands
5. **Tech Stack** - Auto-scrolling ticker of technologies
6. **About** - Split layout: copy + code philosophy + 2x2 stats grid
7. **FAQ** - Accordion with 6 common questions
8. **CTA** - Final conversion section with email/call CTAs
9. **Footer** - Logo, nav links, copyright, status bar

### Conversion Optimization
- Dual CTA pattern throughout (primary action + low-commitment alternative)
- Red pill CTA color (#ff0040) creates urgency against dark background
- Terminal/command aesthetic reinforces technical credibility
- Social proof placed early (after services, before process details)
- FAQ addresses common objections before final CTA
- Email displayed in terminal format for brand consistency
- Multiple scroll-depth CTAs (hero, mid-page, dedicated CTA section)

## Research Documentation
All research is stored in `docs/`:
- `docs/ai-automation-trends-2026.md` - Comprehensive AI/automation industry trends (50+ sources)
- `docs/design-principles.md` - High-converting design, emotional design, dark theme, CRO best practices
- `docs/tech-stack-reference.md` - Technical reference for Next.js 16, shadcn/ui, Motion, animation patterns
- `docs/website-inspiration.md` - Analysis of Linear, Vercel, Cursor, Anthropic, Midjourney, Jasper + cyberpunk design

## File Structure
```
src/
  app/
    globals.css          # Custom theme, animations, scrollbar
    layout.tsx           # Root layout with metadata, OG tags
    page.tsx             # Main page composing all sections
  components/
    matrix-rain.tsx      # Canvas-based matrix rain background
    terminal-text.tsx    # Typewriter/terminal typing effect
    glitch-text.tsx      # Periodic glitch/scramble text effect
    scroll-reveal.tsx    # Reusable scroll-triggered animation wrapper
    navigation.tsx       # Fixed nav with mobile sheet menu
    sections/
      hero.tsx           # Hero section
      services.tsx       # Services grid
      social-proof.tsx   # Testimonials
      process.tsx        # 4-step process
      tech-stack.tsx     # Scrolling tech ticker
      about.tsx          # About section with code block
      faq.tsx            # FAQ accordion
      cta.tsx            # Contact/conversion section
      footer.tsx         # Footer with status bar
  components/ui/         # shadcn/ui components
  lib/utils.ts           # shadcn utility functions
```

## Development Commands
```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
```

## Deployment
- Every push to `main` triggers Vercel auto-deploy
- See DOMAIN_SETUP.md for Namecheap DNS configuration
