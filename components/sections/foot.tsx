"use client";

import Image from "next/image";
import NavDonate from "./nav-donate";

const Navbar = () => {
  return (
    <header className="w-[105vw] md:w-full bg-white sticky top-0 z-50">
      {/* Logo and menu section  */}
      <div className="relative bg-white py-6">
        {/* <HeartbeatAnimation /> */}
        <div className="absolute top-16 px-8 inset-0 flex items-center justify-start z-10">
          <Image
            src="/logo.svg"
            alt="Kijabe Limb Reconstruction Unit"
            width={200}
            height={150}
            className="h-auto lg:h-25 bg-white w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[450px]"
          />
        </div>
      </div>
      {/* <Image src="/heartbeat-line-complete.svg" alt="line" width={200} height={150} className="h-auto w-full mt-9" /> */}
      <Image
        src="/heartbeat-line-complet.svg"
        alt=""
        width={1200}
        height={10}
        className="h-auto w-[105vw] block md:hidden mt-9"
      />
      <Image
        src="/heartbeat-line-complete.svg"
        alt=""
        width={1200}
        height={10}
        className="h-auto w-full hidden md:block mt-9"
      />
      {/* Donate - restore section  */}
      <NavDonate />
      {/* bottom lines  */}
    </header>
  );
};

export default Navbar;
