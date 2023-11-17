import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.ForwardRefRenderFunction<null, ButtonProps> = (
  { variant = "primary", className, children, ...rest },
  ref,
) => {
  return (
    <button
      ref={ref}
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
};

const ForwardedButton = React.forwardRef(Button);

export { ForwardedButton as Button };
