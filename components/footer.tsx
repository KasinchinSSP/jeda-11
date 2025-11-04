import Link from "next/link";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: ReadonlyArray<FooterLink>;
};

export type FooterSocial = {
  icon: string;
  href: string;
};

export type FooterProps = {
  address: string;
  columns: ReadonlyArray<FooterColumn>;
  socials: ReadonlyArray<FooterSocial>;
  legal: string;
};

export default function Footer({ address, columns, socials, legal }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">JEDA 11 (Sample)</h2>
            <p className="max-w-sm text-sm text-white/70 sm:text-base">{address}</p>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label={social.icon}
                >
                  <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{column.title}</h3>
                <ul className="space-y-3 text-sm text-white/70">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 rounded-full px-2 py-1 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">{legal}</div>
      </div>
    </footer>
  );
}
