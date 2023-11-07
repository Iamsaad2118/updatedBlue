import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={twMerge("md:container mx-auto px-5 xl:px-20", className)}>
      {children}
    </div>
  );
}
