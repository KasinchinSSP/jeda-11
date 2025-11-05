import Image from "next/image";

export type HeroVideoAsset = {
  webm: string;
  mp4: string;
  poster: string;
  altPoster: string;
};

export type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  video: {
    landscape: HeroVideoAsset;
    portrait: HeroVideoAsset;
    strategy: "auto" | "landscape" | "portrait";
  };
  overlay: "light" | "medium" | "strong";
};

const overlayStyles: Record<HeroProps["overlay"], string> = {
  light: "bg-slate-950/30",
  medium: "bg-slate-950/50",
  strong: "bg-slate-950/70",
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  video,
  overlay,
}: HeroProps) {
  const { landscape, portrait, strategy } = video;

  const landscapeVisibility =
    strategy === "portrait"
      ? "hidden"
      : strategy === "landscape"
      ? "block"
      : "hidden landscape:block";
  const portraitVisibility =
    strategy === "landscape"
      ? "hidden"
      : strategy === "portrait"
      ? "block"
      : "hidden portrait:block";

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hidden motion-safe:block">
          <video
            className={`h-full w-full object-cover ${landscapeVisibility}`}
            autoPlay
            loop
            muted
            playsInline
            poster={landscape.poster}
            aria-hidden
          >
            <source src={landscape.webm} type="video/webm" />
            <source src={landscape.mp4} type="video/mp4" />
          </video>
          <video
            className={`h-full w-full object-cover ${portraitVisibility}`}
            autoPlay
            loop
            muted
            playsInline
            poster={portrait.poster}
            aria-hidden
          >
            <source src={portrait.webm} type="video/webm" />
            <source src={portrait.mp4} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 hidden motion-reduce:block">
          <div className="relative h-full w-full">
            <Image
              src={landscape.poster}
              alt={landscape.altPoster}
              fill
              sizes="100vw"
              className="hidden object-cover landscape:block"
              priority
            />
            <Image
              src={portrait.poster}
              alt={portrait.altPoster}
              fill
              sizes="100vw"
              className="object-cover portrait:block"
              priority
            />
          </div>
        </div>
        <div
          className={`absolute inset-0 ${overlayStyles[overlay]}`}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950"
          aria-hidden
        />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-16 text-white sm:px-6 md:gap-8 md:py-24 lg:px-8">
        <span className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
          <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
          {eyebrow}
        </span>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          {subtitle}
        </p>
        <div className=" flex flex-wrap items-center gap-4 text-sm text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
            ปรึกษาฟรี ไม่มีค่าใช้จ่าย
          </span>
          <span className="hidden inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-white/60" aria-hidden />
            ข้อมูลเพื่อการสาธิตเท่านั้น
          </span>
        </div>
      </div>
    </section>
  );
}
