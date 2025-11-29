"use client";

import Image from "next/image";
import NavDonate from "./nav-donate";

const Navbar = () => {
  return (
    <header className="w-full md:w-full bg-white sticky top-0 z-50">
      {/* Logo and menu section  */}
      <div className="relative bg-white py-6 md:py-8 sm:py-6">
        {/* <HeartbeatAnimation /> */}
        <div className="absolute top-16 px-8 inset-0 flex items-center justify-start z-10">
          <Image
            src="/KLRU_Logo.png"
            alt="Kijabe Limb Reconstruction Unit"
            width={200}
            height={150}
            className="h-auto mb-5 sm:mb-2 md:mb-0 lg:h-25 bg-white w-auto max-w-[200px] lg:max-w-[450px]"
          />
        </div>
      </div>
      {/* <Image src="/heartbeat-line-complete.svg" alt="line" width={200} height={150} className="h-auto w-full mt-9" /> */}
      <Image
        src="/heartbeat-line-complet.svg"
        alt=""
        width={1200}
        height={10}
        className="h-auto w-[100vw] block md:hidden mt-13"
      />
      <Image
        src="/heartbeat-line-complete.svg"
        alt=""
        width={1200}
        height={10}
        className="h-auto md:w-[100vw] hidden md:block mt-9"
      />
      {/* Donate - restore section  */}
      <NavDonate />
      {/* bottom lines  */}
    </header>
  );
};

export default Navbar;
