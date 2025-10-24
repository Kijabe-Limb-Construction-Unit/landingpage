"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import {BlueColoredBorder} from "@/components/sections/ColoredBorder";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavDonate from "./sections/nav-donate";
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: [ '600', '700'],
  style: ['normal', 'italic'],
});

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", bgColor: "bg-[#003683]" },
    { name: "About Us", path: "/about", bgColor: "bg-[#C7D886]" },
    {
      name: "Patient Stories",
      path: "/patient-stories",
      bgColor: "bg-[#4FB29E]",
    },
    {
      name: "Patient Resources",
      path: "/patient-resources",
      bgColor: "bg-[#149ECC]",
    },
    { name: "Donate", path: "/donate", bgColor: "bg-[#003683]" },
    { name: "Contact Us", path: "/contact", bgColor: "bg-[#C7D886]" },
  ];

  const colorPattern = [
    { bgColor: "bg-[#149ECC]" },
    { bgColor: "bg-[#4FB29E]" },
    { bgColor: "bg-[#C7D886]" },
    { bgColor: "bg-[#003683]" },
  ];

  const mobileColorPattern = [
    { bgColor: "bg-[#003683]" },
    { bgColor: "bg-[#C7D886]" },
    { bgColor: "bg-[#4FB29E]" },
    { bgColor: "bg-[#149ECC]" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 overflow-hidden">
      <BlueColoredBorder/>
      <nav className="hidden md:flex w-full">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`
              ${item.bgColor}
              flex-1 sm:px-0 md:px-3 py-3 transition-opacity hover:opacity-90 text-center md:text-lg min-[1020px]:text-xl max-[1113px]:text-md md:text-[9px] pt-5 lg:text-[13px]
              ${pathname === item.path ?`bg-white font-extrabold uppercase text-[#003683] md:text-[8px] lg:text-[7px] pt-5 sm:text-[9px] ${josefin.className}`  : "text-white font-light"}
            `}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex w-full h-2 md:hidden">
        {mobileColorPattern.map((item, index) => (
          <div key={index} className={`${item.bgColor} flex-1`} />
        ))}
      </div>
      {/* Logo and menu section  */}
      <div className="relative bg-white">
        <div className="absolute top-16 inset-0 flex items-center justify-center z-30 w-[103vw] md:w-full">
          <Image
            src="/heartbeat-line-complet.svg"
            alt=""
            width={1200}
            height={10}
            className="h-auto block md:hidden"
          />
          <Image
            src="/heartbeat-line-complete.svg"
            alt=""
            width={1200}
            height={10}
            className="h-auto w-full hidden md:block"
          />
        </div>
        <div className="relative z-20 mt-5 px-8 flex items-center justify-between">
          <Image
            src="/logo.svg"
            alt="Kijabe Limb Reconstruction Unit"
            width={200}
            height={150}
            className="h-auto lg:h-25 bg-white w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[450px]"
          />

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                  <Menu className="h-8 w-8 text-[#003683]" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-52 bg-white">
                <div className="flex flex-col space-y-4 mt-16 gap-2 px-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                                                px-6 py-1 text-lg font-light transition-all duration-200 rounded-sm
                                                ${
                                                  pathname === item.path
                                                    ? `${item.bgColor.replace(
                                                        "bg-",
                                                        "bg-"
                                                      )} text-white`
                                                    : "text-[#003683] hover:bg-gray-100"
                                                }
                                            `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Donate - restore section  */}
      <div className="relative mt-8">
        <NavDonate />
      </div>
      {/* bottom lines  */}
      <div className="flex w-full h-3 md:h-4">
        {colorPattern.map((item, index) => (
          <div key={index} className={`${item.bgColor} flex-1`} />
        ))}
      </div>
    </header>
  );
};

export default Navbar;
