export type ProcessStep = {
  index: number;
  title: string;
  icon: string;
};

export type ProcessTimelineProps = {
  title: string;
  steps: ProcessStep[];
};

export default function ProcessTimeline(_props: ProcessTimelineProps) {
  return null;
}
