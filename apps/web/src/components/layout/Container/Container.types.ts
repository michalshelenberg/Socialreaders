export type ContainerVariants = "sm" | "md";

export interface ContainerProps {
  variant?: ContainerVariants;
  children: React.ReactNode;
  className?: string;
}
