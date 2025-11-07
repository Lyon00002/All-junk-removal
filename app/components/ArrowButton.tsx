"use client";

import Link from "next/link";
import React from "react";

type Size = "sm" | "md" | "lg";
type Direction = "left" | "right";

export type ArrowButtonProps = {
  ariaLabel?: string;
  href?: string;
  onClick?: () => void;
  size?: Size;
  className?: string;
  disabled?: boolean;
  direction?: Direction;
};

function sizeClasses(size: Size) {
  switch (size) {
    case "sm":
      return "h-8 w-8 text-[14px]";
    case "lg":
      return "h-12 w-12 text-[18px]";
    case "md":
    default:
      return "h-10 w-10 text-[16px]";
  }
}

const baseClasses = [
  "group inline-grid place-items-center rounded-full border border-secondary/40",
  "bg-transparent text-white border-white/60",
  "transition-colors duration-200 ease-out",
  "hover:bg-secondary hover:text-white",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary/70",
  "disabled:opacity-60 disabled:cursor-not-allowed",
].join(" ");

function ArrowIcon({ direction = "right" }: { direction?: Direction }) {
  // stroke uses currentColor so it automatically switches to white on hover
  return (
    <svg
      className={[
        "transition-transform duration-200 ease-out group-hover:translate-x-0.5",
        direction === "left" ? "-scale-x-100" : "",
      ].join(" ")}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ArrowButton({
  ariaLabel = "Next",
  href,
  onClick,
  size = "md",
  className = "",
  disabled,
  direction = "right",
}: ArrowButtonProps) {
  const classes = `${baseClasses} ${sizeClasses(size)} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} aria-disabled={disabled} role="button">
        <ArrowIcon direction={direction} />
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      <ArrowIcon direction={direction} />
    </button>
  );
}
