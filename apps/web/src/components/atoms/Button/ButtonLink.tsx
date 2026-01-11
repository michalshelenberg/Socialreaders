import { classNames } from "@/utils/classNames";
import { Link } from "next-view-transitions";
import styles from "./Button.module.scss";
import { ButtonLinkProps } from "./Button.types";

const cn = classNames(styles);

export function ButtonLink(props: ButtonLinkProps) {
  const { variant, children, className, ...restProps } = props;

  return (
    <Link
      className={cn("button", `button--${variant}`, className)}
      {...restProps}
    >
      {children}
    </Link>
  );
}
