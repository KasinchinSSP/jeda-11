# ContentMap — JEDA 11 Website (Sample Version v1.1)

> Scope: Sample-only content for demonstrating the structure and layout of the GIDA 11 website. All information below is placeholder data for demo purposes. Use with `noindex,nofollow` metadata.

---

## 1) Header

```ts
export const header = {
  nav: [
    { label: "Home", href: "#" },
    { label: "Products", href: "#products", disabled: true },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  logoSrc: "/images/sample-logo.svg",
};
```

---

## 2) Hero (Video Background)

> รองรับวิดีโอ **แนวนอน/แนวตั้ง** และ **รูปแบบไฟล์ webm/mp4** พร้อม `poster` และข้อความแทนภาพ

```ts
export const hero = {
  eyebrow: "GIDA 11 (Sample)",
  title: "โซลูชันครบวงจรสำหรับธุรกิจผลิตภัณฑ์เสริมอาหาร",
  subtitle:
    "One-stop service: R&D • บรรจุภัณฑ์ • เอกสารจดแจ้ง • ผลิต • ส่งมอบ (ตัวอย่าง)",
  video: {
    landscape: {
      webm: "/videos/sample-hero-landscape.webm",
      mp4: "/videos/sample-hero-landscape.mp4",
      poster: "/images/sample-hero-poster-landscape.jpg",
      altPoster: "ฉากโรงงานและสินค้า (แนวนอน, ตัวอย่าง)",
    },
    portrait: {
      webm: "/videos/sample-hero-portrait.webm",
      mp4: "/videos/sample-hero-portrait.mp4",
      poster: "/images/sample-hero-poster-portrait.jpg",
      altPoster: "ฉากโรงงานและสินค้า (แนวตั้ง, ตัวอย่าง)",
    },
    strategy: "auto", // auto-select by viewport orientation (fallback to landscape)
  },
  overlay: "medium" as const,
};
```

---

## 3) ServicesIntro (One-Stop Service)

```ts
export const servicesIntro = {
  title: "One-Stop Service ครบวงจร (Sample)",
  intro:
    "เราดูแลตั้งแต่แนวคิดจนถึงสินค้าพร้อมขาย ครอบคลุมงานวิจัย พัฒนา ผลิต และจดทะเบียนที่เกี่ยวข้อง (ตัวอย่าง)",
  services: [
    {
      title: "ผลิตสินค้าอาหารเสริม (OEM/ODM)",
      desc: "ไลน์ผลิตมาตรฐาน รองรับปริมาณสูง",
      icon: "factory",
    },
    {
      title: "วิจัยและพัฒนาสูตร (R&D)",
      desc: "ทีมวิจัย ทดลอง และปรับรสชาติ",
      icon: "flask",
    },
    { title: "ออกแบบบรรจุภัณฑ์", desc: "ดีไซน์แพ็กเกจจิงครบวงจร", icon: "box" },
    {
      title: "ที่ปรึกษาสร้างธุรกิจและแบรนด์",
      desc: "กลยุทธ์ตลาดและแบรนด์ดิ้ง",
      icon: "briefcase",
    },
    {
      title: "จดทะเบียน อย. และนิติบุคคล",
      desc: "เอกสารและกระบวนการครบถ้วน",
      icon: "file-check",
    },
  ],
  note: "เนื้อหานี้ใช้เพื่อสาธิตเท่านั้น",
};
```

---

## 4) ProductHighlights

```ts
export const productHighlights = {
  items: [
    {
      title: "Capsule Line (Sample)",
      description: "สูตรแคปซูลมาตรฐาน รองรับการผลิตขนาดใหญ่ (ตัวอย่าง)",
      image: "/images/sample-product-capsule.jpg",
      imageAlt: "ผลิตภัณฑ์แคปซูล (ตัวอย่าง)",
      spec: ["MOQ 5,000 units", "Lead time 30–45 days"],
      // href: "/products/capsule" // (optional, phase 2)
    },
    {
      title: "Powder/Drink Line (Sample)",
      description: "ผลิตภัณฑ์ผงละลายน้ำ รสชาติดีและละลายง่าย (ตัวอย่าง)",
      image: "/images/sample-product-powder.jpg",
      imageAlt: "ผลิตภัณฑ์ผงชงดื่ม (ตัวอย่าง)",
      spec: ["MOQ 10,000 sachets", "Flavor lab support"],
    },
    {
      title: "Skin/Topical Line (Sample)",
      description: "สกินแคร์/ครีมบำรุงผิว มาตรฐานความปลอดภัยสูง (ตัวอย่าง)",
      image: "/images/sample-product-skin.jpg",
      imageAlt: "ผลิตภัณฑ์ดูแลผิว (ตัวอย่าง)",
      spec: ["Stability test", "Compliance checklist"],
    },
  ],
};
```

