import Image from "next/image";
import Link from "next/link";

export type ContactAction = {
  label: string;
  href: string;
};

export type ContactCtaProps = {
  title: string;
  subtitle: string;
  ctas: ReadonlyArray<ContactAction>;
  qrImageSrc: string;
  qrAlt: string;
  note?: string;
};

export default function ContactCta({ title, subtitle, ctas, qrImageSrc, qrAlt, note }: ContactCtaProps) {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg md:gap-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
              <p className="max-w-xl text-base text-neutral-600 sm:text-lg">{subtitle}</p>
              <div className="flex flex-wrap gap-3">
                {ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
                  >
                    <span className="h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                    {cta.label}
                  </Link>
                ))}
              </div>
              {note ? <p className="text-sm text-neutral-500">{note}</p> : null}
            </div>
            <div className="mt-6 flex shrink-0 items-center justify-center md:mt-0">
              <div className="relative h-40 w-40 rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-sm sm:h-48 sm:w-48">
                <Image src={qrImageSrc} alt={qrAlt} fill sizes="192px" className="rounded-lg object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
