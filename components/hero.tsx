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

export default function Hero(_props: HeroProps) {
  return null;
}
