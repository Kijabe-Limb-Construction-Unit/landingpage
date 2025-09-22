"use client";
import Image from "next/image";

export default function DonatePage() {
  return (
    <div className="bg-[#149ECC]">
      <div className="w-full mx-auto max-w-7xl min-h-screen flex">
        <div className="text-[#003683]">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-white">donate</h1>
            <Image
              src="/butterfly.svg"
              alt="Donate"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
          <h3 className="font-bold">CLICK HERE </h3>
          <h3 className="">
            TO GIVE TO THE KIJABE LIMB RECONSTRUCTION UNIT VIA GLOBAL
            CONNECTIONS
          </h3>
        </div>
        <div className="flex flex-col max-w-7xl align-right">
          <div className="flex justify-end items-end">
            <Image src="/donate1.png" alt="Donate" width={500} height={500} />
          </div>
          <div className="mt-5 text-[#003683]">
            <p>
              ALL DONATIONS RECEIVED ARE USED 100% FOR THE KIJABE LIMB
              RECONSTRUCTION UNIT.
            </p>
            <p className="font-bold">
              THERE IS NO DEDUCTION FOR ADMINISTRATIVE COSTS.
            </p>
            <p className="text-white border-t border-[#003683] mt-9 pt-5">
              Your donation is also tax-deductible for US taxpayers! Global
              Connections is a registered 501(c)3 corporation with the Internal
              Revenue Service. Tax ID #20-8241793
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
