"use client";

import Image from "next/image";
import Link from "next/link";

const NavDonate = () => {
  return (
    <div className="bg-white px-8 pt-1 md:pt-4">
        {/* HEART BEAT SVG GOES HERE */}
      <div className="flex items-center justify-between">
        {/* Donate Button Side */}
        <Link href="/donate">
            <Image
              src="/donate-butterfly-navbar.svg"
              alt="Donate"
              width={100}
              height={100}
              className="w-35 h-15 md:w-45 md:h-20"
            />
        </Link>
        {/* Logo and Tagline Side */}
        <div className="flex items-center gap-4">
            {/* <p className="text-[#003683] text-lg md:text-3xl md:font-normal">
              Restoring limbs |<span className="font-bold ml-2">Rebuilding lives</span>
            </p> */}
            <Image src="/Limbs.svg" alt="Limbs logo" width={100} height={100} className="w-sm h-sm md:w-md md:h-md"/>
        </div>
      </div>
    </div>
  );
};

export default NavDonate;