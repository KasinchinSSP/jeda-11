"use client";

import { useRef, useState, type KeyboardEvent } from "react";

export type FaqItem = {
  q: string;
  a: string;
};

export type FaqProps = {
  title: string;
  items: ReadonlyArray<FaqItem>;
};

export default function Faq({ title, items }: FaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusAt = (index: number) => {
    const ref = buttonRefs.current[index];
    if (ref) {
      ref.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!items.length) return;
    const last = items.length - 1;

    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        const nextIndex = index >= last ? 0 : index + 1;
        focusAt(nextIndex);
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        const prevIndex = index <= 0 ? last : index - 1;
        focusAt(prevIndex);
        break;
      }
      case "Home": {
        event.preventDefault();
        focusAt(0);
        break;
      }
      case "End": {
        event.preventDefault();
        focusAt(last);
        break;
      }
      default:
        break;
    }
  };

  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = activeIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-trigger-${index}`;

              return (
                <div key={item.q} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft ring-1 ring-neutral-200/60">
                  <h3>
                    <button
                      id={buttonId}
                      ref={(node) => {
                        buttonRefs.current[index] = node;
                      }}
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-medium text-neutral-900 transition-colors hover:bg-brandBeige/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:text-lg"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                    >
                      <span className="flex-1">{item.q}</span>
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary-600/20 text-sm transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        <span className="h-2 w-2 rounded-full bg-primary-600" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden px-6 pb-4 text-sm text-neutral-600 sm:text-base">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
