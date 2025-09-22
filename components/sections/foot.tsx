"use client";


import Image from "next/image";
import NavDonate from "./nav-donate";

// import { HeartbeatAnimation } from "./sections/heartwave-animation";

const Navbar = () => {

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Logo and menu section  */}
      <div className="relative bg-white py-6">
        {/* <HeartbeatAnimation /> */}
        <div className="relative z-20 px-8 flex items-center justify-between">
          <Image
            src="/logo.svg"
            alt="Kijabe Limb Reconstruction Unit"
            width={200}
            height={150}
            className="h-auto bg-white w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
          />
        </div>
      </div>
        <Image src="/line.svg" alt="line" width={200} height={150} className="h-auto w-full" />
      {/* Donate - restore section  */}
      <NavDonate />
      {/* bottom lines  */}
    </header>
  );
};

export default Navbar;
