"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { BlueColoredBorder } from "@/components/sections/ColoredBorder";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavDonate from "./sections/nav-donate";
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
});

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="w-full bg-white overflow-hidden">
      {/* Sticky section on medium screens and above when scrolled */}
      <div className={`w-full bg-white sticky top-0 z-50 ${isScrolled ? 'md:sticky' : 'md:relative'} transition-all duration-300`}>
        <div className="fixed top-0 left-0 right-0 z-60 hidden md:block">
          <BlueColoredBorder pst="" />
        </div>
        <nav className="hidden md:flex w-full fixed top-4 left-0 right-0 z-50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`
                ${item.bgColor}
                flex-1 sm:px-0 md:px-3 py-2 transition-opacity hover:opacity-90 text-center pt-2
                ${pathname === item.path ? `bg-white font-extrabold uppercase text-[#003683] hv-nv-lnks pt-4 ${josefin.className}` : "text-white font-light lowercase nv-lnks"}
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
        <div className="relative bg-white top-0 md:top-5">
          <div className="absolute top-20 inset-0 flex items-center justify-center z-30 w-[100vw] md:w-full">
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
          <div className="relative z-20 mt-5 md:mt-20 px-8 flex items-center justify-between">
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
                                                  ${pathname === item.path
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
      </div>

      {/* Non-sticky section - scrolls away on medium screens and above */}
      <div className="w-full bg-white">
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
      </div>
    </header>
  );
};

export default Navbar;
