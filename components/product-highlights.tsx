import Image from "next/image";

export type ProductHighlight = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  spec: ReadonlyArray<string>;
};

export type ProductHighlightsProps = {
  items: ReadonlyArray<ProductHighlight>;
};

export default function ProductHighlights({ items }: ProductHighlightsProps) {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">ผลิตภัณฑ์ตัวอย่าง (Sample)</h2>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              ไฮไลต์สินค้าเพื่อแสดงศักยภาพการผลิต (ตัวอย่าง)
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-neutral-600 sm:text-base">{item.description}</p>
                  </div>
                  <ul className="mt-auto space-y-2 text-sm text-neutral-600">
                    {item.spec.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-neutral-900" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
