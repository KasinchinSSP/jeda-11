# Codex Prompts — JEDA 11 Website (Home Sample Build)

> Purpose: Generate a complete sample Home page for JEDA 11 using Next.js 15 + Tailwind CSS from the three reference specs:
>
> 1. **ArchitectureContract.md (v0.3)**
> 2. **ContentMap.md (Sample v1.1)**
> 3. **DesignSystem.md (Green–Brown Theme v1.1)**

---

## 0) Project Bootstrap

```text
You are an AI coding agent. Read these three specs end-to-end and follow them exactly:

Goal: Create a Next.js 15 (App Router) + Tailwind CSS project that renders a single Home page using SAMPLE data only. Mobile-first. No backend. Disable indexing.

Tasks:
- Init project structure per ArchitectureContract §8 (app/, components/, lib/, public/…)
- Install and configure Tailwind per DesignSystem §8.
- Load fonts (Prompt/Inter) via next/font in app/layout.tsx.
- Create lib/content.ts from ContentMap v1.1.
- Create empty stubs for components from §5.
- Add tsconfig.json, postcss.config.js, next.config.ts.

Output:
- Final file tree.
- Content of tailwind.config.ts, postcss.config.js, tsconfig.json, next.config.ts, styles/globals.css, app/layout.tsx scaffold, lib/content.ts (sample data), empty component stubs.
- Do not render full Home yet.

Quality gates:
- Mobile-first, container max-w-7xl, section py-16 md:py-24, gap-6 md:gap-8.
- All links → "#", no real contact info.
```

---

## 1) Generate Components

```text
Implement these in /components with Tailwind classes per DesignSystem:

1. header.tsx – Responsive nav, sticky top, translucent background, supports disabled links.
2. hero.tsx – Full-viewport video background (dual-orientation, prefers-reduced-motion fallback).
3. services-intro.tsx – Grid of 5 items with icons.
4. product-highlights.tsx – Product cards with stable image ratios.
5. process-timeline.tsx – Stepper 1–5 (vertical mobile, horizontal desktop).
6. trust-bar.tsx – Logo row with optional badges.
7. faq.tsx – Accessible accordion (keyboard nav).
8. contact-cta.tsx – Prominent CTA with QR + buttons.
9. footer.tsx – Columns, socials, legal, address.

Each file:
- Typed props (TypeScript)
- Production-ready JSX + Tailwind
- No external icons (use placeholder dots)
```

---

## 2) Assemble Home Page (`app/page.tsx`)

```text
Compose the Home page per ArchitectureContract §5:

Order:
1. Header
2. Hero
3. ServicesIntro
4. ProductHighlights
5. ProcessTimeline
6. TrustBar
7. FAQ
8. ContactCta
9. Footer

Rules:
- Import all components and bind props from lib/content.ts.
- Wrap sections with container pattern (max-w-7xl mx-auto px-4).
- Anchor IDs (#about, #products, #contact) for nav links.
- Add dismissible bottom banner: “หน้านี้เป็นตัวอย่าง (Sample) เพื่อการสาธิตเท่านั้น”.

Output: full app/page.tsx.
```

---

## 3) Metadata & Robots (noindex)

```text
Update app/layout.tsx:

export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'JEDA 11 (Sample)', template: '%s — JEDA 11 (Sample)' },
  description: 'Sample-only demo landing page for JEDA 11.',
  robots: { index: false, follow: false },
  openGraph: { title: 'JEDA 11 (Sample)', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'JEDA 11 (Sample)' },
}

- Load Prompt/Inter via next/font.
- Apply <html lang="th">, body classes (antialiased, text-neutral-900, bg-neutral-50).
- Import globals.css.

Output: entire app/layout.tsx.
```

---

## 4) Polish & QA Checklist

```text
- Verify design token usage, spacing, colors.
- Confirm Hero prefers-reduced-motion behavior.
- Ensure all Product images have alt & fixed ratios.
- Accordion keyboard accessible.
- All links → "#".
- Sample banner sticky-bottom and dismissible.

Output: summary of checks + fixes if any.
```

---

## 5) Scope Constraints (reminder)

```text
- SAMPLE-ONLY build: no real contact info.
- Mobile-first scaling.
- Apply DesignSystem v1.1 tokens.
- Accessibility: aria-hidden for videos, visible focus, keyboard accordion.
- No custom CSS beyond Tailwind.
```

---

## End of Codex Prompt Suite — Home (Sample Build)
