import Image from "next/image";
import React from "react";

type HoverInfoCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  /**
   * Optional sizes and dimensions; defaults to a square card.
   */
  width?: number | string;
  height?: number | string;
};

export default function HoverInfoCard({
  title,
  description,
  icon,
  className = "",
  width = 320,
  height = 320,
}: HoverInfoCardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden ",
        "transition-transform duration-300 ease-out hover:scale-[1.02]",
        className,
      ].join(" ")}
      style={{ width, height }}
      aria-label={title}
    >
      {/* Backgrounds (swap on hover) */}
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

      {/* Left centered circle with icon */}
      {/* <div
        className={[
          "absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2",
          "h-12 w-12 rounded-full",
          "bg-secondary text-white",
          "shadow-[0_6px_16px_rgba(0,0,0,0.25)]",
          "grid place-items-center",
          "transition-colors duration-300 ease-out",
          "group-hover:bg-white group-hover:text-secondary",
        ].join(" ")}
        aria-hidden
      >
        {icon ?? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z" />
          </svg>
        )}
      </div> */}

      {/* Centered content */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center  px-7 sm:px-9 md:px-11">
        <h3
          className={[
            "text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight break-words",
            "text-secondary transition-colors duration-300 ease-out",
            "group-hover:text-white",
          ].join(" ")}
        >
          {title}
        </h3>
        <p
          className={[
            "px-7 sm:px-9 md:px-11",
            "mt-2 text-sm sm:text-base leading-relaxed break-words max-w-full",
            "text-secondary/90 transition-colors duration-300 ease-out",
            "group-hover:text-white/90",
          ].join(" ")}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
