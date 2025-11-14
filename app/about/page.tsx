"use client";

import { motion } from "framer-motion";
import GetQuoteButton from "@/app/components/GetQuoteButton";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="w-full flex items-center justify-center pt-28 ">
            <div className="bg-black w-[440px] h-[300px] relative overflow-hidden flex items-center justify-center">
                {/* Top-left */}

                <div className="absolute -bottom-5 -left-7  -top-12 w-[100px] h-[100px] flex justify-center ">
                    <img
                        src="/nvcCompt2.svg"
                        alt=""
                        className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto absolute left-3 top-10 rotate-14 drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                    />
                    <img
                        src="/nvcCompt2.svg"
                        alt=""
                        className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto absolute left-10 top-10 "
                    />
                </div>

                {/* Top-right */}
                <img src="/nvcCompt.svg" alt=""
                    className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto absolute top-0 right-0 translate-x-4 -translate-y-4 -rotate-12 drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)] transform" />
                {/* Bottom-left */}
                <img src="/nvcCompt.svg" alt=""
                    className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto absolute bottom-7 left-0 -translate-x-6 translate-y-6 -rotate-6 drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)] transform" />
                {/* Bottom-right */}
                <img src="/nvcCompt.svg" alt=""
                    className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto absolute bottom-0 right-0 translate-x-2 translate-y-2 rotate-6 drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)] transform" />
                {/* Top-center
                <img src="/nvcCompt.svg" alt="" width={60} height={60}
                     className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 rotate-3 drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)] transform" /> */}
                {/* bottom-center*/}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[100px] h-[100px] flex justify-center ">
                    <img
                        src="/nvcCompt2.svg"
                        alt=""
                        className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto absolute left-3 top-10 rotate-7 drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                    />
                    <img
                        src="/nvcCompt2.svg"
                        alt=""
                        className="w-12 sm:w-14 md:w-16 lg:w-18 h-auto absolute left-10 top-8 -rotate-14 "
                    />
                </div>
            </div>
        </main>
    );
}
