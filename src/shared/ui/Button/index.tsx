import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import React from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorType = AnchorHTMLAttributes<HTMLAnchorElement>;
type DefaultType = {
  className?: string;
  children?: React.ReactNode;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  element?: "button" | "Link" | "a";
};

type Props = ButtonType & DefaultType & AnchorType;

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
  "flex items-center justify-center cursor-pointer rounded-md  duration-200 disabled:pointer-events-none disabled:opacity-50";

export const Button: React.FC<Props> = ({
  className,
  children,
  type = "button",
  size = "md",
  variant = "primary",
  element = "button",
  href,
  ...props
}) => {
  return (
    <React.Fragment>
      {element === "button" ? (
        <button
          type={type}
          className={cn(sizes[size], variants[variant], base, className)}
          {...props}
        >
          {children}
        </button>
      ) : (
        <Link
          href={href ?? "/"}
          type={type}
          className={cn(sizes[size], variants[variant], base, className)}
          {...props}
        >
          {children}{" "}
        </Link>
      )}
    </React.Fragment>
  );
};
