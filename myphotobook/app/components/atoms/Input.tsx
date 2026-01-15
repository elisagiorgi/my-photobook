import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "w-full px-3 py-2 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      error: {
        true: "border-red-400",
        false: "",
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export function Input({ error, className = "", ...props }: InputProps) {
  return (
    <input
      className={inputVariants({ error, className })}
      style={{
        backgroundColor: "var(--disabled)",
        borderColor: error ? undefined : "var(--border)",
        color: "var(--foreground)",
      }}
      {...props}
    />
  );
}
