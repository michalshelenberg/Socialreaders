import { classNames } from "@/utils/classNames";
import styles from "./Container.module.scss";
import { ContainerProps } from "./Container.types";

const cn = classNames(styles);

export function Container(props: ContainerProps) {
  const { variant, className, children } = props;

  return (
    <div className={cn("container", `container--${variant}`, className)}>
      {children}
    </div>
  );
}
