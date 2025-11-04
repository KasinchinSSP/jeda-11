export type HeaderNavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

export type HeaderProps = {
  nav: HeaderNavItem[];
  logoSrc: string;
};

export default function Header(_props: HeaderProps) {
  return null;
}
