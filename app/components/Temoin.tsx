"use client";

import Image from "next/image";
import React from "react";

export type TemoinProps = {
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
};

/**
 * Temoin: responsive testimonial card with hover zoom & adaptive layout.
 */
export default function Temoin({
  className = "",
  src = "/hpoubelle.jpg",
  alt = "Temoin image",
  priority = false,
}: TemoinProps) {
  return (
    <div
      className={[
        "relative w-full overflow-hidden bg-transparent",
        // 🔹 Hauteur fluide selon la taille d’écran
        "h-[200px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[420px] 2xl:h-[640px]",
        // 🔹 Animation fluide au survol
        "transition-transform duration-500 ease-out hover:scale-[1.05] hover:z-10",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 flex flex-col">
        {/* 🔹 Image prend 60% à 75% de la hauteur selon l’écran */}
        <div className="relative w-full h-[50%] xs:h-[60%] sm:h-[65%] md:h-[75%]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover rounded-t-lg transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* 🔹 Conteneur du texte */}
        <div className="absolute bottom-[6px] left-[6px] right-[6px] xs:bottom-2 xs:left-2 xs:right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4">
          <div
            className="
              bg-white/50 backdrop-blur-sm text-secondary 
              shadow-md hover:shadow-xl shadow-black/10 
              rounded-md sm:rounded-lg 
              p-[6px] xs:p-2 sm:p-3 md:p-4 w-full text-left
              transition-all duration-300 ease-out
            "
          >
            <div className="flex flex-col items-start gap-[2px] xs:gap-1 sm:gap-1.5 md:gap-2">
              <p
                className="
                  text-[8px] xs:text-[9px] sm:text-xs md:text-sm 
                  overflow-hidden line-clamp-2 whitespace-normal leading-snug
                "
              >
                The crew arrived on time, gave me a fair quote, and had
                everything loaded up in under an hour. Great service!
              </p>

              <p className="font-semibold text-[8px] xs:text-[9px] sm:text-xs md:text-sm">
                Sarah M., Paris
              </p>

              <div className="flex items-center gap-[2px] xs:gap-[3px] sm:gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="10"
                    height="10"
                    className="xs:w-[12px] xs:h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