---

## 5) ProcessTimeline (How it works)

```ts
export const processTimeline = {
  title: "ขั้นตอนการทำงาน (Sample)",
  steps: [
    { index: 1, title: "ออกแบบและพัฒนาสูตรผลิตภัณฑ์ (Sample)", icon: "pencil" },
    { index: 2, title: "ทดลอง/ทดสอบสินค้า (Sample)", icon: "beaker" },
    { index: 3, title: "เตรียมเอกสารยื่นจดแจ้ง (Sample)", icon: "file-text" },
    { index: 4, title: "ลงมือผลิตสินค้า (Sample)", icon: "factory" },
    { index: 5, title: "ส่งมอบสินค้า (Sample)", icon: "truck" },
  ],
};
```

---

## 6) TrustBar

```ts
export const trustBar = {
  logos: [
    { src: "/images/logos/sample-gmp.svg", alt: "GMP (Sample)" },
    { src: "/images/logos/sample-haccp.svg", alt: "HACCP (Sample)" },
    { src: "/images/logos/sample-iso.svg", alt: "ISO (Sample)" },
  ],
  badges: [{ label: "GMP" }, { label: "HACCP" }, { label: "ISO 9001" }],
  caption: "ตัวอย่างสัญลักษณ์มาตรฐานการผลิต",
};
```

---

## 7) FAQ

```ts
export const faq = {
  title: "คำถามที่พบบ่อย (Sample)",
  items: [
    { q: "ขั้นต่ำการผลิตเท่าไร?", a: "ขึ้นกับประเภทสินค้า (Sample)" },
    { q: "ระยะเวลา R&D นานแค่ไหน?", a: "โดยทั่วไป 2–6 สัปดาห์ (Sample)" },
    { q: "ต้องเตรียมอะไรบ้าง?", a: "กลุ่มลูกค้าและงบประมาณ (Sample)" },
    { q: "มีบริการขึ้นทะเบียนไหม?", a: "มีในขอบเขตสาธิตนี้ (Sample)" },
    { q: "คิดค่าบริการอย่างไร?", a: "ขึ้นกับปริมาณการผลิต (Sample)" },
  ],
};
```

---

## 8) ContactCta

```ts
export const contactCta = {
  title: "เริ่มโครงการของคุณวันนี้ (Sample)",
  subtitle: "ติดต่อเพื่อประเมินราคาเบื้องต้น (Sample)",
  ctas: [
    { label: "โทรเลย", href: "#" },
    { label: "อีเมล", href: "#" },
    { label: "เพิ่มไลน์", href: "#" },
  ],
  qrImageSrc: "/images/sample-qr.png",
  qrAlt: "QR Code สำหรับติดต่อ (ตัวอย่าง)",
  note: "ปุ่มทั้งหมดเป็นตัวอย่างเท่านั้น",
};
```

---

## 9) Footer

```ts
export const footer = {
  address: "123/45 Sample Road, Bangkok 00000 (Sample)",
  columns: [
    {
      title: "About (Sample)",
      links: [
        { label: "เกี่ยวกับเรา", href: "#" },
        { label: "บริการ", href: "#" },
        { label: "ผลงาน", href: "#" },
      ],
    },
    {
      title: "Resources (Sample)",
      links: [
        { label: "นโยบายความเป็นส่วนตัว", href: "#" },
        { label: "ข้อกำหนดการใช้งาน", href: "#" },
      ],
    },
  ],
  socials: [
    { icon: "facebook", href: "#" },
    { icon: "line", href: "#" },
    { icon: "mail", href: "#" },
  ],
  legal: "© 2025 GIDA 11 (Sample). All rights reserved.",
};
```

---

### Notes

- All media paths (`/images/...`, `/videos/...`) are sample placeholders.
- External links are disabled or point to `#` for demo safety.
- The entire content is marked as **Sample Data**, not for public use or SEO indexing.
- Use with `noindex,nofollow` metadata.

---

### Change Log

- **v1.1** — Added dual-orientation video schema (landscape/portrait, webm/mp4), `altPoster`, product `imageAlt`, optional icons/desc for Services & Process steps, TrustBar `badges`, Contact `qrAlt` + `note`, Footer `address`; clarified notes.
- **v1.0** — Initial sample content covering Header, Hero, ServicesIntro, ProductHighlights, ProcessTimeline, TrustBar, FAQ, ContactCta, Footer.
