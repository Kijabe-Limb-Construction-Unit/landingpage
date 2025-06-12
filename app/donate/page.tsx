"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Clock, Accessibility, Sparkles } from "lucide-react";
import ProgressBar from "@/components/ui/progressBar";

const keyFacts = [
  {
    id: 1,
    text: "All funds received worldwide can be traced from receipt to use, including number and type of treatments performed, with 100% of operations",
    icon: Clock,
    uppercase: false,
    iconColor: "text-white",
    textColor: "text-white",
  },
  {
    id: 2,
    text: "CREATING EQUAL ACCESS TO CHARITABLE AND GENERAL CONDITIONS",
    icon: Accessibility,
    uppercase: true,
    iconColor: "text-white",
    textColor: "text-white",
  },
  {
    id: 3,
    text: "PROCEDURES STILL REMAIN THE MOST COMPLEX CLEFT-PALATE INJURIES ACROSS THE WORLD",
    icon: Sparkles,
    uppercase: true,
    iconColor: "text-white",
    textColor: "text-white",
  },
];

export default function DonatePage() {
  const [selectedFrequency, setSelectedFrequency] = useState("Monthly");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [coverFees, setCoverFees] = useState(false);

  const currentMonth = new Date().toLocaleString("default", { month: "long" }).toUpperCase();

  const frequencies = ["One Time", "Monthly", "Legacy Giving"];
  const amounts = [10, 25, 50, 100];

  return (
    <section className="w-full">
      <div className="flex flex-col">
        {/* Hero Section with Background Image */}
        <div className=" bg-[#149ECC] relative">
          <div className="w-full h-[280px] md:h-[500px] justify-center mx-auto items-center md:max-w-2xl lg:max-w-4xl relative">
            <Image src="/donate-hero.png" alt="Medical team providing care" fill className="relative object-cover object-top" />
            <Image src="/donate-butterfly-navbar.svg" alt="Donate" width={240} height={180} className="absolute top-5 md:top-8 -right-14 h-auto" />{" "}
          </div>
        </div>

        {/* Donation Section */}
        <div className="bg-[#0E3692] text-white py-12 px-4 items-center justify-center">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-5 items-center">
              {/* Left: Butterfly and Progress */}
              <div className="">
                <div className="flex items-center space-x-6">
                  <div className="w-40 h-40 flex items-center justify-center bg-amber-900">
                    <Image src="/donate-butterfly-navbar.svg" alt="Donate" width={120} height={80} className="h-auto hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">SUPPORT OUR GROWTH</h2>
                    <div className="flex flex-col mt-4 gap-2">
                      <p className="text-cyan-200 text-sm mt-1 uppercase tracking-wider">{currentMonth} 
                        <span> GOAL</span>
                      </p>
                      <ProgressBar amountRaised={70000} expectedAmount={100000} className="w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Donation Form */}
              <div className="p-4 md:p-8 w-full md: max-w-6xl mx-auto justify-center items-center">
                <form className="space-y-3 items-center">
                  {/* Frequency Selection */}
                  <div className="p-2 items-center w-full md:max-w-2xl">
                    <label className="block text-sm font-light mb-3 text-white tracking-wide">Select frequency</label>
                    <div className="grid grid-cols-3 gap-3">
                      {frequencies.map((freq) => (
                        <button key={freq} type="button" onClick={() => setSelectedFrequency(freq)} className={`px-4 py-1 text-sm font-light rounded-sm transition-all duration-200  border ${selectedFrequency === freq ? "bg-[#009EE0] text-white border-none" : "bg-transparent border-2 text-white border-[#009EE0]"}`}>
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="p-2">
                    <div className="grid grid-cols-4 gap-3 mb-4 ">
                      {amounts.map((amount) => (
                        <button key={amount} type="button" onClick={() => setSelectedAmount(amount)} className={`px-4 py-2 font-light text-sm rounded-sm transition-all duration-200 border-2 ${selectedAmount === amount ? "bg-[#009EE0] text-white border-none transform scale-105" : "bg-transparent text-white border-[#009EE0] hover:bg-blue-700"}`}>
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <input type="text" placeholder="Other" className="w-full px-4 py-2 bg-transparent border-2 border-[#009EE0] rounded-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#009EE0] focus:border-[#009EE0] transition-all duration-200" />
                  </div>
                  
                  {/* Fee Coverage Checkbox */}
                  <div className="flex items-start space-x-3 py-1 px-4">
                    <input type="checkbox" id="coverFees" checked={coverFees} onChange={(e) => setCoverFees(e.target.checked)} className="mt-1 w-5 h-5 text-cyan-400 bg-transparent border-2 border-cyan-400 rounded focus:ring-cyan-400 focus:ring-2" />
                    <label htmlFor="coverFees" className="text-sm text-white leading-relaxed">
                      Support us by covering the fees we have to pay
                    </label>
                  </div>

                  {/* Donate Button */}
                  <button type="submit" className="w-full md:max-w-2xl bg-[#009EE0] text-white font-light py-3 px-6 rounded-sm hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl uppercase tracking-wider text-sm">
                    DONATE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="bg-[#4FB29E] text-white py-16 px-4">
          <div className="max-w-2xl mx-auto text-center items-center">
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wide">PARTNER WITH US TO MAKE THIS VISION A REALITY</h2>
            <p className="text-sm  font-light leading-relaxed max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipiscing elit, duis dis dignissim feugiat egestas semper at libero vitae, eros vehicula venenatis metus viverra augue massa. Pellentesque dis amet lacus consequat convallis quam vehicula litora, penatibus mi accumsan interdum imperdiet. Duis etiam laoreet.</p>
          </div>
        </div>

        {/* Key Facts Section */}
        <div className="bg-[#009EE0] text-white py-16 px-4">
          <div className="mx-auto px-0 md:px-4 md:max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-5 lowercase">key <span className="font-light"> facts</span> </h2>

            <div className="space-y-8">
              {keyFacts.map((fact, index) => {
                const IconComponent = fact.icon;
                const isEven = (index + 1) % 2 === 0;

                return (
                  <div key={fact.id} className={`flex items-start space-x-4 ${isEven ? "flex-row px-4" : "flex-row-reverse space-x-reverse"}`}>
                    <div className="flex-shrink-0 w-16 h-16">
                      <div className="w-fill h-fill flex items-center justify-center">
                        <IconComponent className={`w-full h-full ${fact.iconColor}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className={`${fact.textColor} leading-relaxed ${fact.uppercase ? "uppercase font-bold text-sm tracking-wide" : "text-base"}`}>{fact.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
