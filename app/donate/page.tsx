"use client";
import { BlueColoredBorder } from "@/components/sections/ColoredBorder";
import Image from "next/image";
import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="bg-[#149ECC]">
  <div className="w-full mx-auto max-w-7xl flex flex-col md:flex-row px-4 md:px-0">
    <div className="flex flex-col w-full md:w-auto">
      <div className="flex flex-col md:flex-row justify-end items-center md:items-end gap-5">
        <div className="text-[#003683] flex flex-col items-center md:items-end text-center md:text-end">
          <div className="flex mt-5 items-center md:items-end gap-5">
            <h1 className="font-bold text-white text-5xl md:text-8xl">donate</h1>
            <Image
              src="/butterfly.svg"
              alt="Donate"
              width={40}
              height={40}
              className="w-8 h-8 md:w-20 md:h-20"
            />
          </div>
          <Link
            href="https://globalconnectionsonline.app.neoncrm.com/forms/kijabe-limb-recon"
            className="hidden md:block font-extrabold text-2xl cursor-pointer bg-blue-900 p-3 rounded-xl text-white my-3 "
          >
            CLICK HERE
          </Link>
          <h3 className="w-full md:w-[60%] font-bold mt-4 md:mt-0">
            TO GIVE TO THE KIJABE LIMB RECONSTRUCTION UNIT VIA GLOBAL CONNECTIONS
          </h3>
        </div>
        <Image
          src="/donate1.png"
          alt="Donate"
          width={300}
          height={300}
          className="w-full max-w-xs md:max-w-md"
        />
      </div>
      <div className="w-full flex justify-center md:justify-end items-center md:items-end mt-5">
        <div className="text-[#003683] w-full md:w-[40%] text-center md:text-right">
          <p>
            ALL DONATIONS RECEIVED ARE USED 100% FOR THE KIJABE LIMB RECONSTRUCTION UNIT.
          </p>
          <p className="font-bold mt-2">
            THERE IS NO DEDUCTION FOR ADMINISTRATIVE COSTS.
          </p>
          <div className="my-10">
            <Link
            href="https://globalconnectionsonline.app.neoncrm.com/forms/kijabe-limb-recon"
            className="font-extrabold text-2xl md:text-4xl cursor-pointer bg-blue-900 p-3 rounded-xl text-white md:mt-0 md:hidden"
          >
            CLICK HERE
          </Link>
          </div>
          <p className="text-white border-t border-[#003683] mt-5 pt-5 text-[16px] md:text-[19px]">
            Your donation is also tax-deductible for US taxpayers! Global Connections is a
            registered 501(c)3 corporation with the Internal Revenue Service. Tax ID #20-8241793
          </p>
        </div>
      </div>
    </div>
  </div>
  <BlueColoredBorder />
</div>

  );
}
