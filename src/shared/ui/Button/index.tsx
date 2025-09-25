import { cn } from "@/shared/lib/utils";
import type React from "react";
import type { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonType {
  className?: string;
  children?: React.ReactNode;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
}

const sizes = {
  sm: "px-4 py-1 text-sm",
  md: "px-6 py-2 text-base",
};

const variants = {
  primary: "bg-black text-white hover:bg-black/80",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  outline: "border border-gray-200 text-gray-700 hover:bg-gray-100",
};

const base =
  "flex items-center justify-center cursor-pointer rounded-md transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

export const Button: React.FC<Props> = ({
  className,
  children,
  type = "button",
  size = "md",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={cn(sizes[size], variants[variant], base, className)}
    >
      {children}
    </button>
  );
};
