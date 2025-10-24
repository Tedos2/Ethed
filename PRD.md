# Product Requirements Document (PRD)
## Ethed Landing Page

---

## 1. Project Overview

### 1.1 Product Name
**Ethed** - AI Agent Automation Solutions

### 1.2 Product Vision
Create a high-converting landing page that positions Ethed as the go-to solution for small business owners who need the capabilities of a perfect employee without the cost of hiring staff. The landing page will generate qualified leads through an intelligent call-booking flow that delivers immediate value to prospects.

---

## 2. Business Overview

### 2.1 What We Do
Ethed provides AI-agent automations and custom CRM solutions for small businesses. Our offerings include:

- **AI Agent Automations**
  - Conversational chatbots
  - End-to-end workflow automations
  - Custom CRM builds

All solutions are tailored to each client's specific needs and include built-in KPI tracking to measure and prove impact.

### 2.2 Target Market
**Primary Audience:** Small business owners

**Characteristics:**
- Want to expand capabilities but can't afford additional staff
- Need reliable, consistent task execution
- Require cost-effective solutions with measurable ROI
- Value tailored solutions over one-size-fits-all packages

### 2.3 Value Proposition
**Core Promise:** "The Perfect Employee" for businesses that can't afford one.

**Key Differentiators:**
- **Tailored Solutions:** Client-specific builds through joint scoping process
- **Fair Pricing:** Precise, project-based pricing - no sky-high retainers
- **Proven Impact:** Built-in KPI tracking to demonstrate real value
- **Reliability:** More consistent than human employees, cheaper, and executes exactly as designed

### 2.4 Problem We Solve
Small business owners face a critical challenge: they need additional help to grow but cannot afford to hire staff. Traditional hiring means:
- High salary costs
- Training time and resources
- Inconsistent performance
- Management overhead

**Our Solution:** AI agents that function as the "perfect employee" - affordable, consistent, and precisely configured to execute tasks exactly as the owner expects.

---

## 3. Current Portfolio & Expertise

### 3.1 Industry Focus
**Healthcare:**
- Built medical chatbot for first client (doctor)
- Understanding of healthcare workflows and compliance needs

**Education/Operations:**
- Ongoing operational and development automations for Richer College
- Experience with educational institution processes

**General Small Business:**
- Workflow optimization across various sectors
- Operational efficiency improvements

### 3.2 Service Offerings

**Custom Automation Development**
- Joint scoping process with client
- Tailored to specific business needs
- End-to-end implementation

**Automation Consulting**
- Process analysis and optimization recommendations
- Automation strategy development

**Custom CRM Development**
- Built when existing solutions don't fit client needs
- Integrated with automation workflows

**Pricing Model:** No fixed packages or tiers - project-based pricing determined through scoping process

---

## 4. Landing Page Goals & Strategy

### 4.1 Primary Objectives
1. **Generate Qualified Leads:** Attract small business owners actively seeking automation solutions
2. **Book Discovery Calls:** Convert visitors into scheduled consultations
3. **Deliver Upfront Value:** Provide immediate value even before engagement, building trust and demonstrating expertise

### 4.2 Primary Call-to-Action
**"Book a Call"** → Interactive question flow

**Question Flow Purpose:**
- Gather specific details about prospect's business challenges
- Help diagnose the problem before the scheduled call
- Qualify leads based on fit
- Demonstrate immediate value through structured problem analysis
- Make the discovery call more productive and focused

### 4.3 Success Metrics
- **Measurable Outcomes:** Hours saved per month for clients
- **KPI Tracking:** Embedded in every automation solution
- **Client Results:** Quantifiable business impact (to be showcased as case studies develop)

---

## 5. Brand Identity

### 5.1 Brand Assets
- Logo: Available and provided
- Brand colors: To be determined based on logo
- Typography: To be determined

### 5.2 Brand Message
**Core Narrative:** "We build the perfect employee for owners who can't afford one"

**Tone & Voice:**
- Professional yet accessible
- Results-focused and pragmatic
- Transparent about pricing and process
- Educational and consultative (not pushy sales)

**Key Messaging Pillars:**
1. Affordability without compromise
2. Tailored solutions, not templates
3. Measurable, proven results
4. The reliability of automation + the intelligence of AI

---

## 6. Content Strategy

### 6.1 Educational Content
**Approach:** Welcome and encouraged

**Purpose:**
- Establish thought leadership
- Educate prospects on automation possibilities
- Build trust through value-first content
- Support SEO and organic discovery

**Potential Topics:**
- How AI agents can replace repetitive tasks
- Cost comparison: AI automation vs. hiring
- Industry-specific automation use cases
- KPI tracking and measuring automation ROI

### 6.2 Social Proof
**Current Status:** No case studies, testimonials, or client logos yet

**Future Strategy:**
- Develop case studies from current clients (doctor, Richer College)
- Collect testimonials focused on hours saved and value delivered
- Build portfolio showcasing automation solutions (maintaining client confidentiality where needed)

