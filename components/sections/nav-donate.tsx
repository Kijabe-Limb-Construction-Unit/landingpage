"use client";

import Image from "next/image";
import Link from "next/link";

const NavDonate = () => {
  return (
    <div className="bg-white px-8 pt-1 mb-5 md:mb-8 md:pt-4">
      <div className="flex items-center justify-between gap-5 sm-gap-2 mt-2">
        <Link href="/donate">
          <Image
            src="/donate-butterfly-navbar.png"
            alt="Donate"
            width={100}
            height={100}
            className="w-auto h-10 md:h-14 md:mb-2"
          />
        </Link>
        <div className="flex items-center">
          <Image src="/Limbs.svg" alt="Limbs logo" width={100} height={100} className="w-md h-md" />
        </div>
      </div>
    </div>
  );
};

export default NavDonate;