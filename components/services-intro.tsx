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

export default function ServicesIntro({
  title,
  intro,
  services,
  note,
}: ServicesIntroProps) {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              {intro}
            </p>
          </div>
          <div className="grid gap-6 text-center sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft ring-1 ring-neutral-200/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-600/20 bg-primary-600/10 text-primary-700 shadow-soft">
                  <span
                    className="h-3 w-3 rounded-full bg-primary-600"
                    aria-hidden
                  />
                  <span className="sr-only">{service.icon}</span>
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-neutral-600 sm:text-base">
                    {service.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
          {note ? <p className="text-sm text-neutral-500">{note}</p> : null}
        </div>
      </div>
    </section>
  );
}
