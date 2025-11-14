"use client";

import Image from "next/image";
import GetQuoteButton from "../../components/GetQuoteButton";
import BookEstimateButton from "../../components/BookEstimateButton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DotsIndicator from "../../components/DotsIndicator";

export default function Hero() {
  const slides = [
    { src: "/img1.jpg", label: "poubelle 1" },
    { src: "/img2.jpg", label: "poubelle 2" },
    { src: "/img3.jpg", label: "poubelle 3" },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <main className="h-[500px] sm:h-[900px] md:h-[950px] lg:h-[1000px] w-full flex items-start justify-center pb-0 ">
      {/* Fixed-size hero frame */}
      <div className="relative w-full max-w-full h-full overflow-hidden">
        {/* Background image fills the frame */}
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <motion.div
              key={s.src}
              className="absolute inset-0"
              initial={{ opacity: i === index ? 1 : 0 }}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={s.src}
                alt="Background"
                fill
                priority={i === index}
                quality={100}
                //sizes="(max-width: 1920px) 100vw, 1920px"
                className="select-none object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero content */}
        <section className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <motion.div
            className="max-w-5xl text-center text-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } },
            }}
          >
            <motion.h1
              className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            >
              Fast, Affordable, and Reliable Junk Removal{" "}
              <motion.span
                className="text-primary font-bold inline-block"
                variants={{ hidden: { opacity: 0, y: 6, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1 } }}
              >
                We Haul It All!
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-4 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            >
              Serving Your City, State with same-day junk removal for homes, businesses, and construction sites. Locally owned, fully insured, and ready to get the job done.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <GetQuoteButton
                  href="/quote"
                  label="Call or text"
                  size="md"
                  className="font-normal w-[200px]"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <BookEstimateButton href="/estimate" size="md" className="w-[200px]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Bottom-centered dots indicator */}
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-3">
          <DotsIndicator count={slides.length} activeIndex={index} />
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/90 text-sm"
          >
          </motion.span>
        </div>

      </div>
    </main>
  );
}
