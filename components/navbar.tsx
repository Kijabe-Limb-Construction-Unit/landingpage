'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'home', path: '/', bgColor: 'bg-[#083783]' },
        { name: 'about us', path: '/about', bgColor: 'bg-[#C7D886]' },
        { name: 'patient stories', path: '/patient-stories', bgColor: 'bg-[#4FB29E]' },
        { name: 'patient resources', path: '/patient-resources', bgColor: 'bg-[#149ECC]' },
        { name: 'donate', path: '/donate', bgColor: 'bg-[#083783]' },
        { name: 'contact us', path: '/contact', bgColor: 'bg-[#C7D886]' },
    ];

    const colorPattern = [
        { bgColor: 'bg-[#149ECC]' },
        { bgColor: 'bg-[#4FB29E]' },
        { bgColor: 'bg-[#C7D886]' },
        { bgColor: 'bg-[#083783]' },
    ];

    const mobileColorPattern = [
        { bgColor: 'bg-[#083783]' },
        { bgColor: 'bg-[#C7D886]' },
        { bgColor: 'bg-[#4FB29E]' },
        { bgColor: 'bg-[#149ECC]' },
    ];

    return (
        <header className="w-full bg-white sticky top-0 z-50">
            <div
                className="w-full h-1 border-t-4"
                style={{
                    borderTopColor: navItems.find(item => pathname === item.path)?.bgColor.replace('bg-[', '').replace(']', '') || '#083783'
                }}
            />

            <nav className="hidden md:flex w-full">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.path}
                        className={`
              ${item.bgColor} 
              flex-1 px-6 py-1 text-white font-light transition-opacity hover:opacity-90 text-center
              ${pathname === item.path ? 'opacity-100' : 'opacity-80'}
            `}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="flex w-full h-2 md:hidden">
                {mobileColorPattern.map((item, index) => (
                    <div
                        key={index}
                        className={`${item.bgColor} flex-1`}
                    />
                ))}
            </div>

            <div className="relative bg-white py-6">
                <div className="absolute top-16 inset-0 flex items-center justify-center z-10">
                    <Image
                        src="/heartbeat-line-complete.svg"
                        alt=""
                        width={1200}
                        height={10}
                        className="h-auto w-full"
                    />
                </div>

                <div className="relative z-20 px-8 flex items-center justify-between">
                    <Image
                        src="/logo.svg"
                        alt="Kijabe Limb Reconstruction Unit"
                        width={200}
                        height={150}
                        className="h-auto bg-white w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
                    />

                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                                    <Menu className="h-8 w-8 text-[#083783]" />
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
                                                ? `${item.bgColor.replace('bg-', 'bg-')} text-white`
                                                : 'text-[#083783] hover:bg-gray-100'
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

            <div className="bg-white px-8 pt-4">
                <div className="flex items-center justify-between">
                    <Link href="/donate">
                        <Image
                            src="/donate-butterfly-navbar.svg"
                            alt="Donate"
                            width={120}
                            height={80}
                            className="h-auto hover:opacity-80 transition-opacity"
                        />
                    </Link>

                    <div className="text-right text-sm sm:text-base md:text-lg text-[#003683]">
                        <span className="font-light">
                            Restoring limbs |
                        </span>
                        <span className="font-bold ml-2">
                            Rebuilding lives.
                        </span>
                    </div>

                </div>
            </div>

            <div className="flex w-full h-2">
                {colorPattern.map((item, index) => (
                    <div
                        key={index}
                        className={`${item.bgColor} flex-1`}
                    />
                ))}
            </div>

        </header>
    );
};

export default Navbar;