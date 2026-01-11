import { classNames } from "@/utils/classNames";
import styles from "./Text.module.scss";
import { TextProps } from "./Text.types";

const cn = classNames(styles);

const DEFAULT_ELEMENT_TAG = "p";

export function Text(props: TextProps) {
  const {
    as: ElementTag = DEFAULT_ELEMENT_TAG,
    children,
    className,
    ...restProps
  } = props;

  return (
    <ElementTag className={cn("text", className)} {...restProps}>
      {children}
    </ElementTag>
  );
}
