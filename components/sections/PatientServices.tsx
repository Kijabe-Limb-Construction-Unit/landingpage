"use client";

import Image from "next/image";

export function PatientNavigation() {
  return (
    <section className="w-full relative overflow-visible mb-5">
      {/* Alternating color strip with exactly two provided columns */}
      <div className="grid grid-cols-2 min-[859px]:grid-cols-4 lg:grid-cols-12 w-full h-[64px] sm:h-[80px] md:h-[112px] lg:h-[136px]">
        {/* Side left (sky blue) - visible only above 858px */}
        <div className="block max-[858px]:hidden bg-[#1096C9] lg:col-span-2" />

        {/* Center left (green) */}
        <div className="bg-[#4FB29E] text-white flex items-center justify-center px-2 pr-12 sm:pr-16 md:pr-24 lg:pr-32 h-full lg:col-span-4">
          <p className="whitespace-pre-line text-center leading-snug tracking-[0.2em] md:tracking-[0.35em] text-sm md:text-lg lg:text-xl">
            patient
            {"\n"}
            resources
          </p>
        </div>
        {/* Center right (navy blue) */}
        <div className="bg-[#003683] text-white flex items-center justify-center px-2 pl-12 sm:pl-16 md:pl-24 lg:pl-32 h-full lg:col-span-4">
          <p className="whitespace-pre-line text-center leading-snug tracking-[0.2em] md:tracking-[0.35em]  text-sm md:text-lg lg:text-xl">
            book an
            {"\n"}
            appointment
          </p>
        </div>

        {/* Side right (green) - visible only above 858px */}
        <div className="block max-[858px]:hidden bg-[#4FB29E] lg:col-span-2" />
      </div>
      {/* MOBILE VIEW */}
      {/* Center speech bubble overlapping the strip */}
      <div className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -top-3 sm:-top-4 md:-top-6 z-10 h-auto">
        <Image
          src="/mess-btn.svg"
          alt="patient stories"
          width={260}
          height={140}
          className="relative top-2 sm:top-4 md:top-5 lg:top-5 h-[100px] md:h-[150px] lg:h-[180px] w-auto drop-shadow-md md:drop-shadow-lg"
        />
        
      </div>
      <div className="bg-[#003683] h-[8px]"/>
    </section>
  );
}

