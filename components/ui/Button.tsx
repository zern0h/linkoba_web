"use client";

import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  external?: boolean;
}

const variants = {
  primary:
    "bg-[#356df3] text-white hover:bg-[#2a5de0] shadow-sm hover:shadow-md active:scale-[0.98]",
  secondary:
    "bg-[#202020] text-white hover:bg-[#333] shadow-sm hover:shadow-md active:scale-[0.98]",
  ghost:
    "bg-white text-[#202020] border border-[#dededb] hover:border-[#356df3] hover:text-[#356df3] hover:bg-[#e8edff]",
  outline:
    "border border-[#dededb] text-[#202020] hover:bg-white/80 backdrop-blur-sm",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base font-semibold",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  external,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356df3] focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
