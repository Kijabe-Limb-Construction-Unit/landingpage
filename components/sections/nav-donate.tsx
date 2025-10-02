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
              className="w-45 h-20"
            />
        </Link>
        {/* Logo and Tagline Side */}
        <div className="flex items-center gap-4">
            <p className="text-[#003683]">
              Restoring limbs <span className="text-[#4FB29E]">|</span> Rebuilding lives
            </p>
        </div>
      </div>
    </div>
  );
};

export default NavDonate;