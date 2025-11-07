"use client";

import Link from "next/link";
import React from "react";

type Size = "sm" | "md" | "lg";
type Variant = "solid" | "outline";

export type GetQuoteButtonProps = {
  label?: string;
  href?: string;
  onClick?: () => void;
  size?: Size;
  className?: string;
  disabled?: boolean;
  variant?: Variant;
  withHoverIcon?: boolean;
};

function sizeClasses(size: Size) {
  switch (size) {
    case "sm":
      return "px-2 py-1 text-xs";
    case "lg":
      return "px-3 py-2 text-base";
    case "md":
    default:
      return "px-2 py-1 text-sm";
  }
}

function variantClasses(variant: Variant): string {
  if (variant === "outline") {
    return [
      "border border-white/80 text-white bg-transparent",
      "hover:bg-secondary hover:border-secondary",
    ].join(" ");
  }
  return [
    "bg-primary text-white",
    "hover:bg-primary/90",
  ].join(" ");
}

const baseClasses = [
  "inline-flex items-center justify-center rounded-full",
  "font-semibold",
  "transition",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/70",
  "disabled:opacity-60 disabled:cursor-not-allowed",
  "group gap-2",
].join(" ");

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GetQuoteButton({
  label = "Get a quote",
  href,
  onClick,
  size = "md",
  className = "",
  disabled,
  variant = "solid",
  withHoverIcon = false,
}: GetQuoteButtonProps) {
  // ensure equal heights per size and space for the icon to appear
  const minHeight =
    size === "sm" ? "min-h-[40px]" : size === "lg" ? "min-h-[48px]" : "min-h-[44px]";
  // no hard min-width so the button adapts perfectly to its content
  const minWidth = "";
  const classes = [
    baseClasses,
    variantClasses(variant),
    sizeClasses(size),
    minHeight,
    minWidth,
    className,
  ].join(" ").trim();

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled} role="button">
        {withHoverIcon ? (
          <span className="grid w-full grid-cols-[16px_auto_16px] items-center">
            <span aria-hidden />
            <span className="text-center">{label}</span>
            <span
              className={[
                "flex h-4 w-4 items-center justify-center transition-opacity duration-200",
                "opacity-0 group-hover:opacity-100",
              ].join(" ")}
            >
              <ArrowIcon />
            </span>
          </span>
        ) : (
          <span className="w-full text-center">{label}</span>
        )}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {withHoverIcon ? (
        <span className="grid w-full grid-cols-[16px_auto_16px] items-center">
          <span aria-hidden />
          <span className="text-center">{label}</span>
          <span
            className={[
              "flex h-4 w-4 items-center justify-center transition-opacity duration-200",
              "opacity-0 group-hover:opacity-100",
            ].join(" ")}
          >
            <ArrowIcon />
          </span>
        </span>
      ) : (
        <span className="w-full text-center">{label}</span>
      )}
    </button>
  );
}
