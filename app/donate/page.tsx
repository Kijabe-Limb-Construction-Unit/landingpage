"use client";
import { BlueColoredBorder } from "@/components/sections/ColoredBorder";
import Image from "next/image";
import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="bg-[#149ECC]">
      <div className="w-full mx-auto max-w-7xl flex">
        <div className="flex flex-col">
          <div className="flex justify-end items-end gap-5">
            <div className="text-[#003683] flex flex-col items-end text-end">
              <div className="flex items-center gap-5">
                <h1 className="font-bold text-white text-8xl">donate</h1>
                <Image
                  src="/butterfly.svg"
                  alt="Donate"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-20 md:h-20"
                />
              </div>
              <Link href="https://globalconnectionsonline.app.neoncrm.com/forms/kijabe-limb-recon" className="font-extrabold text-4xl cursor-pointer bg-blue-900 p-3 rounded text-white">CLICK HERE </Link>
              <h3 className="w-[60%] font-bold">
                TO GIVE TO THE KIJABE LIMB RECONSTRUCTION UNIT VIA GLOBAL
                CONNECTIONS
              </h3>
            </div>
            <Image src="/donate1.png" alt="Donate" width={500} height={500} />
          </div>
          <div className="w-full flex justify-end items-end">
            <div className="mt-5 text-[#003683] w-[40%]">
              <p>
                ALL DONATIONS RECEIVED ARE USED 100% FOR THE KIJABE LIMB
                RECONSTRUCTION UNIT.
              </p>
              <p className="font-bold">
                THERE IS NO DEDUCTION FOR ADMINISTRATIVE COSTS.
              </p>
              <p className="text-white border-t border-[#003683] mt-9 pt-5 text-[19px]">
                Your donation is also tax-deductible for US taxpayers! Global
                Connections is a registered 501(c)3 corporation with the
                Internal Revenue Service. Tax ID #20-8241793
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlueColoredBorder/>
    </div>
  );
}
