import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  tag: HeadingTag;
  className?: string;
  children: ReactNode;
};

const headingStyles: Record<HeadingTag, string> = {
  h1: twMerge("text-5xl", "font-bold"),
  h2: twMerge("text-4xl", "font-bold"),
  h3: twMerge("text-3xl", "font-bold"),
  h4: twMerge("text-2xl", "font-bold"),
  h5: twMerge("text-xl", "font-bold"),
  h6: twMerge("text-lg", "font-bold", "leading-7"),
};

export function Heading({ tag = "h1", className, children }: HeadingProps) {
  const Component = tag;

  return (
    <Component className={twMerge(headingStyles[tag], className)}>
      {children}
    </Component>
  );
}
