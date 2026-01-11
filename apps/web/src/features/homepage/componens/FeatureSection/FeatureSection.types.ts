import { ImageProps } from "next/image";

export type FeatureSectionProps = {
  image: ImageProps;
  icon: React.ReactNode;
  title: string;
  description: string;
  inverted?: boolean;
};
