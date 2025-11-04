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

export default function TrustBar(_props: TrustBarProps) {
  return null;
}
