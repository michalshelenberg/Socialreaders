"use client";

import { classNames } from "@/utils/classNames";
import { Button as RACButton } from "react-aria-components";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const cn = classNames(styles);

export function Button(props: ButtonProps) {
  const { variant, children, className, ...restProps } = props;

  return (
    <RACButton
      className={cn("button", `button--${variant}`, className)}
      {...restProps}
    >
      {children}
    </RACButton>
  );
}
