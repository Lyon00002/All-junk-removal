"use client";

import Image from "next/image";
import ArrowButton from "../../components/ArrowButton";
import GetQuoteButton from "../../components/GetQuoteButton";
import BookEstimateButton from "../../components/BookEstimateButton";
import HoverInfoCard from "../../components/HoverInfoCard";
import { motion } from "framer-motion";

export default function ChooseUs() {
    return (
        <main className=" w-full  flex items-start justify-center">
            {/* Fixed-size hero frame */}
            <div className="relative w-full g min-h-[900px] overflow-visible ">
                <Image
                    src="/chooseusSection.png"
                    alt="Background"
                    fill
                    priority
                    quality={100}
                    className="select-none object-cover"
                />

                {/* Centered content constrained to Navbar width */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:py-20 md:py-24 flex flex-col items-center text-center text-secondary">
                    <motion.p       
                        className="font-semibold leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl"
                        variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Why choose us:
                    </motion.p>

                    <motion.p
                        className="mt-4 sm:mt-5 md:mt-6 w-full text-base sm:text-lg md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        With the Naoki tribe, cleanliness becomes a true culture of care and respect. Our passionate teams take care of every corner of your spaces, so that your premises exude freshness and serenity. Nothing is left to chance, because we know how much a clean environment influences daily well-being.
                    </motion.p>

                    {/* 3x2 responsive grid of hover cards */}
                    <motion.div
                        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 "
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                            },
                        }}
                    >
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <HoverInfoCard
                                    title={`Quality Service ${i + 1}`}
                                    description="We will step in as soon as the work is completed to clean your business premises from top to bottom, so you can return to work in a clean and pleasant environment."
                                    width="90%"
                                    height={300}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </main>
    );
}
