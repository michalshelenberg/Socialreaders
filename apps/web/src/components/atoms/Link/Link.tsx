import { classNames } from "@/utils/classNames";
import { Link as NextViewTransitionsLink } from "next-view-transitions";
import styles from "./Link.module.scss";
import { LinkProps } from "./Link.types";

const cn = classNames(styles);

export function Link(props: LinkProps) {
  const { children, className, ...restProps } = props;

  return (
    <NextViewTransitionsLink className={cn("link", className)} {...restProps}>
      {children}
    </NextViewTransitionsLink>
  );
}
