export type ProductHighlight = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  spec: string[];
};

export type ProductHighlightsProps = {
  items: ProductHighlight[];
};

export default function ProductHighlights(_props: ProductHighlightsProps) {
  return null;
}
