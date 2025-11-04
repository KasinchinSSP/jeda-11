export type ContactAction = {
  label: string;
  href: string;
};

export type ContactCtaProps = {
  title: string;
  subtitle: string;
  ctas: ContactAction[];
  qrImageSrc: string;
  qrAlt: string;
  note?: string;
};

export default function ContactCta(_props: ContactCtaProps) {
  return null;
}
