import Image from "next/image";

export type TrustLogo = {
  src: string;
  alt: string;
};

export type TrustBadge = {
  label: string;
};

export type TrustBarProps = {
  logos: TrustLogo[];
  badges?: TrustBadge[];
  caption?: string;
};

export default function TrustBar({ logos, badges, caption }: TrustBarProps) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8">
          {caption ? <p className="text-sm uppercase tracking-[0.2em] text-white/60">{caption}</p> : null}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-between md:gap-8">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="relative h-12 w-28 shrink-0 rounded-xl border border-white/10 bg-white/5 px-4 py-2"
              >
                <Image src={logo.src} alt={logo.alt} fill sizes="112px" className="object-contain" />
              </div>
            ))}
          </div>
          {badges && badges.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60"
                >
                  <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
                  {badge.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
