"use client";

import Image from "next/image";
import GetQuoteButton from "../../components/GetQuoteButton";
import BookEstimateButton from "../../components/BookEstimateButton";
import { motion } from "framer-motion";
import DotsIndicator from "../../components/DotsIndicator";

export default function Hero() {
  return (
    <main className="min-h-screen w-full flex items-start justify-center ">
      {/* Fixed-size hero frame */}
      <div className="relative w-[1440px] max-w-full h-[900px] overflow-hidden ">
        {/* Background image fills the frame */}
        <Image
          src="/poubelles1.jpg"
          alt="Background"
          fill
          priority
          quality={100}
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="select-none object-cover"
        />

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
              Fast, Affordable, and Reliable Junk Removal <span className="text-secondary font-bold">We Haul It All!</span>
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
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center">
          <DotsIndicator count={3} activeIndex={1} />
        </div>

      </div>
    </main>
  );
}
