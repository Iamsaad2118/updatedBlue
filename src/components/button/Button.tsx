import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "px-6 py-4 rounded-md",
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-white text-primary hover:text-accent",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
