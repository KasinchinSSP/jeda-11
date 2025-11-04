export type ProcessStep = {
  index: number;
  title: string;
  icon: string;
};

export type ProcessTimelineProps = {
  title: string;
  steps: ProcessStep[];
};

export default function ProcessTimeline({ title, steps }: ProcessTimelineProps) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <ol className="grid gap-6 md:grid-cols-5 md:gap-8">
            {steps.map((step, index) => (
              <li key={step.index} className="relative flex flex-col">
                <article className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <span className="text-sm font-semibold">0{step.index}</span>
                      <span className="absolute inset-0 rounded-full border border-white/20" aria-hidden />
                      <span className="sr-only">{step.icon}</span>
                    </span>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">Step {step.index}</p>
                  </div>
                  <p className="text-sm text-white/70 sm:text-base">{step.title}</p>
                </article>
                {index < steps.length - 1 ? (
                  <span
                    className="absolute left-9 top-full block h-6 w-px bg-white/10 md:left-full md:top-1/2 md:h-px md:w-6 md:-translate-y-1/2"
                    aria-hidden
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
