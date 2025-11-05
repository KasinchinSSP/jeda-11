"use client";

import { useState } from "react";

import ContactCta from "@/components/contact-cta";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProcessTimeline from "@/components/process-timeline";
import ProductHighlights from "@/components/product-highlights";
import ServicesIntro from "@/components/services-intro";
import TrustBar from "@/components/trust-bar";
import { siteContent } from "@/lib/content";

export default function Home() {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const {
    header,
    hero,
    servicesIntro,
    productHighlights,
    processTimeline,
    trustBar,
    faq,
    contactCta,
    footer,
  } = siteContent;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header {...header} />
      <main className="flex flex-col">
        <section aria-label="Hero section" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Hero {...hero} />
          </div>
        </section>

        <section
          id="about"
          aria-label="Services overview"
          className="scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ServicesIntro {...servicesIntro} />
          </div>
        </section>

        <section
          id="products"
          aria-label="Product highlights"
          className="scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProductHighlights {...productHighlights} />
          </div>
        </section>

        <section aria-label="Process timeline" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProcessTimeline {...processTimeline} />
          </div>
        </section>

        <section aria-label="Trust bar" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <TrustBar {...trustBar} />
          </div>
        </section>

        <section
          aria-label="Frequently asked questions"
          className="scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Faq {...faq} />
          </div>
        </section>

        <section
          id="contact"
          aria-label="Contact call to action"
          className="scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContactCta {...contactCta} />
          </div>
        </section>
      </main>
      <Footer {...footer} />

      {!bannerDismissed ? (
        <div className="fixed inset-x-0 bottom-0 px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="mx-auto flex max-w-7xl items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-white/90 px-4 py-4 text-sm text-neutral-900 shadow-lg backdrop-blur">
            <p className="flex-1 leading-relaxed">
              หน้านี้เป็นเพียงตัวอย่างเพื่อการสาธิตเท่านั้น
            </p>
            <button
              type="button"
              onClick={() => setBannerDismissed(true)}
              className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
            >
              X
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
