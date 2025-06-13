"use client";
import { Button } from "@/components/ui/button";
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

  const frequencies = ["One-Time", "Monthly", "Legacy Giving"];
  const amounts = [10, 25, 50, 100];

  return (
    <section className="w-full">
      <div className="flex flex-col">
        {/* Hero Section with Background Image */}
        <div className=" bg-[#149ECC] relative">
          <div className="w-full h-[255px] md:h-[350px] items-center justify-center mx-auto md:max-w-xl lg:max-w-[720px] relative">
            <Image src="/donate-hero1.png" alt="Medical team providing care" fill className="relative object-cover object-top" />
            <Image src="/donate-butterfly-navbar.svg" alt="Donate" width={200} height={150} className="absolute top-4 md:top-8 -right-14 h-auto" />{" "}
          </div>
        </div>

        {/* Donation Section */}
        <div className="bg-[#0E3692] text-white py-12 px-4 items-center justify-center">
          <div className=" flex flex-col w-full md:max-w-xl lg:max-w-[720px] mx-auto justify-center items-center">
            {/* Left: Butterfly and Progress */}
              <div className="w-full items-center flex gap-2 md:gap-4 px-2 md:px-10 justify-center">
                <div className="">
                    <Image src="/butterfly.svg" alt="Donate"width={120} height={100} />
                  </div>
                  <div className="flex flex-col p-1 w-full md:w-10/12 mt-4">
                    <h2 className="text-md font-lighht uppercase tracking-wide">SUPPORT OUR GROWTH</h2>
                    <div className="flex flex-col mt-2 gap-1.5">
                      <p className="text-white/50 text-sm mt-1 uppercase tracking-wider">{currentMonth} 
                        <span> GOAL</span>
                      </p>
                      <ProgressBar amountRaised={70000} expectedAmount={100000} className="w-full" />
                    </div>
                  </div>
              </div>
              
              {/* Right: Donation Form */}
              <div className=" p-4 md:p-8 w-full md: max-w-6xl mx-auto justify-center items-center">
                <form className="space-y-3 items-center px-2 md:px-8" >
                  {/* Frequency Selection */}
                  <div className="p-2 items-center w-full py-1">
                    <label className="block text-sm font-light mb-3 text-white tracking-wide">Select frequency</label>
                    <div className="grid grid-cols-3 gap-2">
                      {frequencies.map((freq) => (
                        <Button 
                        key={freq} 
                        variant={selectedFrequency === freq ? "default" : "outline"} 
                        type="button" 
                        onClick={() => setSelectedFrequency(freq)}>
                          {freq}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="p-2">
                    <div className="grid grid-cols-4 gap-3 mb-4 ">
                      {amounts.map((amount) => (
                        <Button 
                          key={amount} 
                          variant={selectedAmount === amount ? "default" : "outline"} 
                          type="button"
                          onClick={() => setSelectedAmount(amount)} 
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <input type="text" placeholder="Other" className="w-full px-4 py-2 bg-transparent border-2 border-[#009EE0] rounded-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#009EE0] focus:border-[#009EE0] transition-all duration-200" />
                  </div>
                  
                  {/* Fee Coverage Checkbox */}
                  <div className="flex items-start space-x-3 py-1 px-4">
                    <input type="checkbox" id="coverFees" checked={coverFees} onChange={(e) => setCoverFees(e.target.checked)} className="mt-1 w-5 h-5 text-[#009EE0] bg-transparent border-1 border-[#009EE0] rounded focus:ring-[#009EE0] focus:ring-1" />
                    <label htmlFor="coverFees" className="text-sm text-white leading-relaxed">
                      Support us by covering the fees we have to pay
                    </label>
                  </div>

                  {/* Donate Button */}
                  <Button
                  variant="default" 
                  type="button" 
                  className="py-3 px-6 uppercase w-full">
                    DONATE
                  </Button>
                </form>
              </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="bg-[#4FB29E] text-white py-16 px-4">
  <div className="w-full md:max-w-lg mx-auto text-center items-center justify-center">
    <h2 className="text-lg font-bold mb-4 uppercase tracking-wide">
      PARTNER WITH US TO MAKE THIS VISION A REALITY
    </h2>
    <p className="text-sm w-full md:max-w-[400px] mx-auto p-1 font-light leading-relaxed text-left">
      Lorem ipsum dolor sit amet consectetur adipiscing elit, duis dis dignissim feugiat egestas semper at libero vitae, eros vehicula venenatis metus viverra augue massa. Pellentesque dis amet lacus consequat convallis quam vehicula litora, penatibus mi accumsan interdum imperdiet. Duis etiam laoreet.
    </p>
  </div>
</div>
        

        {/* Key Facts Section */}
        <div className="bg-[#009EE0] text-white py-16 px-4">
          <div className="w-full px-0 md:max-w-md mx-auto ">
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
