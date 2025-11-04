export type FaqItem = {
  q: string;
  a: string;
};

export type FaqProps = {
  title: string;
  items: FaqItem[];
};

export default function Faq(_props: FaqProps) {
  return null;
}
