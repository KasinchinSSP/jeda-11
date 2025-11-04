# Architecture Contract — JEDA 11 Website (v0.3)

> Scope: Build a 1‑page **Landing (Home)** demo using Sample Data Approach. Content and design references are externalized into `ContentMap.md` and `DesignSystem.md`.

---

## 1) Project Vision

- **Client**: บริษัท จีด้า 11 จำกัด (JEDA 11 Co., Ltd.)
- **Goal**: Present a sample landing page demonstrating structure, flow, and visual tone for future full‑site development.
- **Audience**: Internal review & client preview only.
- **Tone**: Professional, trustworthy, modern.

## 2) Tech Stack

- **Framework**: Next.js **15** (App Router)
- **Styling**: Tailwind CSS
- **Icons**: lucide-react (optional)
- **UI primitives (optional)**: shadcn/ui (Button, Card, Badge)
- **Deployment**: Vercel (static edge). `noindex,nofollow` metadata enabled.
- **Fonts**: Google Fonts — **Prompt** (TH headings) + **Inter** (EN body)

## 3) Design Reference

> For all color, typography, and layout tokens, refer to `DesignSystem.md (Green–Brown Theme)`.

## 4) Information Architecture (Phase 1)

- **Home** (Landing) — sections & components listed in §5
- **Products** (Phase 2) — structure placeholder only (see §7)

## 5) Home Page — Sections & Components

> Build atomics → composites. Keep components reusable for future pages.

**Render order (mobile-first):**

1. Header / Navigation
2. Hero (Full-viewport video background)
3. Company Intro / Services (One-Stop Service)
4. Product Highlights
5. Process Timeline (How it works)
6. Trust Signals (Clients / Partners / Certifications)
7. FAQ (Accordion)
8. Contact CTA
9. Footer

Each component’s API and layout definition remains as described in previous version (v0.2). All textual, visual, and sample data are now stored externally in `ContentMap.md`.

## 6) External Content Map

Refer to `ContentMap.md (Sample Version)` for:

- Navigation structure (sample labels & disabled links)
- Hero section (video orientation logic, sample poster/video paths)
- One‑Stop Service items (5 sample services)
- ProductHighlights (3 sample product cards)
- ProcessTimeline (5 sample steps)
- TrustBar (sample certification logos)
- FAQ (5 sample questions/answers)
- ContactCTA (sample contact links + QR placeholder)
- Footer (sample address & links)

## 7) Products Page (Phase 2 — Outline Only)

- Route: `/products`
- Sections: Hero (Products), Filter/Tags (optional), Product Grid (Card with image, spec, CTA), Contact CTA.
- Components re‑use: `Header`, `ProductCard`, `ContactCta`, `Footer`.

## 8) File Structure (App Router)

```text
app/
  layout.tsx
  page.tsx                # Home
  products/
    page.tsx
components/
  header.tsx
  hero.tsx
  services-intro.tsx
  product-highlights.tsx
  process-timeline.tsx
  faq.tsx
  trust-bar.tsx
  contact-cta.tsx
  footer.tsx
lib/
  content.ts              # generated from ContentMap.md
styles/
  globals.css
public/
  images/
  videos/
next.config.ts
postcss.config.js
tailwind.config.ts
tsconfig.json
```

## 9) Tailwind Setup Notes

- Install Tailwind, add `content` paths for `app/**/*.{ts,tsx}`, `components/**/*.{ts,tsx}`
- Extend theme:

```ts
fontFamily: { heading: ['Prompt', 'sans-serif'], body: ['Inter', 'system-ui'] }
colors: { primary: { 600:'#16A34A', 700:'#15803D' }, brandBrown:'#8B5E34', brandBeige:'#F2EDE4' }
container: { center: true, padding: '1rem', screens: { '2xl': '72rem' } }
```

## 10) Accessibility & Performance

- Heading hierarchy (h1–h3), alt text on images
- Prefetch nav links, `next/image` for hero and product images
- Background video is decorative (`aria-hidden="true"`, muted, no controls), provide poster fallback
- Provide `<source>` media conditions (portrait/landscape), respect `prefers-reduced-motion` with static image fallback
- SEO metadata via `export const metadata` in `layout.tsx` (titleTemplate, description, openGraph, twitter)
- `robots: { index: false, follow: false }` for sample build

## 11) Acceptance Criteria (v0.3 Home — Sample Version)

- Deployed on Vercel (static), responsive, CLS < 0.1, LCP < 2.5s, Lighthouse ≥ 90
- Header sticky, Hero video full-screen (no CTA buttons)
- Uses sample content from `ContentMap.md`
- Components typed (TS), props documented via JSDoc
- Includes bottom banner: “หน้านี้เป็นตัวอย่าง (Sample) เพื่อการสาธิตเท่านั้น”

## 12) Codex Working Prompts (for generation)

1. **Bootstrap**

   > Read ArchitectureContract.md, ContentMap.md, and DesignSystem.md to create a Next.js 15 + Tailwind sample project. Use sample data and disable indexing.

2. **Home Assembly**

   > Generate `app/page.tsx` composing Header, Hero (video), **ServicesIntro**, ProductHighlights, **ProcessTimeline**, TrustBar, **Faq**, ContactCta, and Footer in that order. Bind sample content from ContentMap.md.

3. **Refine Theme**

   > Apply Green–Brown palette from DesignSystem.md, rounded‑2xl cards, soft shadows, and container max‑w‑7xl. Ensure mobile menu works. Optimize video handling (poster, webm/mp4) and respect `prefers-reduced-motion`.

---

### Change Log

- v0.3 — Integrated Sample Data Approach, externalized content/design into ContentMap.md & DesignSystem.md, added demo banner and noindex metadata.
- v0.2 — Added video hero, Process Timeline, FAQ, performance targets.
- v0.1 — Initial architecture draft.
