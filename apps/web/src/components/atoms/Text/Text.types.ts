import { ComponentPropsWithoutRef } from "react";

export type TextElementTypes = "p" | "span" | "label" | "div";

export type TextProps<TElement extends TextElementTypes = "p"> =
  ComponentPropsWithoutRef<TElement> & {
    as?: TElement;
    size?: "sm" | "md" | "lg";
  };
