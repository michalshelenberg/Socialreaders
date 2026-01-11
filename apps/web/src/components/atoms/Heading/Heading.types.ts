import { ComponentPropsWithoutRef } from "react";

export type HeadingVariants = "md" | "lg" | "sm";
export type HeadingElementTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type HeadingProps<TElement extends HeadingElementTypes = "h1"> =
  ComponentPropsWithoutRef<TElement> & {
    as?: TElement;
    variant?: HeadingVariants;
  };
