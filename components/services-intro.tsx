export type ServiceItem = {
  title: string;
  desc: string;
  icon: string;
};

export type ServicesIntroProps = {
  title: string;
  intro: string;
  services: ReadonlyArray<ServiceItem>;
  note?: string;
};

export default function ServicesIntro({ title, intro, services, note }: ServicesIntroProps) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
            <p className="max-w-2xl text-base text-white/70 sm:text-lg">{intro}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10">
                  <span className="h-3 w-3 rounded-full bg-white" aria-hidden />
                  <span className="sr-only">{service.icon}</span>
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-white/70 sm:text-base">{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
          {note ? <p className="text-sm text-white/50">{note}</p> : null}
        </div>
      </div>
    </section>
  );
}
