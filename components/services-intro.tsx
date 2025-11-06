import Image from "next/image";

export type ServiceItem = {
  title: string;
  desc: string;
  imageSrc: string;
  imageAlt: string;
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
                <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-primary-600/10 bg-primary-50 shadow-soft sm:h-24 sm:w-24">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={160}
                    height={160}
                    className="h-full w-full object-contain"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                    priority
                  />
                </div>
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
