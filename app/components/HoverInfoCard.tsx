import Image from "next/image";
import React from "react";

type HoverInfoCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  width?: number | string;
  height?: number | string;
};

export default function HoverInfoCard({
  title,
  description,
  icon,
  className = "",
  width = 300,
  height = 300,
}: HoverInfoCardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden",
        "transition-transform duration-300 ease-out hover:scale-[1.02]",
        className,
      ].join(" ")}
      style={{ width, height }}
      aria-label={title}
    >
      {/* Backgrounds */}
      <Image
        src="/hoverfalse.svg"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, 320px"
        className="pointer-events-none select-none object-cover opacity-100 transition-opacity duration-300 ease-out group-hover:opacity-0"
      />
      <Image
        src="/hovertrue.svg"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 320px"
        className="pointer-events-none select-none object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col items-start justify-start text-start px-20 py-10">
        <h3
          className={[
            "text-xs sm:text-sm md:text-base font-bold tracking-tight wrap-break-word ",
            "text-secondary transition-colors duration-300 ease-out",
            "group-hover:text-white",
          ].join(" ")}
        >
          {title}
        </h3>
        <p
          className={[
            "",
            "mt-2 text-xs sm:text-sm md:text-base leading-relaxed wrap-break-word max-w-full",
            "text-secondary/90 transition-colors duration-300 ease-out",
            "group-hover:text-white/90",
            "line-clamp-5", // ✅ coupe à 5 lignes avec ellipses
          ].join(" ")}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
