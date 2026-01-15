import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function Label({
  children,
  required = false,
  className = "",
  ...props
}: LabelProps) {
  return (
    <label
      className={`block text-sm font-medium mb-1.5 ${className}`}
      style={{ color: "var(--foreground)" }}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1" style={{ color: "var(--primary)" }}>
          *
        </span>
      )}
    </label>
  );
}
