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
  className = "",
  width = "100%",
  height = "300px",
}: HoverInfoCardProps) {
  return (
    <div 
      className={["group relative overflow-hidden bg-gray-100 rounded-lg",
        className,
      ].join(" ")}
      
      aria-label={title}
       style={{ width, height }}
    >
      <div className="relative z-10 p-4 transition-opacity duration-300 ease-out group-hover:opacity-0">
        <h3
            className={[
              "text-xs sm:text-sm md:text-base font-bold tracking-tight wrap-break-word ",
              "text-secondary text-left transition-colors duration-300 ease-out",
              "group-hover:text-white",
            ].join(" ")}
          >
            {title}
          </h3>
          <p
            className={[
              "",
              "text-8 sm:text-12 md:text-14 leading-relaxed wrap-break-word max-w-full",
              "text-secondary/90 text-left transition-colors duration-300 ease-out",
              "group-hover:text-white/90 mt-2",
              "line-clamp-4", // ✅ coupe à 5 lignes avec ellipses
            ].join(" ")}
          >
            {description}
          </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[45%] group-hover:h-full transition-all duration-300 ease-out bg-amber-400 rounded-lg" />
    </div>

  );
}
