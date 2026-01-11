import { Link } from "next-view-transitions";
import { ButtonProps as RACButtonProps } from "react-aria-components";

export type ButtonVariants = "primary" | "secondary";

export interface ButtonProps extends RACButtonProps {
  variant: ButtonVariants;
}

export interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
  variant: ButtonVariants;
}
