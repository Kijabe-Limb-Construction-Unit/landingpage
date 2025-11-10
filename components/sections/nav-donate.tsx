"use client";

import Image from "next/image";
import Link from "next/link";

const NavDonate = () => {
  return (
    <div className="bg-white px-8 pt-1 md:pt-4">
        {/* HEART BEAT SVG GOES HERE */}
      <div className="flex items-center justify-between gap-5 sm-gap-2 mt-5">
        {/* Donate Button Side */}
        <Link href="/donate">
            <Image
              src="/donate-butterfly-navbar.svg"
              alt="Donate"
              width={100}
              height={100}
              className="w-30 h-10 md:w-28 md:h-15 -mt-3 md:mb-2"
            />
        </Link>
        {/* Logo and Tagline Side */}
        <div className="flex items-center">
            <Image src="/Limbs.svg" alt="Limbs logo" width={100} height={100} className="w-md h-md"/>
        </div>
      </div>
    </div>
  );
};

export default NavDonate;