import type { ImageProps } from "next/image";

export interface MarqueeProps {
  images: Array<ImageProps>;
  className?: string;
}
