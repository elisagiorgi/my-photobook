import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "hover:opacity-90",
        secondary: "hover:opacity-90",
        outline: "border-2 bg-transparent hover:opacity-80",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  variant,
  className = "",
  children,
  style,
  ...props
}: ButtonProps) {
  const getVariantStyle = () => {
    if (variant === "primary")
      return {
        backgroundColor: "var(--primary)",
        color: "var(--primary-foreground)",
      };
    if (variant === "secondary")
      return {
        backgroundColor: "var(--secondary)",
        color: "var(--secondary-foreground)",
      };
    if (variant === "outline")
      return {
        borderColor: "var(--primary)",
        color: "var(--foreground)",
      };
    return {};
  };

  return (
    <button
      className={buttonVariants({ variant, className })}
      style={{ ...getVariantStyle(), ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
