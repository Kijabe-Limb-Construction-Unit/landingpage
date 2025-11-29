"use client";

import Image from "next/image";
import { AfricaVisionSection } from './AfricaVisionSection';

// Coves font is configured globally in globals.css

export function AboutUsSection() {
    return (
        <section className="w-full bg-white">
            {/* Top Section: The Need & Bovin Before */}
            <div className="flex flex-col lg:flex-row w-full">

                {/* The Need */}
                <div className="w-full lg:w-1/2 bg-[#4FB29E] text-white p-12 md:p-20 flex flex-col justify-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
                        <span className="md:font-light font-bold text-white">about</span> <span className="font-bold text-white">us</span>
                    </h2>
                    <h3 className="text-xl sm:text-2xl md:text-3xl tracking-widest mb-6 sm:mb-8 font-light uppercase">The Need</h3>

                    <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed">
                        <p className="text-justify hyphens-auto">
                            <span className="font-bold">THERE IS A LITTLE KNOWN EPIDEMIC.</span> Conditions such as <span className="font-bold text-[#003683]">childhood deformity, infected fractures and neglected trauma cause massive suffering globally.</span>
                        </p>
                        <p className="text-base sm:text-lg md:text-xl md:font-normal font-bold text-justify hyphens-auto">
                            <span className="text-lg sm:text-xl md:text-xl lg:text-xl font-extrabold">Every year<span className="text-[#003683]">30 million people</span> sustain a new disability</span> as a result of musculoskeletal injury. Within that group, <span className="font-bold text-[#003683]">1.8 million</span> sustain a fracture that later becomes infected, making it both more expensive and more challenging to treat, and that could result in the loss of that limb. It is estimated that a country like <span className="font-bold text-[#003683] text-lg sm:text-xl md:text-xl lg:text-2xl">Kenya has 12 000 new fracture-related infections each year.</span>
                        </p>
                        <p className="text-justify hyphens-auto">
                            On top of this are the many cases of congenital childhood deformity and other neglected trauma. Sadly, developing countries are disproportionately affected by these challenges because of poor infrastructure and a lack of access to limb reconstruction surgery.
                        </p>
                    </div>
                </div>

                {/* Bovin Before Image */}
                <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px]">
                    {/* Mobile Image */}
                    <div className="block md:hidden w-full h-full absolute inset-0">
                        <Image
                            src="/phone-before.png"
                            alt="Bovin Before Treatment"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    {/* Tablet Image */}
                    <div className="hidden md:block lg:hidden w-full h-full absolute inset-0">
                        <Image
                            src="/tablet-before.png"
                            alt="Bovin Before Treatment"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    {/* Desktop Image */}
                    <div className="hidden lg:block w-full h-full absolute inset-0">
                        <Image
                            src="/desktop-before.png"
                            alt="Bovin Before Treatment"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 bg-[#003683] text-white py-2 sm:py-3 px-4 sm:px-8 text-base sm:text-lg md:text-xl tracking-widest uppercase font-bold z-10">
                        Bovin Before
                    </div>
                </div>
            </div>

            {/* Middle Section: The Answer & Bovin After */}
            <div className="flex flex-col lg:flex-row w-full">

                {/* The Answer */}
                <div className="w-full lg:w-1/2 bg-[#1096C9] text-white p-12 md:p-20 order-2 lg:order-1 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 font-light uppercase">The Answer</h3>

                    <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed">
                        <p>
                            <span className="font-bold">LIMB RECONSTRUCTION IS AN ESSENTIAL WEAPON IN ADDRESSING THIS CRISIS.</span> This is a field within orthopaedic surgery that is at the cutting edge of the treatment of limb deformities, fracture-related infection and poorly healing fractures.
                        </p>
                        <p>
                            The Kijabe Limb Reconstruction Unit is an emerging centre of excellence based in Kijabe, Kenya and <span className="font-bold text-lg sm:text-xl md:text-xl lg:text-xl text-[#4FB29E]">providing care for some of the most challenging orthopaedic conditions.</span>
                        </p>
                    </div>

                    {/* Icons */}
                    <div className="grid grid-cols-3 gap-6 mt-12">
                        <div className="flex flex-col items-center text-center group">
                            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                                <Image src="/childhood.png" alt="Childhood Deformity" width={60} height={60} className="object-contain" />
                            </div>
                            <p className="text-sm font-bold leading-tight">Childhood<br />Deformity</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                                <Image src="/poorly-healing.png" alt="Poorly Healing Fractures" width={60} height={60} className="object-contain" />
                            </div>
                            <p className="text-sm font-bold leading-tight">Poorly Healing<br />Fractures</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                                <Image src="/infected-fractures.png" alt="Infected Fractures" width={60} height={60} className="object-contain" />
                            </div>
                            <p className="text-sm font-bold leading-tight">Infected<br />Fractures</p>
                        </div>
                    </div>
                </div>

                {/* Bovin After Image */}
                <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] order-1 lg:order-2">
                    {/* Mobile Image */}
                    <div className="block md:hidden w-full h-full absolute inset-0">
                        <Image
                            src="/phone-after.png"
                            alt="Bovin After Treatment"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    {/* Tablet Image */}
                    <div className="hidden md:block lg:hidden w-full h-full absolute inset-0">
                        <Image
                            src="/tablet-after.png"
                            alt="Bovin After Treatment"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    {/* Desktop Image */}
                    <div className="hidden lg:block w-full h-full absolute inset-0">
                        <Image
                            src="/desktop-after.png"
                            alt="Bovin After Treatment"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 bg-[#003683] text-white py-2 sm:py-3 px-4 sm:px-8 text-base sm:text-lg md:text-xl tracking-widest uppercase font-bold z-10">
                        Bovin After
                    </div>
                </div>
            </div>


            {/* Bottom Section: The Vision */}
            <AfricaVisionSection />
        </section >
    );
}
