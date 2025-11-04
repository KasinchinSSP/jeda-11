# DesignSystem — JEDA 11 Website (Green–Brown Theme, v1.1)

> Scope: Defines the design tokens, typography, layout scale, and UI behavior for the Green–Brown theme used in the JEDA 11 **sample** website. **Mobile‑first** with responsive scaling.

---

## 1) Theme Overview

- **Visual Style**: Corporate Clean — Green & Brown tones representing trust, growth, and earthiness.
- **Usage Context**: For Tailwind CSS extension and general UI consistency.
- **Principles**: Mobile‑first, accessible, performance‑oriented, semantic.
- **Mood Keywords**: trustworthy, organic, industrial, natural light, modern typography.

---

## 2) Color Palette

| Token         | HEX     | Role / Usage                          |
| ------------- | ------- | ------------------------------------- |
| `primary-600` | #16A34A | Primary buttons, highlights           |
| `primary-700` | #15803D | Hover state, active emphasis          |
| `accent-400`  | #34D399 | Accent elements, hover highlights     |
| `brandBrown`  | #8B5E34 | Secondary color, footer background    |
| `brandBeige`  | #F2EDE4 | Neutral background, section alt color |
| `neutral-900` | #1C1917 | Main text color                       |
| `neutral-700` | #44403C | Secondary text, icons                 |
| `neutral-500` | #78716C | Muted text, secondary icons           |
| `neutral-300` | #D6D3D1 | Borders, dividers                     |
| `neutral-100` | #F5F5F4 | Light background                      |
| `neutral-50`  | #FAFAF9 | Page background                       |
| `success`     | #22C55E | Positive actions, status success      |
| `warning`     | #FACC15 | Alerts, attention indicators          |
| `info`        | #0EA5E9 | Info banners, links                   |

**Opacity variants**: use Tailwind slash syntax (e.g., `text-neutral-900/80`, `bg-brandBrown/90`, `ring-primary-600/20`).

### Gradients

- **Hero Background Overlay**: `linear-gradient(to bottom, rgba(21,128,61,0.6), rgba(139,94,52,0.5))`
- **CTA Background**: `linear-gradient(135deg, #16A34A 0%, #8B5E34 100%)`

---

## 3) Typography

| Type    | Font          | Weight  | Use                           |
| ------- | ------------- | ------- | ----------------------------- |
| Heading | Prompt        | 600–700 | Hero titles, section headings |
| Body    | Inter         | 400–500 | Paragraphs, navigation        |
| Accent  | Prompt Italic | 500     | Eyebrow / highlights          |

### Scale & Rhythm

- **Display**: `text-5xl md:text-6xl` · **H1**: `text-4xl md:text-5xl` · **H2**: `text-3xl md:text-4xl` · **H3**: `text-2xl md:text-3xl` · **Body**: `text-base md:text-lg` · **Small**: `text-sm`
- **Line-height**: headings `leading-tight`, body `leading-relaxed`.
- **Letter-spacing**: headings `tracking-tight`, eyebrow `tracking-wide`.
- **Responsive titles**: prefer `clamp()` for hero/major headings.
- **Text wrapping**: enable `text-balance` (CSS `text-wrap: balance`) on long headings.

---

## 4) Layout & Spacing

| Token           | Value                          | Usage                       |
| --------------- | ------------------------------ | --------------------------- |
| Section padding | `py-16 md:py-24`               | Vertical section spacing    |
| Container width | `max-w-7xl mx-auto`            | Page content limit          |
| Grid gap        | `gap-6 md:gap-8`               | Component spacing           |
| Text width      | `max-w-prose` / `max-w-[65ch]` | Comfortable reading width   |
| Radius          | `rounded-2xl`                  | Default for Cards, Buttons  |
| Shadow          | `shadow-lg/10`                 | Subtle shadow for elevation |

**Breakpoints**: Mobile ≤640px · Tablet 641–1024px · Desktop ≥1025px\
**Unit system**: rem‑based scale (1rem = 16px).

---

## 5) Component Tokens

### Buttons

| Variant   | Classes                                                                       | Notes          |
| --------- | ----------------------------------------------------------------------------- | -------------- |
| Primary   | `bg-primary-600 hover:bg-primary-700 text-white rounded-2xl px-6 py-3 shadow` | Main CTAs      |
| Secondary | `border border-primary-600 text-primary-700 hover:bg-primary-50`              | Alt CTAs       |
| Ghost     | `text-primary-700 hover:text-primary-800`                                     | Minimal action |

**States**: `focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:opacity-50 disabled:pointer-events-none`

### Cards

- Base: `rounded-2xl bg-white shadow-lg/10 ring-1 ring-stone-200`
- Hover: `translate-y-[-2px] shadow-xl/20 transition` · Optional: `hover:scale-[1.02]`

### NavBar

- Mobile: Sticky top, translucent background (`bg-white/80 backdrop-blur-md`)
- Desktop: Inline links with underline animation using pseudo element:\
  `relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary-600 hover:after:w-full after:transition-all`

### Footer

- Background: `bg-brandBrown text-white`
- Links: `text-brandBeige hover:text-accent-400`
- Spacing: `space-y-2 md:space-y-3` inside columns

---

## 6) Motion & Interaction

| Token          | Property                                                       | Description               |
| -------------- | -------------------------------------------------------------- | ------------------------- |
| `ease-soft`    | `cubic-bezier(0.4, 0, 0.2, 1)`                                 | Default transition easing |
| Durations      | `100–200ms` (UI), `300–400ms` (entrance)                       | Timing guidance           |
| Keyframes      | `fade-up`, `slide-in`, `zoom-in`                               | Entrance patterns         |
| Reduced motion | Respect `prefers-reduced-motion` to disable complex animations |                           |

---

## 7) Accessibility Guidelines

- Maintain 4.5:1 contrast ratio minimum.
- Provide alt text for all images and captions for videos.
- Use semantic HTML: `<header>`, `<main>`, `<footer>`.
- All interactive elements have visible focus states.
- Background videos are decorative only (`aria-hidden="true").`
- **Keyboard navigation**: Ensure Tab / Shift+Tab traverse focusable elements in logical order.
- **Language**: Set `<html lang="th">` (or `en`) according to page language.

---

## 8) Example Tailwind Config Snippet

```ts
// tailwind.config.ts (extract)
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  safelist: [
    // dynamic classes from content (examples)
    "text-neutral-900/80",
    "bg-brandBrown/90",
    "ring-primary-600/20",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 600: "#16A34A", 700: "#15803D" },
        brandBrown: "#8B5E34",
        brandBeige: "#F2EDE4",
      },
      fontFamily: {
        heading: ["Prompt", "sans-serif"],
        body: ["Inter", "system-ui"],
      },
      container: { center: true, padding: "1rem", screens: { "2xl": "72rem" } },
      boxShadow: { soft: "0 2px 8px rgba(0,0,0,0.1)" },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
```

> Fonts are loaded via `next/font` (Prompt & Inter) in `app/layout.tsx`.

---

### Notes

- This design system provides consistent theming for demo use.
- Extend as needed for future real content implementation.

---

### Change Log

- **v1.1** — Added neutral‑300/500, opacity variants; line‑height & clamp guidance; text‑balance; max‑w‑prose; rem unit note; button focus/disabled states; navbar underline spec; motion keyframes & timings; keyboard nav and `lang` attribute guidance; Tailwind `safelist` and `@tailwindcss/forms/typography` plugins; minor copy edits.
- **v1.0** — Initial theme tokens (colors, typography scale, layout, basic components, accessibility, Tailwind snippet).