---

## 7. Technical Stack & Architecture

### 7.1 Core Technologies
**Framework:** Next.js 16.0.0 (App Router)
- React 19.2.0 for UI components
- TypeScript 5.x for type safety
- Server-side rendering (SSR) for SEO optimization
- File-based routing with app directory structure

**Styling:** Tailwind CSS v4
- Utility-first CSS framework
- Custom design tokens via CSS variables
- Responsive design out of the box
- Dark mode support (optional)

**UI Component Library:** shadcn/ui
- Pre-built, accessible components (New York style)
- Radix UI primitives for accessibility
- Customizable with Tailwind CSS
- Lucide React icons for consistent iconography
- Form handling with React Hook Form + Zod validation
- Available components: Button, Card, Input, Textarea, Form, Label

**Development Tools:**
- ESLint for code quality
- PostCSS for CSS processing
- npm for package management
- React Hook Form for form state management
- Zod for schema validation
- Class Variance Authority (CVA) for component variants

### 7.2 Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & Tailwind imports
├── components/
│   ├── sections/          # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── Services.tsx
│   │   └── CTA.tsx
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/                # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── form.tsx
│       └── label.tsx
├── lib/
│   └── utils.ts           # Utility functions (cn for className merging)
public/                     # Static assets (images, fonts, etc.)
components.json             # shadcn/ui configuration
```

### 7.3 Question Flow / Lead Qualification System
- Interactive form or conversational interface
- Collects business context and pain points
- Provides diagnostic value to prospect
- Integrates with calendar booking system
- Captures lead information for follow-up

### 7.4 Performance Requirements
- Fast loading times (< 3 seconds)
- Mobile-responsive design (mobile-first approach)
- Accessible and user-friendly (WCAG 2.1 AA compliance)
- SEO optimized with proper meta tags and structured data
- Optimized images with Next.js Image component

### 7.5 Integration Needs
- Calendar booking system (Calendly, Cal.com, or similar)
- CRM or lead management system
- Analytics tracking (GA4 or similar)
- Email marketing platform (for follow-up sequences)
- Firecrawl MCP for web scraping and content analysis

### 7.6 Development Commands
```bash
npm run dev     # Start development server on localhost:3000
npm run build   # Build production-ready application
npm run start   # Start production server
npm run lint    # Run ESLint for code quality checks
```

---

## 8. Project Constraints & Considerations

### 8.1 Current Limitations
- No existing case studies or testimonials
- No public metrics to showcase yet
- No pricing tiers or packages defined

### 8.2 Opportunities
- Clean slate to build brand identity from ground up
- Flexibility to iterate based on early feedback
- Opportunity to build educational authority early
- First-mover advantage in specific niches (healthcare, education)

---

## 9. Next Steps

1. **Design Phase:**
   - Review reference websites for component inspiration
   - Identify MCP integrations to leverage
   - Create wireframes and mockups

2. **Content Development:**
   - Write compelling copy for each landing page section
   - Develop question flow for lead qualification
   - Create initial educational content pieces

3. **Technical Implementation:**
   - Select tech stack and framework
   - Build responsive landing page
   - Implement question flow and booking integration
   - Set up analytics and tracking

4. **Launch & Iteration:**
   - Deploy landing page
   - Monitor conversion metrics
   - Gather user feedback
   - Iterate based on performance data

---

## 10. Open Questions & Pending Decisions

- **Reference websites:** Which sites should inspire design and components? (Pending user input)
- **Question flow specifics:** What questions to ask in the booking flow?
- **Brand colors/fonts:** Final design system decisions based on logo
- **Hosting/deployment:** Where will the site be hosted? (Vercel recommended for Next.js)
- **Analytics platform:** Which analytics tool to use?
- **Booking system:** Calendly, Cal.com, or custom solution?

---

## 11. Current Implementation Status

### Completed ✓
- [x] Next.js 16.0.0 project initialized with TypeScript
- [x] Tailwind CSS v4 configured and ready
- [x] shadcn/ui component library installed and configured
  - Button, Card, Input, Textarea, Form, Label components
  - React Hook Form + Zod validation ready
  - Lucide React icons available
- [x] Project structure established (src/, components/, app/)
- [x] Initial landing page sections created:
  - Hero section with main value proposition
  - Problem/Solution comparison
  - Services showcase (3 key offerings)
  - Call-to-action section
- [x] SEO metadata configured
- [x] Firecrawl MCP connected for web scraping capabilities

### Next Steps
- [ ] Analyze reference websites for design inspiration
- [ ] Refine components based on reference designs
- [ ] Implement booking flow/lead qualification system
- [ ] Add Header and Footer components
- [ ] Integrate calendar booking system
- [ ] Set up analytics tracking
- [ ] Optimize images and assets
- [ ] Deploy to production

---

**Document Version:** 1.1
**Last Updated:** October 24, 2025
**Owner:** Ethed Team
