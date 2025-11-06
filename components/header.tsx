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
    <header className="top-0 z-50 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src={logoSrc}
              alt="JEDA 11 Sample Logo"
              fill
              sizes="128px"
              className="object-contain"
              priority
            />
          </div>
          <span className="sr-only">JEDA 11</span>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:border-primary-600 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span
            className="h-0.5 w-5 bg-current text-neutral-900 shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]"
            aria-hidden
          />
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-900 sm:flex">
          {nav.map((item) => {
            const isDisabled = Boolean(item.disabled);
            const common =
              "relative inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors";
            const enabledClasses =
              "hover:bg-brandBeige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";
            const disabledClasses = "cursor-not-allowed text-neutral-400";

            if (isDisabled) {
              return (
                <span
                  key={item.label}
                  className={`${common} ${disabledClasses}`}
                  aria-disabled
                >
                  <span
                    className="h-2 w-2 rounded-full bg-neutral-300"
                    aria-hidden
                  />
                  {item.label}
                </span>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${common} ${enabledClasses}`}
              >
                <span
                  className="h-2 w-2 rounded-full bg-primary-600"
                  aria-hidden
                />
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
                  className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 text-neutral-400"
                  aria-disabled
                >
                  <span>{item.label}</span>
                  <span
                    className="h-2 w-2 rounded-full bg-neutral-300"
                    aria-hidden
                  />
                </span>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-brandBeige px-4 py-3 text-neutral-900 shadow-sm transition hover:border-primary-600 hover:text-primary-700"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span
                  className="h-2 w-2 rounded-full bg-primary-600"
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
