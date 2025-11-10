"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Temoin from "@/app/components/Temoin";


export default function Testimonial() {
    return (
        <main className="min-h-screen w-full flex items-start justify-center ">
            {/* Frame aligned with other sections */}
            <div className="relative w-[1440px] 2xl:w-[1920px] max-w-full">
                <Image
                    src="/chooseusSection.svg"
                    alt="Background"
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    className="select-none object-cover"
                />
                {/* Content constrained to Navbar width */}
                <div className="relative z-10 mx-auto w-full max-w-7xl text-secondary">

                    <div className="flex flex-col items-center text-center">
                        <motion.p
                            className="font-semibold leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            They trusted us
                        </motion.p>

                        <motion.p
                            className="mt-3 md:mt-4 w-full text-sm px-6 sm:text-base md:text-lg font-normal"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            Because they believed in our vision, we put all our expertise, energy, and commitment into meeting their expectations.
                        </motion.p>

                        <div className="mt-10 relative w-full overflow-hidden h-[300px] sm:h-[380px] md:h-[480px] lg:h-[560px] 2xl:h-[680px]">
                            <motion.div
                                className="flex gap-[30px] whitespace-nowrap will-change-transform"
                                aria-hidden
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                            >
                                {/* Row A */}
                                <div className="flex gap-[30px] shrink-0">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={`a-${i}`} className="shrink-0">
                                            <Temoin className="w-[180px] sm:w-[260px] md:w-[420px] h-full overflow-hidden" />
                                        </div>
                                    ))}
                                </div>
                                {/* Row B (duplicate for seamless loop) */}
                                <div className="flex gap-[30px] shrink-0">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={`b-${i}`} className="shrink-0">
                                            <Temoin className="w-[180px] sm:w-[260px] md:w-[420px] h-full overflow-hidden" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
