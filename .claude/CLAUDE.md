# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Ethed Landing Page** - a Next.js-based marketing website for an AI automation business targeting small business owners. The core value proposition is "The Perfect Employee, Without the Cost of Hiring" - positioning AI-powered automations, chatbots, and custom CRM solutions as affordable alternatives to hiring staff.

**Business Context:** Ethed provides tailored automation solutions with built-in KPI tracking, focusing on measurable ROI for small businesses. Primary goal is lead generation through an intelligent call-booking flow that delivers immediate value to prospects.

See `PRD.md` for complete business requirements, target audience, and product strategy.

## Development Commands

```bash
npm run dev     # Start development server (localhost:3000)
npm run build   # Build for production
npm run start   # Run production build
npm run lint    # Run ESLint checks
```

## Tech Stack Architecture

### Framework & Core
- **Next.js 16.0.0** with App Router (React 19.2.0, TypeScript 5.x)
- **Styling:** Tailwind CSS v4 with CSS variables for design tokens
- **UI Components:** shadcn/ui (New York style) built on Radix UI primitives
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

### Project Structure Philosophy

```
src/
├── app/              # Next.js App Router - routing and pages
├── components/
│   ├── sections/     # Landing page sections (Hero, Services, CTA, etc.)
│   ├── layout/       # Reusable layout components (Header, Footer)
│   └── ui/           # shadcn/ui components - DO NOT edit directly
└── lib/              # Utilities (cn for className merging, etc.)
```

**Key Architecture Decisions:**

1. **App Router Pattern:** Uses Next.js 13+ App Router with RSC (React Server Components). All routes are in `src/app/`, with `layout.tsx` for shared layouts and `page.tsx` for route content.

2. **Component Organization:**
   - `sections/` contains page-specific sections that compose the landing page
   - `ui/` contains shadcn components - these are copied into your codebase and can be customized, but avoid direct edits when possible
   - Use composition to build features from shadcn primitives

3. **Styling Strategy:**
   - Tailwind CSS v4 with new `@theme` syntax in `globals.css`
   - Design tokens defined as CSS variables (colors, radius, spacing)
   - Use `cn()` utility from `lib/utils.ts` to merge Tailwind classes safely
   - shadcn components use CVA (Class Variance Authority) for variants

4. **Import Aliases:**
   - `@/` maps to `src/` (e.g., `@/components/ui/button`)
   - Configured in `tsconfig.json` and `components.json`

## shadcn/ui Integration

**Configuration:** `components.json` defines shadcn setup (New York style, neutral base color)

**Adding Components:**
```bash
npx shadcn@latest add [component-name]
```

**Currently Available:** Button, Card, Input, Textarea, Form, Label

**Important:** shadcn components are copied into `src/components/ui/` and become part of your codebase. You own them and can customize, but prefer composition over modification.

## Landing Page Architecture

The landing page follows a modular section-based approach:

1. **Hero** - Main value proposition and CTA
2. **ProblemSolution** - Contrasts traditional hiring vs. AI automation
3. **Services** - Showcases three core offerings (chatbots, workflows, CRM)
4. **CTA** - Final conversion point for booking calls

**Design Pattern:** Each section is a self-contained component in `src/components/sections/`, imported and composed in `src/app/page.tsx`. This makes it easy to reorder, A/B test, or replace sections.

## Brand Guidelines

**Messaging Core:**
- Value Prop: "The Perfect Employee, Without the Cost of Hiring"
- Tone: Professional yet accessible, results-focused, transparent
- Avoid: Pushy sales language, unrealistic promises, jargon without explanation

**Target Audience:** Small business owners who need help scaling but can't afford staff. They value measurable ROI and tailored solutions over generic packages.

## Development Workflow Notes

### When Adding New Sections
1. Create in `src/components/sections/[SectionName].tsx`
2. Import and add to `src/app/page.tsx`
3. Use shadcn components for UI primitives (buttons, cards, etc.)
4. Keep sections mobile-first responsive (Tailwind breakpoints: sm, md, lg, xl)

### When Working with Forms
- Use React Hook Form + Zod for validation
- Import shadcn Form components for consistent styling
- Follow the booking flow goal: gather business context while providing immediate value

### When Styling
- Prefer Tailwind utilities over custom CSS
- Use design tokens from `globals.css` (e.g., `bg-background`, `text-foreground`)
- Dark mode support is available via `.dark` class and CSS variables
- Use `cn()` from `lib/utils` when conditionally combining classes

### Performance Considerations
- Use Next.js `<Image>` component for all images (automatic optimization)
- Lazy load sections below the fold if they become heavy
- Target < 3 second page load times
- Mobile-first, responsive design is critical

## Future Integration Points

**Pending implementations (see PRD.md for details):**
- Calendar booking system integration (Calendly/Cal.com)
- Lead qualification question flow
- Analytics tracking (GA4 or similar)
- CRM integration for lead capture
- Header and Footer components

## MCP Integration

**Firecrawl MCP:** Configured for web scraping and content analysis (used to analyze reference websites for design inspiration).

## Important Files

- `PRD.md` - Complete product requirements and business context
- `components.json` - shadcn/ui configuration
- `src/app/globals.css` - Design tokens and Tailwind theme
- `src/app/layout.tsx` - SEO metadata and root layout
- `package.json` - All dependencies and scripts

## Deployment

Recommended: **Vercel** (optimized for Next.js, zero-config deployment)

The project is configured for production builds with `npm run build`. Next.js will generate optimized static and server-rendered pages.
