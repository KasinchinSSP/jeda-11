export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterSocial = {
  icon: string;
  href: string;
};

export type FooterProps = {
  address: string;
  columns: FooterColumn[];
  socials: FooterSocial[];
  legal: string;
};

export default function Footer(_props: FooterProps) {
  return null;
}
