"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GetQuoteButton from "@/app/components/GetQuoteButton";
import BookEstimateButton from "@/app/components/BookEstimateButton";

export default function WhoAreYou() {
  return (
    <main className=" w-full flex items-start justify-center">
      {/* Frame aligned with other sections */}
      <div className="relative w-full">
        <Image
          src="/chooseusSection.png"
          alt="Background"
          fill
          priority
          quality={100}
          className="select-none object-cover"
        />
        {/* Content constrained to Navbar width */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:py-20 md:py-24 text-secondary ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 md:gap-10">
            {/* Left: Image */}
            <div className="relative w-full overflow-hidden rounded-lg h-[260px] sm:h-[320px] md:h-full md:min-h-[360px]">
              <Image
                src="/hpoubelle.jpg"
                alt="Who we are visual"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                className="select-none object-cover"
              />
            </div>

            {/* Right: Texts */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <motion.p
                className="font-semibold leading-tight tracking-tight text-xl sm:text-2xl md:text-3xl"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Who are you?
              </motion.p>
              <motion.p
                className="mt-4 sm:mt-5 md:mt-6 w-full text-base sm:text-lg md:text-2xl font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Clearing Clutter Has Never Been Easier
              </motion.p>
              <motion.p
                className="mt-3 md:mt-4 w-full text-sm sm:text-base md:text-lg font-normal"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Whether you're cleaning out a garage, preparing a property for sale, or finishing a remodel, All Junk Removal makes it simple to reclaim your space.We handle all the sorting, lifting, loading, and disposal — so you don't have to. From old furniture and appliances to yard debris and construction waste, our team is ready to tackle jobs big and small.Whether you're cleaning out a garage, preparing a property for sale, or finishing a remodel, All Junk Removal makes it simple to reclaim your space. We handle all the sorting, lifting, loading, and disposal  our team is ready to tackle jobs big and small
              </motion.p>
              <div className="mt-6 flex flex-wrap items-center gap-3 md:gap-4">
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <GetQuoteButton
                    label="Get a Free Quote"
                    size="md"
                    className="rounded-lg px-6"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <GetQuoteButton
                    label="See our pricing"
                    href="/quote"
                    variant="outline-primary"
                    size="md"
                    className="rounded-lg px-6"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
