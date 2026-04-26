# Accredian Enterprise — Partial Clone

> A high-fidelity Next.js recreation of [enterprise.accredian.com](https://enterprise.accredian.com/), built as part of a Full Stack Developer Internship assignment.

**Live Demo:** - https://accredian-enterprise-clone-jet.vercel.app/
**GitHub:**-https://github.com/Ashraf1028-shekh/ACCREDIAN-ENTERPRISE-CLONE

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/your-username/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev

# 4. Open http://localhost:3000
```

### Build for production

```bash
npm run build
npm start
```

---

## 🏗️ Approach Taken

### 1. Research & Reference Analysis
I used Claude to fetch and analyze the content of `enterprise.accredian.com` and supplementary search results to understand the page's sections, copy, value propositions, and visual structure. From this I defined all sections: Hero, Features, Programs, How It Works, Testimonials, Partners, Lead Capture Form, and Footer.

### 2. Design System
- **Fonts:** DM Serif Display (headings) + DM Sans (body) via `next/font/google` — chosen for editorial elegance matching Accredian's premium positioning.
- **Colors:** Brand blue (`#3b5bdb`), deep navy (`#0f1f6b`), orange accent (`#f97316`) — derived from the reference site.
- **Motion:** CSS scroll-reveal (`IntersectionObserver`), floating card animation, auto-rotating testimonial carousel, animated number counters, and an infinite marquee ticker.

### 3. Component Architecture
Each section is a self-contained Client Component (`'use client'`) with its own data, animation logic, and styles. Data (programs, testimonials, features, partners) is co-located as constants — easily replaceable with API calls.

```
src/app/
├── layout.js           # Root layout, fonts, global metadata
├── globals.css         # Tailwind base + custom utility classes
├── page.js             # Root page — composes all sections
├── api/
│   └── leads/route.js  # Next.js API Route (POST + GET)
└── components/
    ├── Navbar.js        # Sticky responsive nav with scroll detection
    ├── Hero.js          # Full-screen hero + animated dashboard card
    ├── Features.js      # 8-feature grid with staggered reveal
    ├── Programs.js      # Filterable program catalog
    ├── HowItWorks.js    # 4-step process on dark background
    ├── Testimonials.js  # Auto-rotating carousel + card grid
    ├── Partners.js      # Academic partners + enterprise marquee
    ├── ContactForm.js   # Validated lead capture form
    └── Footer.js        # Multi-column footer
```

### 4. API Integration
A Next.js API Route at `/api/leads` handles form submissions:
- **POST** `/api/leads` — validates and stores lead data
- **GET** `/api/leads` — returns all captured leads (protect with auth in production)

The in-memory store is intentionally simple for this demo. Production would use Supabase, PlanetScale, or Prisma + PostgreSQL.

---

## 🤖 AI Usage Explanation

This project used **Claude (claude.ai)** extensively throughout development:

| Area | AI Contribution | Manual Improvements |
|------|----------------|---------------------|
| **Content research** | Fetched & analyzed the reference site, extracted copy, features, program names, partner institutions, and testimonials | Verified accuracy, rewrote marketing copy to avoid verbatim reproduction |
| **Component scaffolding** | Generated initial JSX structure for all 8+ components | Refined responsive breakpoints, fixed mobile layout bugs, adjusted padding/spacing for visual quality |
| **Animation logic** | Generated `IntersectionObserver` scroll-reveal pattern and counter animation | Tuned easing curve (`1 - Math.pow(1 - t, 3)` cubic ease-out), adjusted threshold values per component |
| **Tailwind config** | Generated color palette, font variables, keyframe animations | Added `animate-delay-*` utilities, custom `mesh-bg` gradient, `glass-card`, and `gradient-text` classes |
| **API route** | Scaffolded the leads API with validation logic | Added server-side email regex, structured error responses, production TODO comments |
| **CSS design** | Generated hero gradient, grid overlay SVG pattern, wave SVG divider | Adjusted gradient stops, wave path, shadow values manually |
| **Data** | Generated mock programs, testimonials, partner lists | Verified institution names, adjusted role titles and company names for realism |

**Workflow:** AI → review → refine → test in browser → iterate. No output was used verbatim without review.

---

## ✅ Functional Requirements Checklist

- [x] **Fully responsive** — mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- [x] **Sticky navigation** — scroll-aware with background transition
- [x] **Mobile hamburger menu** — animated toggle with smooth height transition
- [x] **Smooth scroll** — all nav links and CTAs scroll to sections
- [x] **Scroll animations** — `IntersectionObserver` reveal on all sections
- [x] **Animated stat counters** — cubic ease-out counting animation in Hero
- [x] **Filterable programs** — client-side category filtering without page reload
- [x] **Auto-rotating testimonials** — 5s interval carousel with manual dot control
- [x] **Infinite partner marquee** — CSS + cloned items for seamless loop
- [x] **Lead capture form** — client + server validation, loading/success/error states
- [x] **API route** — `/api/leads` POST endpoint stores submissions
- [x] **SEO metadata** — title, description, keywords, Open Graph tags
- [x] **Reusable components** — each section is isolated and independently testable
- [x] **Clean code** — consistent naming, no dead code, descriptive comments

---

## 🔧 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14.2.3 | App Router, SSR, API Routes |
| React | 18 | UI framework |
| Tailwind CSS | 3.3 | Utility-first styling |
| next/font | built-in | Self-hosted Google Fonts (DM Serif Display, DM Sans) |

No external UI component libraries were used — all components are built from scratch.

---

## 🌟 Improvements with More Time

### High Priority
- **Real database** — Replace in-memory leads store with Supabase or PlanetScale for persistence
- **CRM integration** — Auto-push leads to HubSpot or Salesforce via webhook
- **Email notifications** — Resend or SendGrid confirmation email to the prospect + internal alert

### UI / UX
- **Framer Motion** — Page transitions and more fluid component animations
- **Dark mode** — Toggle with `next-themes`, all CSS variables already structured for it
- **Skeleton loaders** — Loading states for any async data sections

### Features
- **Program detail pages** — Dynamic routes `/programs/[slug]` with full curriculum
- **ROI Calculator** — Interactive tool (employee count × skill gap → projected ROI)
- **Admin dashboard** — Protected route at `/admin` to view and export captured leads
- **Blog / Resources section** — CMS-backed (Contentful or Sanity)

### Performance
- **Image optimization** — Replace emoji with `next/image` optimized assets
- **React Query / SWR** — For any server-side data fetching
- **Lighthouse audit** — Target 95+ across all metrics
- **Analytics** — Vercel Analytics + Posthog for conversion tracking

---

## 📦 Deployment

This project is configured for zero-config Vercel deployment:

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — Vercel auto-detects Next.js

No environment variables required for the base build.

---

## 📄 License

Built for educational/assignment purposes. Reference design belongs to Accredian.
