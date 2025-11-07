"use client";

import React from "react";

export type DotsIndicatorProps = {
  count?: number;
  activeIndex?: number; // 0-based
  className?: string;
  size?: number; // px
  gap?: number; // px
};

export default function DotsIndicator({
  count = 3,
  activeIndex = 1,
  className = "",
  size = 8,
  gap = 10,
}: DotsIndicatorProps) {
  const dots = Array.from({ length: Math.max(1, count) });
  const dotStyle = { width: size, height: size } as React.CSSProperties;
  const gapStyle = { columnGap: gap } as React.CSSProperties;

  return (
    <div
      className={[
        "flex items-center justify-center",
        className,
      ].join(" ")}
      style={gapStyle}
      role="tablist"
      aria-label="Slide indicators"
    >
      {dots.map((_, i) => (
        <span
          key={i}
          style={dotStyle}
          className={[
            "rounded-full",
            i === activeIndex ? "bg-white" : "bg-white/40",
          ].join(" ")}
          aria-current={i === activeIndex}
        />
      ))}
    </div>
  );
}
