"use client";
import { BlueColoredBorder } from "@/components/sections/ColoredBorder";
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: [ '200', '600', '700'],
  style: ['normal', 'italic'],
});

export default function DonatePage() {
  return (
    <div className="bg-[#149ECC]">
  <div className="w-full mx-auto flex flex-col md:flex-row px-4 md:px-0">
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row justify-end items-center md:items-end gap-5">
        <div className="text-[#003683] flex flex-col items-center md:items-end text-center md:text-end">
          <div className="flex mt-5 items-center md:items-end gap-5">
            <h1 className="font-bold text-white text-7xl md:text-6xl lg:text-6xl xl:text-8xl">donate</h1>
            <Image
              src="/butterfly.svg"
              alt="Donate"
              width={40}
              height={40}
              className="w-8 h-8 md:w-15 md:h-15"
            />
          </div>
          <Link
            href="https://globalconnectionsonline.app.neoncrm.com/forms/kijabe-limb-recon"
            className="hidden md:block font-extrabold text-4xl sm:text-2xl md:text-4xl cursor-pointer bg-blue-900 p-3 rounded-xl text-white my-3 "
          >
            CLICK HERE
          </Link>
          <h3 className="w-full text-4xl  md:text-2xl lg:text-4xl font-normal mt-4 md:mt-0">
            TO GIVE TO THE KIJABE <br /> LIMB RECONSTRUCTION <br /> UNIT VIA GLOBAL <br /> CONNECTIONS
          </h3>
        </div>
        <Image
          src="/donate1.svg"
          alt="Donate"
          width={300}
          height={300}
          className="w-full max-w-7xl h-96 md:max-w-lg lg:max-w-3xl xl:max-w-3xl md:h-full xl:h-96 object-cover -pr-2"
        />
      </div>
      {/* border-4 */}
      <div className="w-full flex justify-center md:justify-end items-center md:items-end mt-5">
        {/* border-3 md:border-red-600 lg:border-blue-600 xl:border-green-600 */}
        <div className="gnz flex flex-col justify-center text-[#003683] w-full pr-0 md:pr-10 text-center md:text-left lg:-ml-[25rem]">
          <p className="text-3xl">
            ALL DONATIONS RECEIVED ARE USED 100<span style={{ fontFamily: "Roboto" }}>%</span> FOR THE KIJABE LIMB RECONSTRUCTION UNIT.
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
          <p className="text-white border-t border-[#003683] mt-0 mb-4 md:-mt-10 pt-8 text-[20px] md:text-[25px]">
            Your donation is also tax-deductible for US taxpayers! Global Connections is a
            registered 501 <span className={`${josefin.className} font-light`}>(</span>c<span className={`${josefin.className} font-light`}>)</span>3 corporation with the Internal Revenue Service. Tax ID #20-8241793
          </p>
        </div>
      </div>
    </div>
  </div>
  <BlueColoredBorder pst={""} />
</div>

  );
}
