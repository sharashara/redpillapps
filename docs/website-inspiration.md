# Website Design Inspiration Research

A structured analysis of the best AI/tech company websites for design inspiration, with focus on dark themes, animations, and effective visual communication.

---

## Table of Contents

1. [Linear.app](#1-linearapp)
2. [Vercel.com](#2-vercelcom)
3. [Cursor.com](#3-cursorcom)
4. [Anthropic.com](#4-anthropiccom)
5. [Midjourney.com](#5-midjourneycom)
6. [Jasper.ai](#6-jasperai)
7. [Cyberpunk / Matrix Themed Sites](#7-cyberpunk--matrix-themed-sites)
8. [Additional AI Company Inspiration](#8-additional-ai-company-inspiration)
9. [Dark Theme Best Practices](#9-dark-theme-best-practices)
10. [2026 Design Trends for AI Companies](#10-2026-design-trends-for-ai-companies)
11. [Key Takeaways and Recommendations](#11-key-takeaways-and-recommendations)

---

## 1. Linear.app

**Category:** Project management / Developer tools

### Color Palette

- **Dark theme by default** with CSS custom properties for dynamic theming
- Hierarchical text colors: `--color-text-primary`, `--color-text-tertiary`, `--color-text-quaternary`
- Status accent colors: red, orange, green for contextual indicators
- Deep blacks and charcoals with subtle gradients for depth

### Typography

- **Inter** variable font used throughout for responsive scalability
- Modular type scale from `--title-8-size` down to `--text-mini-size`
- `text-wrap: balance` for elegant headline wrapping
- Bold, aspirational headlines balanced with readable body copy

### Animation Techniques

- Hardware concurrency detection to tailor animation complexity to device capability
- Lazy-loaded images via CDN with format negotiation (`f=auto`)
- Progressive enhancement approach: base experience works without JS, enhanced experience for capable devices
- Smooth scrolling between sections
- Gradient text effects using `background-clip: text` and `box-decoration-break: clone`

### Hero Section

- **Headline:** "Meet the system for modern software development"
- Aspirational yet functional messaging
- Desktop and mobile optimized with hidden/shown classes
- Bold typography with balanced text wrapping for visual rhythm

### CTA Strategy

- **Primary:** "Start building" linking to `/signup`
- **Secondary:** Feature announcement prominently placed (e.g., "New: Linear Reviews (Beta)")
- CTAs integrated at multiple scroll points throughout the page
- Semantic HTML with consistent button styling

### What Makes It Effective

- **Performance-first:** CDN-optimized assets, lazy loading, format auto-negotiation
- **Visual hierarchy:** Graduated typography and color create intuitive scanning
- **Accessibility:** Proper heading hierarchy, semantic markup, ARIA attributes
- **Responsive:** CSS breakpoints at 768px and 640px
- **Progressive disclosure:** Features reveal naturally through scroll rather than overwhelming upfront
- Conceptual sections ("Purpose-built for product development," "Designed to move fast") tell a story

---

## 2. Vercel.com

**Category:** Developer platform / Cloud infrastructure

### Color Palette

- **Light/dark mode toggle** using the Geist design system
- Neutral, professional tones supporting both themes
- High contrast for readability and accessibility
- Semantic color mapping for light/dark variants via CSS variables (`--v`)

### Typography

- **Geist** custom font family (sans and mono variants)
- Large, bold headlines: "Build and deploy on the AI Cloud"
- Monospace fonts for code demonstrations
- System font fallbacks for performance

### Animation Techniques

- Sophisticated bot protection and performance monitoring scripts
- Gradient runway visual element in hero
- Smooth transitions between light/dark modes
- Clean, restrained motion design -- lets content breathe

### Hero Section

- Bold value proposition with visual runway element
- **Dual CTA:** "Deploy" / "Get a Demo"
- Customer testimonials with hard metrics ("build times went from 7m to 40s")
- Brand logos (Runway, Leonardo AI, Zapier) for social proof

### CTA Strategy

- **Primary:** "Start Deploying"
- **Secondary:** "Talk to an Expert" / Enterprise trial options
- **Contextual:** Template-specific deployment links
- Multiple conversion paths for different user types (individual dev vs. enterprise)

### How They Present Services

- Grid-based sections showcasing use cases: AI Apps, Web Apps, Commerce
- Developer-focused messaging: "Deploy automatically from git," code examples
- Framework templates (Next.js, React, Astro) for quick starts
- Technical benefits emphasized: "zero overhead," "globally performant"

### What Makes It Effective

- **Clean, spacious layout** with clear navigation hierarchy
- **Developer-first language** that builds credibility with technical audience
- **Social proof with metrics** (not just logos, but quantified results)
- **Multiple entry points** for different buyer personas
- The Geist design system creates visual consistency across all touchpoints

---

## 3. Cursor.com

**Category:** AI coding tool / IDE

### Color Palette

- **Light mode:** Background `#f7f7f4` (warm off-white), text `rgba(38, 37, 30, 0.55)` (muted brown), brand accent `#26251e` (deep charcoal)
- **Dark mode:** Background `#14120b`, text `#edecec`
- Respects system `prefers-color-scheme: dark`
- Warm, organic tones rather than the typical cold tech palette

### Typography

- **CursorGothic:** Proprietary display font (Regular, Italic, Bold, BoldItalic) for brand identity
- **BerkeleyMono:** Monospace typeface for code demonstrations
- Dual-typeface approach signals sophistication while maintaining readability
- System fonts as fallbacks for performance

### Animation Techniques

- **Spring-based layout animations** for UI demonstrations
- **Shared element transitions** between interactive states
- **RequestAnimationFrame** scheduling for smooth 60fps performance
- Interactive demo components showing real IDE interactions
- Mission Control interface demo with fluid motion

### Hero Section

- **Headline:** "Built to make you extraordinarily productive"
- Emphasizes AI as productivity multiplier, NOT replacement
- Interactive IDE demo with live task management UI (In Progress / Ready for Review states)
- Shows multi-model selection (OpenAI, Anthropic, Gemini, xAI)

### CTA Strategy

- **Primary:** "Download for macOS" (prominent, repeated placement)
- **Secondary:** "Try mobile agent"
- **Contextual:** "Learn about agentic development"
- Contrasting backgrounds on CTAs (`rgba(38, 37, 30, 0.06)` in light mode)
- CTAs at multiple scroll depths: hero, feature sections, footer

### How They Present AI Capabilities

- "Complete codebase understanding" via semantic search
- Feature separation: Tab (autocomplete), Agents (autonomous), Code Review (BugBot)
- Integration ecosystem: GitHub, Slack, CLI, web
- Multi-model flexibility as differentiator

### What Makes It Effective

- **Social proof from authority figures:** Y Combinator, NVIDIA CEO, OpenAI President, Stripe Co-founder, shadcn creator
- **Concrete adoption metrics:** "Over 90% of developers at Salesforce now use Cursor"
- **Trust signals:** SOC 2 certification badge, enterprise focus ("half of Fortune 500")
- **Warm color palette** distinguishes from cold, clinical AI tool aesthetic
- **Proprietary typeface** creates unique brand identity
- Balances technical credibility with aspirational messaging for both individual devs and enterprise buyers

---

## 4. Anthropic.com

**Category:** AI research / Safety-focused AI company

### Color Palette

- Sophisticated neutral foundation with slate-based color system
- `--swatch--slate-dark`, `--swatch--cloud-light` CSS variables
- Warm accent: `#d97757` (rust/terracotta) for interactive elements and CTAs
- Restrained palette conveys professionalism; warm accent creates focal points

### Typography

- Fluid, responsive type system using `clamp()` functions scaling across viewports
- Display fonts: `1.125rem` to `5rem` for clear visual hierarchy
- Monospace option: `0.875rem` to `2rem` for technical credibility
- Line-height optimization and content containment for clean text rendering

### Animation Techniques

- Minimal, purposeful animations -- nothing gratuitous
- Focus states and reduced-motion preferences honored
- Clean transitions between sections
- Content-focused rather than animation-forward

### Hero Section

- **Achievement-led storytelling:** Featured story "Four Hundred Meters on Mars" (AI-planned rover navigation)
- Demonstrates capability through concrete results rather than product claims
- Narrative approach proves more persuasive than specifications

### CTA Strategy

- **Multiple conversion pathways:** "Try Claude" (trial), "Log in to Claude" (existing users), "Download app" (distribution), "Contact sales" (enterprise)
- Avoids aggressive urgency
- Clear hierarchical prominence between primary and secondary CTAs
- Consistent styling with warm accent color

### Trust-Building Design

- Safety commitments in **primary navigation**, not buried in footer
- Direct links to: interpretability, alignment science, responsible scaling
- Mission statement prominent: "AI will have a vast impact on the world. Anthropic is a public benefit corporation dedicated to securing its benefits and mitigating its risks."
- Comprehensive footer: Products, Models, Solutions, Company, Learn
- Links to "Security and compliance," "Responsible Scaling Policy," "Claude's Constitution"

### What Makes It Effective

- **Earned authority:** Achievement-focused messaging supersedes corporate boilerplate
- **Transparency-first navigation:** Safety as brand differentiator, not afterthought
- **Restrained design:** Communicates maturity, trust, and thoughtfulness
- **Device agnostic:** Fluid typography and layout systems work everywhere
- **Coherent visual language:** Consistent component patterns reduce cognitive load
- The warm accent color against neutral palette creates a human, approachable feel for an AI company

---

## 5. Midjourney.com

**Category:** Creative AI / Image generation

### Color Palette

- **Dark, gallery-like aesthetic** -- near-black backgrounds
- Minimal brand color interference -- lets AI-generated imagery dominate
- High contrast between dark backgrounds and vivid artwork
- Restrained UI chrome

### Typography

- Minimal text -- the visual work speaks for itself
- Clean, understated type that does not compete with imagery
- Functional labels and navigation only

### Hero Section

- **Gallery/showcase format:** Grid of AI-generated images as the primary content
- No traditional hero headline or CTA-heavy landing
- The product output IS the hero -- users immediately see what Midjourney creates
- "Work speaks for itself" philosophy

### CTA Strategy

- Minimalist -- the showcase itself is the conversion mechanism
- Low friction path to trying the tool
- Community-driven engagement rather than aggressive sales tactics

### What Makes It Effective

- **Product-as-hero:** Generated imagery serves as both demonstration and marketing
- **Gallery format** creates an art museum feel that elevates the product
- **Minimal branding clutter** puts 100% focus on output quality
- **Dark background** functions like a gallery wall, making images pop
- **Confidence in product quality** -- no need to explain, just show
- Unique among AI companies: primarily visual, almost no copywriting

---

## 6. Jasper.ai

**Category:** AI content/marketing platform

### Color Palette

- **Dark-mode aesthetic** with strategic color accents
- CSS custom properties for dynamic theming: `--swatch--${variant}-400`
- Modular color system where different sections activate distinct brand colors
- High contrast ratios for accessibility
- Opacity variations for hierarchy rather than harsh color shifts

### Typography

- Responsive typography using CSS `clamp()` from `0.75rem` to `5rem`
- Fluid scaling without breakpoint-dependent jumps
- Precise spacing control: default heading/paragraph margins removed
- Clean, enterprise-appropriate type hierarchy

### Animation Techniques

- **Rive illustrations** that pause/resume based on viewport visibility and tab focus (performance optimization)
- **GSAP-based animations** with Intersection Observer triggers
- **SplitText with staggered reveals:** `text-anim="display,stagger0.1,delay0"` for frame-by-frame "stop motion" text effects
- **Velocity-based slider swiping** that calculates optimal slide distance dynamically
- **Marquee animations** with CSS keyframe duplication, paused states that resume on intersection
- Touch/mouse handling with velocity-based physics

### Hero Section

- **Headline:** "Put AI agents to work for marketing"
- Animated Rive illustration as visual anchor
- **Dual CTAs:** Free Trial / Get Demo (different buyer stages)
- Positioning as "execution platform" rather than simple tool

### CTA Strategy

- Top-right persistent navigation CTAs
- Hero section dual buttons with contrasting visual weight
- Inline "Explore" links within feature sections
- Footer-anchored signup prompts
- Button state management (`disabled`, `opacity`) to guide attention

### How They Sell AI Services

- 100+ specialized agents, Content Pipelines, Brand IQ
- Workflow automation emphasis: "Connect data, creativity, and distribution in one intelligent system"
- Tiered solutions: "Publicly Available" vs. "Enterprise only"
- Solutions organized by **marketer role** (Product, Content, Performance, Brand) rather than feature-first

### What Makes It Effective

- **Progressive disclosure:** Features reveal through tabs and scrolling
- **Social proof:** Client logos and customer stories for B2B credibility
- **Role-based navigation:** Users find their use case quickly
- **Performance optimization:** Rive animations pause outside viewport, JS deferred to DOMContentLoaded
- **Sophisticated motion design** that guides attention through content hierarchy
- **Before/after visuals** of content pipelines show transformation value

---

## 7. Cyberpunk / Matrix Themed Sites

### Core Cyberpunk Design Elements

**Color Palettes:**
- Deep blacks (#000, #091833) with vibrant neon accents
- Magenta (#ea00d9), electric reds (#fc0d1b, #e14143)
- Cyan blues (#3dafc3), bright yellows (#f9ae08)
- Dark purples (#6f2eb9), bright greens (#b1f359)
- The signature "neon against darkness" aesthetic

**Typography:**
- **Russo Font:** Bold, angular aesthetic for headings
- **Oxanium:** Geometric, tech-forward body text
- **JockeyOne:** Distinctive, stylized accent headings
- Angular, distorted, and glitch-effect typefaces
- Digital/monospace fonts for data displays

**Visual Techniques:**
- High-contrast overlays with 50% opacity black filters
- Grid-based layouts with precise spacing (20px gaps)
- Angular borders and dotted-line styling
- Glitch effects: pixel-sorting, chromatic aberration
- Metallic textures and 3D elements

**Animation Techniques:**
- Matrix digital rain (green code rain) using HTML5 Canvas + requestAnimationFrame
- Neon glow pulse effects
- Glitch/distortion transitions
- Smooth scroll with parallax depth layers
- Scanline overlay effects

### Matrix Rain Implementation

- HTML5 Canvas-based animation with JavaScript
- Libraries available: matrixrain.js, SynthRain
- Customizable: colors, speed, character sets, density
- Performance note: Use requestAnimationFrame and limit canvas size for mobile
- Can serve as background element or loading state

### Cyberpunk Sites and Resources

- **dark.design** -- Curated collection of dark themed websites
- **cybereality.com** -- "The matrix was a documentary" -- cyberpunk aesthetic reference
- **Dribbble cyberpunk collections** -- Design concept inspiration
- **Behance cyberpunk projects** -- Full case study presentations
- **99designs cyberpunk gallery** -- 149+ design ideas

### Relevance to Red Pill Theme

The cyberpunk/Matrix aesthetic aligns directly with a "Red Pill" brand identity:
- Matrix green rain as interactive background element
- Neon accent colors against pure black backgrounds
- Glitch effects for transitions and hover states
- Terminal/monospace typography for technical credibility
- "Choose the red pill" metaphor maps to CTA actions
- Code rain can reveal hidden messages or transform into product showcases

---

## 8. Additional AI Company Inspiration

### Deepgram
- **Approach:** Product-led design with animated demonstrations
- **Palette:** Dark mode with bold fonts and colorful gradients
- **Key Feature:** Users can try voice AI models directly without converting
- **Takeaway:** Motion design and microinteractions as engagement hooks

### Cohere
- **Approach:** Clean layout with consistent design system
- **Palette:** Colorful backgrounds with subtle animations
- **Key Feature:** Neat typography and shape consistency across UI elements
- **Takeaway:** Enterprise-appropriate yet bold design through consistency

### Scale AI
- **Approach:** High-production motion design
- **Palette:** Distinct purple gradients on dark backgrounds
- **Key Feature:** Animated sequences (fighter jets) demonstrate design investment
- **Takeaway:** Significant motion design investment signals company scale

### HeyGen
- **Approach:** Product-showcasing with constant motion
- **Palette:** Gradient blur backgrounds in purple tones
- **Key Feature:** AI video quality demonstrated through embedded video
- **Takeaway:** Let product quality speak through embedded demonstrations

### Together AI
- **Palette:** Dark, neon-green interface
- **Key Feature:** Balances research credibility with modern product storytelling
- **Takeaway:** Neon green on dark creates a distinctive, matrix-adjacent feel

### Pika
- **Approach:** Immersive scrolling with community-generated content
- **Palette:** Vibrant, dynamic
- **Key Feature:** Witty, comical copywriting combined with user-created videos
- **Takeaway:** Community content as social proof and product demonstration

### ElevenLabs
- **Approach:** Feature-showcase with above-the-fold demos
- **Palette:** Restrained, enterprise-focused
- **Key Feature:** Voice gallery makes value obvious in seconds
- **Takeaway:** Interactive demos above the fold eliminate need for explanation

### Bland.ai
- **Approach:** Clarity-focused with minimal clutter
- **Palette:** Professional, neutral tones
- **Key Feature:** Confident product explanation with strong social proof
- **Takeaway:** Simplicity and confidence outperform complexity

### PlayerZero
- **Approach:** Sleek dark interface
- **Palette:** Dark with glowing accents and animated elements
- **Takeaway:** Glow effects on dark backgrounds create premium tech feel

---

## 9. Dark Theme Best Practices

### Why Dark Themes Work for AI/Tech Companies

- **Reduced eye strain** for developer audiences working long hours
- **Premium perception:** Dark backgrounds signal sophistication
- **Content focus:** Light content on dark backgrounds draws attention to key elements
- **Code readability:** Code blocks and syntax highlighting pop against dark backgrounds
- **AI-native signaling:** Dark mode has become the visual language of technically sophisticated brands
- **Theater effect:** Like Netflix's black background directs focus to thumbnails, dark themes direct focus to product demonstrations

### Implementation Best Practices

1. **Theme detection:** Respect `prefers-color-scheme: dark` from system settings
2. **User override:** Provide localStorage-based theme toggle
3. **Contrast ratios:** Maintain 4.5:1 minimum for WCAG accessibility
4. **Avoid pure black (#000):** Use near-blacks (#0a0a0a, #14120b) to reduce harshness
5. **Hierarchy through opacity:** Use opacity variations rather than multiple gray values
6. **Accent colors:** Use warm or neon accents sparingly to create focal points
7. **Glow effects:** Subtle illuminating borders on CTAs can boost click-through by ~15%
8. **Reduce motion:** Always honor `prefers-reduced-motion` media query

### Color Psychology in Dark Themes

| Color | Association | Best Used For |
|-------|------------|---------------|
| Electric blue/cyan | Innovation, intelligence | Tech features, links |
| Purple/violet | Creativity, premium | AI capabilities, gradients |
| Neon green | Matrix, code, growth | Developer tools, terminals |
| Warm orange/rust | Approachability, warmth | CTAs, human touch |
| Magenta/pink | Creativity, energy | Creative AI, highlights |
| Red | Urgency, power, "red pill" | CTAs, alerts, brand accent |

### The "AI Purple Problem"

A note of caution: blue-purple gradients have become so overused in AI company sites that they no longer differentiate. This stems from LLMs defaulting to Tailwind CSS's `indigo-500` in training data. For a distinctive brand, consider alternative palettes -- particularly:
- Neon green + black (Matrix/hacker aesthetic)
- Red + black (Red Pill brand alignment)
- Warm rust/terracotta + neutrals (Anthropic's approach)
- Cyan + dark charcoal (futuristic without being cliche)

---

## 10. 2026 Design Trends for AI Companies

### Top Trends

1. **Glow Effects and Luminous UI**
   - Neon glows, electric gradients, luminous accents on dark backgrounds
   - Subtle illuminating borders around CTAs increase click-through ~15%
   - CSS technique: Layer div blocks with CSS `filter` for custom glow
   - Warm neon oranges/pinks for creativity; electric blues/cyans for innovation

2. **Heroic Typography (72px+)**
   - Large expressive typeface as visual anchor
   - Strategic whitespace (60%+ of page area)
   - One bold display font + one clean body font maximum
   - Variable fonts for smooth scaling and delicate weight animations

3. **AI-Powered Personalization**
   - Dynamic layouts adapting to user behavior
   - CMS-driven content blocks with conditional visibility
   - Up to 25% gains in trial-to-paid conversion reported

4. **Brutalist and Authentic Aesthetics**
   - Bold sans-serif fonts, asymmetrical layouts, high contrast
   - Monochromatic palettes with intentional "roughness"
   - Breaks from the polished sameness of most SaaS sites
   - Conveys confidence and sincerity

5. **Functional Micro-Interactions**
   - Animations that serve specific purposes: progress, feedback, status
   - 25% improvements in completion rates reported
   - Scroll-triggered reveals and hover state changes
   - Not decorative -- each animation communicates something

6. **Interactive Product Demos Above the Fold**
   - Let users try before converting (Deepgram, ElevenLabs, Synthflow pattern)
   - Voice galleries, code playgrounds, live previews
   - Eliminates friction between "interested" and "convinced"

7. **Organic Shapes and AI-Generated Illustrations**
   - Replace stock photography with flowing shapes and blob designs
   - SVG morphing animations
   - Higher emotional engagement vs. generic imagery

8. **Dark Mode as Default**
   - AI-native companies are dark mode by default
   - Black backgrounds, light text, glowing neons, moody gradients
   - The design language of technically sophisticated brands

---

## 11. Key Takeaways and Recommendations

### For a "Red Pill" Themed AI Agency

Based on all research, here are the most impactful design patterns:

#### Color Palette Recommendation

```
Primary:       #0a0a0a (near-black background)
Secondary:     #1a1a1a (card/section backgrounds)
Accent Red:    #e63946 or #dc2626 (Red Pill brand -- CTAs, highlights)
Accent Green:  #00ff41 (Matrix code rain, terminal elements)
Text Primary:  #ededed (high contrast body text)
Text Muted:    rgba(255, 255, 255, 0.55) (secondary text)
Glow:          rgba(230, 57, 70, 0.4) (red glow for hover states)
```

#### Typography Strategy

- **Display font:** Custom or distinctive sans-serif (72px+ for heroes), consider angular/geometric faces
- **Body font:** Inter, Geist, or similar high-readability sans-serif
- **Code/terminal font:** Berkeley Mono, JetBrains Mono, or Fira Code
- **Approach:** Two fonts maximum. Let typography do heavy lifting.

#### Hero Section Approach

1. Bold, single-line headline (under 8 words)
2. Matrix code rain or particle animation as subtle background
3. Dual CTA: primary action + secondary "learn more"
4. One line of supporting copy maximum
5. Social proof immediately below (client logos or metric)

#### Animation Strategy (Priority Order)

1. **Matrix code rain** as background canvas element (performant, on-brand)
2. **Text reveal animations** with stagger effects (GSAP SplitText)
3. **Glow pulse** on CTAs and interactive elements
4. **Scroll-triggered section reveals** with subtle fade/slide
5. **Glitch effects** on hover states or transitions
6. Honor `prefers-reduced-motion` always

#### CTA Best Practices

- Primary CTA with glow effect on dark background
- Use "red pill" metaphor where appropriate
- Multiple CTAs at different scroll depths
- Dual CTA pattern: action + lower-commitment alternative
- Contrast button against background (red/green on black)

#### Trust-Building Elements

- Client logos and testimonials with real metrics (Cursor pattern)
- Case studies with quantified results (Vercel pattern)
- Interactive demos above the fold (ElevenLabs pattern)
- Transparent about process and methodology (Anthropic pattern)
- Social proof from recognized authority figures

#### Technical Implementation

- Respect `prefers-color-scheme` and `prefers-reduced-motion`
- Lazy load all images with format auto-negotiation
- Use Intersection Observer for scroll-triggered animations
- Canvas-based animations for backgrounds (Matrix rain)
- CSS custom properties for theme management
- Variable fonts for performance and animation
- GSAP for complex animation sequences
- Rive for interactive illustrations

---

## Sources

- [Top 32 AI Website Design Examples (Tilipman Digital)](https://www.tilipmandigital.com/resource-center/articles/ai-website-examples)
- [16 Best AI Website Design Examples (Webstacks)](https://www.webstacks.com/blog/ai-website-design-examples-inspiration)
- [Top Web Design Trends for AI Companies 2026 (Veza Digital)](https://www.vezadigital.com/post/top-web-design-trends-for-ai-companies)
- [7 Emerging Web Design Trends for SaaS in 2026 (EnviznLabs)](https://enviznlabs.com/blogs/7-emerging-web-design-trends-for-saas-in-2026-ai-layouts-glow-effects-and-beyond)
- [Dark Themed Web Design Inspiration (dark.design)](https://www.dark.design/)
- [Trending Dark Mode Website Examples (Dorik)](https://dorik.com/blog/dark-mode-website-examples)
- [Best Dark-Themed Designs for Software Companies (Nixar)](https://www.nixar.io/blog-posts/best-dark-themed-website-designs-for-software-companies)
- [Cyberpunk Design Trends (Brainstorm Projects Studio)](https://brainstormprojects.studio/cyberpunk-design-style/)
- [Cyberpunk Design Ideas (99designs)](https://99designs.com/inspiration/designs/cyberpunk)
- [AI Purple Problem Analysis (DEV Community)](https://dev.to/jaainil/ai-purple-problem-make-your-ui-unmistakable-3ono)
- [Dark Mode Should You (Carilu)](https://www.carilu.com/p/should-you-dark-mode-your-brand-to)
- [Top AI Design Agencies 2026 (Superside)](https://www.superside.com/blog/ai-design-agencies)
- [Matrix Code Rain (GitHub - Rezmason)](https://github.com/Rezmason/matrix)
- [SynthRain Cyberpunk Animation (GitHub)](https://github.com/Saganaki22/SynthRain)
- [Best AI SaaS Landing Pages 2026 (Medium)](https://medium.com/@alphadesignglobal/analyzing-the-best-ai-saas-mvp-landing-pages-of-2026-4ea09d570714)
