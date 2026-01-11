import { classNames } from "@/utils/classNames";
import styles from "./Heading.module.scss";
import { HeadingProps } from "./Heading.types";

const cn = classNames(styles);

const DEFAULT_ELEMENT_TAG = "h1";

export function Heading(props: HeadingProps) {
  const {
    as: ElementTag = DEFAULT_ELEMENT_TAG,
    variant,
    children,
    className,
    ...restProps
  } = props;

  return (
    <ElementTag
      className={cn("heading", `heading--${variant}`, className)}
      {...restProps}
    >
      {children}
    </ElementTag>
  );
}
