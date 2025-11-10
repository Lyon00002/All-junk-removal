"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Temoin from "@/app/components/Temoin";
import BookEstimateButton from "@/app/components/BookEstimateButton";
import GetQuoteButton from "@/app/components/GetQuoteButton";
import QuickLinks from "@/app/components/QuikLincks";


export default function Footer() {
    return (
        <footer className="w-full">
            {/* Frame aligned with other sections */}
            <div className="relative w-[1440px] 2xl:w-[1920px] max-w-full mx-auto">
                {/* Content constrained to Navbar width */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-0 py-0">

                    {/* Secondary bar with 4 blocks */}
                    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">

                        <div className="bg-secondary text-white px-4 sm:px-6 md:px-8 lg:px-12 py-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                                {/* bloc1*/}
                                <motion.div className="flex items-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
                                    <Image src="/logo.svg" alt="Logo" width={500} height={400} className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-full" />
                                </motion.div>
                                {/* bloc2 */}
                                <motion.div className="m-0 text-sm sm:text-base space-y-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
                                    <p className="font-medium">Discover Abstract</p>
                                    <p className="font-normal text-xs sm:text-sm md:text-sm">
                                        Abstract is a professional<br />
                                        cleaning service<br />
                                        company with a genuine<br />
                                        CSR policy.
                                    </p>
                                    <p className="font-normal text-xs sm:text-sm md:text-sm">
                                        Opening hours Monday to Friday<br />
                                        8h30 – 12h / 13h30 – 17h
                                    </p>
                                </motion.div>
                                {/* bloc3 */}
                                <QuickLinks></QuickLinks>
                                {/* bloc4 */}
                                <motion.div className="m-0 text-sm sm:text-base space-y-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
                                    <p className="font-medium">Social Media</p>
                                    <motion.div className="flex items-center gap-3 text-primary">
                                        {/* Facebook */}
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary/70 transition">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .73.593 1.33 1.325 1.33h11.494v-9.84H9.692v-3.84h3.127V7.51c0-3.1 1.894-4.79 4.66-4.79 1.325 0 2.465.098 2.797.142v3.24h-1.92c-1.5 0-1.795.715-1.795 1.765v2.31h3.587l-.467 3.84h-3.12v9.84h6.117c.73 0 1.325-.6 1.325-1.33V1.325C24 .593 23.405 0 22.675 0z" />
                                            </svg>
                                        </a>

                                        {/* WhatsApp */}
                                        <a href="https://wa.me/xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="hover:text-primary/70 transition">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 .02 5.35.02 11.97c0 2.12.55 4.2 1.6 6.02L0 24l6.19-1.61a11.95 11.95 0 0 0 5.8 1.48h.01C18.63 23.87 24 18.52 24 11.97a11.7 11.7 0 0 0-3.48-8.49zM12 21.4a9.42 9.42 0 0 1-4.78-1.3l-.34-.2-3.68.96.98-3.59-.22-.37a9.43 9.43 0 0 1-1.43-5.01A9.44 9.44 0 0 1 12 2.55a9.42 9.42 0 0 1 9.43 9.42A9.43 9.43 0 0 1 12 21.4zm5.4-7.08c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.65-1.56-.9-2.14-.24-.58-.49-.5-.66-.51h-.57c-.2 0-.52.07-.8.35-.27.28-1.05 1.03-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49 3 .29 4.03.26 4.73.23.7-.03 2.3-.93 2.62-1.82.33-.89.33-1.66.24-1.82-.1-.16-.27-.25-.57-.4z" />
                                            </svg>
                                        </a>

                                        {/* Instagram */}
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary/70 transition">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.25 2.43.42a4.9 4.9 0 0 1 1.78 1.16 4.9 4.9 0 0 1 1.16 1.78c.17.46.37 1.26.42 2.43.06 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.25 1.97-.42 2.43a4.9 4.9 0 0 1-1.16 1.78 4.9 4.9 0 0 1-1.78 1.16c-.46.17-1.26.37-2.43.42-1.27.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.25-2.43-.42a4.9 4.9 0 0 1-1.78-1.16 4.9 4.9 0 0 1-1.16-1.78c-.17-.46-.37-1.26-.42-2.43C2.21 15.58 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.25-1.97.42-2.43a4.9 4.9 0 0 1 1.16-1.78A4.9 4.9 0 0 1 5.63 1.64c.46-.17 1.26-.37 2.43-.42C9.33 1.16 9.72 1.15 12 1.15M12 0C8.74 0 8.332.012 7.052.07 5.773.127 4.737.323 3.83.637 2.9.96 2.12 1.46 1.35 2.24.57 3.02.07 3.8-.25 4.73c-.31.9-.51 1.94-.57 3.22C-.01 8.23 0 8.64 0 12s.012 3.77.07 5.05c.057 1.28.263 2.32.57 3.22.32.93.82 1.71 1.6 2.49.78.78 1.56 1.28 2.49 1.6.9.31 1.94.51 3.22.57C8.23 23.99 8.64 24 12 24s3.77-.012 5.05-.07c1.28-.057 2.32-.263 3.22-.57.93-.32 1.71-.82 2.49-1.6.78-.78 1.28-1.56 1.6-2.49.31-.9.51-1.94.57-3.22.06-1.28.07-1.69.07-5.05s-.012-3.77-.07-5.05c-.057-1.28-.263-2.32-.57-3.22-.32-.93-.82-1.71-1.6-2.49-.78-.78-1.56-1.28-2.49-1.6-.9-.31-1.94-.51-3.22-.57C15.77.012 15.36 0 12 0z" />
                                                <path d="M12 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8.01 4 4 0 0 1 0 8.01zM18.4 4.56a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                                            </svg>
                                        </a>

                                        {/* LinkedIn */}
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary/70 transition">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M20.447 20.452H16.9V15.7c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.81 1.22-1.81 2.5v4.83H10V9h3.4v1.56h.05c.47-.9 1.62-1.84 3.34-1.84 3.57 0 4.23 2.35 4.23 5.4v6.34zM5.34 7.43a1.96 1.96 0 1 1 0-3.92 1.96 1.96 0 0 1 0 3.92zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.72C24 .77 23.21 0 22.23 0z" />
                                            </svg>
                                        </a>

                                        {/* YouTube */}
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary/70 transition">
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M23.5 6.19s-.23-1.63-.95-2.35c-.9-.95-1.9-.95-2.36-1C17.78 2.5 12 2.5 12 2.5h-.02s-5.78 0-8.19.34c-.46.05-1.46.05-2.36 1C.73 4.56.5 6.19.5 6.19S.25 8.05.25 9.9v2.2c0 1.85.25 3.71.25 3.71s.23 1.63.95 2.35c.9.95 2.08.92 2.6 1.02C5.62 19.7 12 19.75 12 19.75s5.78 0 8.19-.34c.46-.05 1.46-.05 2.36-1 .72-.72.95-2.35.95-2.35s.25-1.86.25-3.71V9.9c0-1.85-.25-3.71-.25-3.71zM9.75 15.02V8.98l6.02 3.02-6.02 3.02z" />
                                            </svg>
                                        </a>
                                    </motion.div>

                                </motion.div>
                                {/* bloc5*/}
                                <motion.div className="m-0 text-sm sm:text-base space-y-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
                                    <motion.p className="font-normal text-xs sm:text-sm md:text-sm">Ready to Clear Out the Junk?</motion.p>

                                    <motion.p
                                        className="font-normal text-xs sm:text-sm md:text-sm "
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        Call{" "}
                                        <span className="transition duration-200 hover:text-primary hover:translate-x-1 inline-block cursor-pointer">
                                            555 123-4567
                                        </span>
                                    </motion.p>
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -1 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: "spring", stiffness: 220, damping: 25 }}
                                    >
                                        <GetQuoteButton
                                            label="Book online"
                                            href="/quote"
                                            variant="outline-primary"
                                            size="sm"
                                            className="rounded-lg "
                                        />
                                    </motion.div>


                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                        <div className="flex items-center justify-between gap-4 flex-wrap bg-primary text-white px-4 sm:px-6 md:px-8 lg:px-12 py-3">
                            <motion.p
                                className="m-0 text-xs sm:text-sm md:text-base lg:text-lg font-normal"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                Copyright ©All Junk Remova. All rights reserved.
                            </motion.p>
                            <motion.p
                                className="m-0 text-xs sm:text-sm md:text-base lg:text-lg font-normal"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                info@alljunkremoval.com.
                            </motion.p>

                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
}
