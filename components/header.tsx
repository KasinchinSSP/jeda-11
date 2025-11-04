"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type HeaderNavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

export type HeaderProps = {
  nav: ReadonlyArray<HeaderNavItem>;
  logoSrc: string;
};

export default function Header({ nav, logoSrc }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-32">
            <Image
              src={logoSrc}
              alt="GIDA 11 Sample Logo"
              fill
              sizes="128px"
              className="object-contain"
              priority
            />
          </div>
          <span className="sr-only">GIDA 11</span>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="h-0.5 w-5 bg-white shadow-[0_6px_0_0_white,0_-6px_0_0_white]" aria-hidden />
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white sm:flex">
          {nav.map((item) => {
            const isDisabled = Boolean(item.disabled);
            const common =
              "relative inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors";
            const enabledClasses = "hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
            const disabledClasses = "cursor-not-allowed text-white/40";

            if (isDisabled) {
              return (
                <span key={item.label} className={`${common} ${disabledClasses}`} aria-disabled>
                  <span className="h-2 w-2 rounded-full bg-white/40" aria-hidden />
                  {item.label}
                </span>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={`${common} ${enabledClasses}`}>
                <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div
        id="mobile-nav"
        className={`sm:hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-4 pb-4 pt-2">
          {nav.map((item) => {
            const isDisabled = Boolean(item.disabled);
            if (isDisabled) {
              return (
                <span
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/60"
                  aria-disabled
                >
                  <span>{item.label}</span>
                  <span className="h-2 w-2 rounded-full bg-white/40" aria-hidden />
                </span>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
