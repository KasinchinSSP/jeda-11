export type ServiceItem = {
  title: string;
  desc: string;
  icon: string;
};

export type ServicesIntroProps = {
  title: string;
  intro: string;
  services: ServiceItem[];
  note?: string;
};

export default function ServicesIntro(_props: ServicesIntroProps) {
  return null;
}
