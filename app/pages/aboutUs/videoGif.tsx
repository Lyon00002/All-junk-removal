"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function VideoGif (){
    const controls = useAnimation();
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (hovered) {
            controls.start({ opacity: 0.7, transition: { duration: 15, ease: "easeOut" } });
        } else {
            controls.stop();
            controls.set({ opacity: 1 });
        }
    }, [hovered, controls]);

    return (
         <main className="w-full flex items-center justify-center ">
            <div
              className="bg-transparent w-[440px] h-[300px] relative  flex items-center justify-center"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
                {/* Underlay: projet.gif */}
                <img
                  src="/projet.gif"
                  alt="projet animation"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{
                    WebkitMaskImage: 'url(/bg.svg)',
                    maskImage: 'url(/bg.svg)',
                    WebkitMaskSize: 'cover',
                    maskSize: 'cover',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                  }}
                />
                {/* Overlay: bg.svg (on top to hide the GIF) */}
                <motion.img
                  src="/bg.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  initial={{ opacity: 1 }}
                  animate={controls}
                />
            </div>
        </main>
    )
}