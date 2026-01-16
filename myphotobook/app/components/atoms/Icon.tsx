import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("", {
  variants: {
    size: {
      sm: "text-lg", // 18px
      md: "text-2xl", // 24px
      lg: "text-4xl", // 36px
      xl: "text-6xl", // 60px
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof iconVariants> {
  name: string;
  filled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Icon({
  name,
  size,
  filled = false,
  className = "",
  style,
  ...props
}: IconProps) {
  const iconClass = filled ? "material-symbols" : "material-symbols-outlined";

  return (
    <span
      className={`${iconClass} ${iconVariants({ size })} ${className}`}
      style={style}
      {...props}
    >
      {name}
    </span>
  );
}
