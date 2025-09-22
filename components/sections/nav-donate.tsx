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
          <div className="flex items-center gap-2">
            <Image
              src="/butterfly.svg"
              alt="Donate"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-[#003683] font-medium">donate</span>
          </div>
        </Link>
        {/* Logo and Tagline Side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block border-gray-200 pl-4">
            <p className="text-[#003683]">
              Restoring limbs <span className="text-[#4FB29E]">|</span> Rebuilding lives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDonate;