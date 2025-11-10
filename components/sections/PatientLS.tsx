"use client";

import Image from "next/image";
import Link from "next/link";

export function PatientLS() {
  return (
    <section className="w-full relative overflow-visible mb-5">
      {/* Alternating color strip with exactly two provided columns */}
      <div className="flex w-[100%] h-[64px] sm:h-[80px] md:h-[112px] lg:h-[136px]">
        {/* SIDE LEFT */}
        <div className="w-[33%] block max-[858px]:hidden bg-[#1096C9] lg:col-span-2 block max-[858px]:hidden " />
        <div className="flex w-[66%] items-center">
          {/* GREEN */}
          <div className="bg-[#4FB29E] h-full text-white flex z-10 items-center justify-center px-2h-full border-[#003683] flex-1 min-w-0">
            <Link href="/patient-resources" className="whitespace-pre-line text-center leading-snug tracking-[0.2em] text-sm md:text-xl lg:text-2xl">
              patient
              {"\n"}
              resources
            </Link>
          </div>
        {/* PATIENT STORIES */}
          <div className="relative z-40 shrink-0">
            {/* Split-color backing so transparent image corners don't show white */}
            <div className="absolute inset-0 top-5 md:top-[19px] lg:top-[22px] -z-10 flex h-[100px] lg:h-[137px]">
              <div className="w-1/2 h-full bg-[#4FB29E]" />
              <div className="w-1/2 h-full bg-[#003683]" />
            </div>
            <Link href="/patient-stories">
            <Image
              src="/mess-btn.svg"
              alt="patient stories"
              width={260}
              height={140}
              className="relative top-5 x-4 h-[100px] md:h-[150px] lg:h-[180px] w-auto drop-shadow-md md:drop-shadow-lg"
            />
            </Link>
          </div>
          {/* NAVY BLUE */}
          <div className="bg-[#003683] h-full text-white flex z-10 items-center justify-center px-2 flex-1 min-w-0">
            <Link href="/contact" className="whitespace-pre-line text-center leading-snug tracking-[0.2em] text-sm md:text-xl lg:text-2xl">
              book an
              {"\n"}
              appointment
            </Link>
          </div>
        </div>
        {/* SIDE RIGHT */}
        <div className="w-[33%] block max-[858px]:hidden bg-[#4FB29E] lg:col-span-2 block max-[858px]:hidden " />
      </div>
      <div className="bg-[#003683] h-[8px]" />
    </section>
  );
}
