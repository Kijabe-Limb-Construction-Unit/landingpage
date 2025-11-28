"use client";

import Image from "next/image";
import Link from "next/link";

export function DonateSection() {
    return (
        <section className="w-full bg-[#1096C9] text-white overflow-hidden relative">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-[#1096C9] lg:w-1/2 z-10"></div>
                <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0">
                    <Image
                        src="/donate-hero.png"
                        alt="Surgeons operating"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1096C9] to-transparent lg:hidden"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 py-16 lg:py-24 pr-0 lg:pr-12 flex flex-col justify-center">
                        <div className="mb-8 flex items-center gap-2 sm:gap-3 md:gap-4">
                            <h2 className="text-5xl md:text-7xl font-light">donate</h2>
                            <div className="flex-shrink-0">
                                <Image
                                    src="/butterfly.svg"
                                    alt="Butterfly"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                    className="w-auto h-10 md:h-14 lg:h-15"
                                    style={{ width: 'auto' }}
                                />
                            </div>
                        </div>

                        <div className="space-y-8 text-xl font-light leading-relaxed max-w-xl">
                            <p className="uppercase text-2xl md:text-3xl tracking-widest leading-snug">
                                TO GIVE TO THE <br />
                                <span className="font-bold text-[#003683]">KIJABE LIMB RECONSTRUCTION UNIT</span> <br />
                                VIA GLOBAL CONNECTIONS
                            </p>

                            <Link href="/donate" className="inline-block transform transition-transform hover:scale-105">
                                <Image
                                    src="/click-here-blue.svg"
                                    alt="Click Here to Give"
                                    width={250}
                                    height={80}
                                    className="drop-shadow-lg w-full max-w-[200px] md:max-w-[250px] h-auto object-contain"
                                />
                            </Link>

                            <div className="bg-[#003683]/10 p-6 rounded-lg border border-[#003683]/20 backdrop-blur-sm">
                                <p className="text-base md:text-lg font-medium text-white">
                                    100% OF DONATIONS GO DIRECTLY TO PATIENT CARE.
                                    <br />
                                    <span className="text-[#003683] font-bold">NO ADMINISTRATIVE DEDUCTIONS.</span>
                                </p>
                            </div>

                            <p className="text-sm opacity-90 leading-relaxed">
                                Your donation is also tax-deductible for US taxpayers! Global Connections is a registered 501(c)3 corporation with the Internal Revenue Service. Tax ID #20-8241793
                            </p>
                        </div>
                    </div>

                    {/* Right Spacer */}
                    <div className="w-full lg:w-1/2 hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
}
