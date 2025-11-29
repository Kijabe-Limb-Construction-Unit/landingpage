"use client";

import Image from "next/image";
import Link from "next/link";

export function PatientLS() {
  return (
    <section className="w-full relative overflow-visible">
      {/* Alternating color strip with exactly two provided columns */}
      <div className="flex w-[100%] h-[64px] sm:h-[80px] md:h-[112px] lg:h-[136px] relative">
        {/* SIDE LEFT */}
        <div className="w-[33%] block max-[858px]:hidden bg-[#1096C9] lg:col-span-2 block max-[858px]:hidden " />
        <div className="flex w-[66%] items-center md:gap-30 lg:gap-35 relative">
          {/* GREEN */}
          <div className="bg-[#4FB29E] h-full text-white flex items-center justify-center px-2 flex-1 min-w-0 relative z-10">
            <Link href="/patient-resources" className="whitespace-pre-line text-center leading-snug tracking-[0.2em] text-sm md:text-lg lg:text-xl">
              patient
              {"\n"}
              resources
            </Link>
          </div>
          {/* NAVY BLUE */}
          <div className="bg-[#003683] h-full text-white flex items-center justify-center px-2 flex-1 min-w-0 relative z-10">
            <Link href="/contact" className="whitespace-pre-line text-center leading-snug tracking-[0.2em] text-sm md:text-lg lg:text-xl">
              book an
              {"\n"}
              appointment
            </Link>
          </div>
        </div>
        {/* SIDE RIGHT */}
        <div className="w-[33%] block max-[858px]:hidden bg-[#4FB29E] lg:col-span-2 block max-[858px]:hidden " />
        {/* PATIENT STORIES - Speech bubble overlapping the center sections */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-auto md:-pt-5">
          <Link href="/patient-stories" className="block">
            <Image
              src="/mess-btn.svg"
              alt="patient stories"
              width={260}
              height={140}
              className="h-[99px] md:h-[137px] md:mt-0 lg:h-[168px] w-auto drop-shadow-md md:drop-shadow-lg"
            />
          </Link>
        </div>
      </div>
      <div className="bg-[#003683] h-[8px]" />
    </section>
  );
}
