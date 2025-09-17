"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { Clock, Accessibility, Bone } from "lucide-react";
import ProgressBar from "@/components/ui/progressBar";
import { donateData } from "@/lib/fakes/donate-fakes";

const keyFacts = donateData.keyFacts.map(fact => ({
  ...fact,
  icon: fact.icon === "Clock" ? Clock : fact.icon === "Accessibility" ? Accessibility : Bone,
  uppercase: fact.text === fact.text.toUpperCase()
}));

export default function DonatePage() {
  const [selectedFrequency, setSelectedFrequency] = useState("Monthly");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [coverFees, setCoverFees] = useState(false);

  const currentMonth = new Date().toLocaleString("default", { month: "long" }).toUpperCase();

  const frequencies = donateData.frequencies;
  const amounts = donateData.amounts;

  return (
    <section className="w-full overflow-x-hidden">
      <div className="flex flex-col">
        {/* Hero Section with Background Image */}
        <div className=" bg-[#149ECC] relative overflow-hidden">
          <div className="w-full h-[255px] md:h-[350px] items-center justify-center mx-auto md:max-w-xl lg:max-w-[720px] relative overflow-hidden">
            <Image src={donateData.hero.image} alt="Medical team providing care" fill className="relative object-cover object-top" />
            <div className="absolute top-2 md:top-8 -right-6 md:-right-10 p-2 bg-transparent ">
              <Image
                src={donateData.hero.butterflyIcon}
                alt={donateData.hero.title}
                width={150}
                height={120}
                className="h-auto w-[100px] md:w-[200px] max-w-none"
              />
              </div>
            {/* <Image src="/donate-butterfly-navbar.svg" alt="Donate" width={200} height={150} className="absolute top-8 md:top-12 -right-16 md:-right-10 h-auto max-w-none" />{" "} */}
          </div>
        </div>

        {/* Donation Section */}
        <div className="bg-[#003683] text-white py-12 px-4 items-center justify-center pb-0">
          <div className=" flex flex-col w-full md:max-w-xl lg:max-w-[720px] mx-auto justify-center items-center mb-10">
            {/* Butterfly and Progress */}
            <div className="w-full items-center flex gap-2 md:gap-4 px-2 md:px-10 justify-center mt-1 md:mt-0">
              <div className="">
                <Image src={donateData.support.butterflyIcon} alt="Donate" width={120} height={100} />
              </div>
              <div className="flex flex-col p-1 w-full md:w-3/5 mt-0">
                <h2 className="text-body font-light uppercase tracking-wide">{donateData.support.title}</h2>
                <div className="flex flex-col mt-2 gap-1.5">
                  <p className="text-white/50 text-body mt-1 uppercase tracking-wider">
                    {donateData.support.currentGoal}
                  </p>
                  <ProgressBar amountRaised={donateData.support.amountRaised} expectedAmount={donateData.support.expectedAmount} className="w-full" />
                </div>
              </div>
            </div>

            {/* Donation Form */}
            <div className="p-2 md:p-8 w-full mx-auto justify-center items-center">
              <form className="items-center px-2 md:px-8 space-y-2">
                {/* Frequency Selection */}
                <div className="items-center w-full lg:max-w-md py-1 lg:ml-20">
                  <label className="block text-body font-light mb-2 text-white tracking-wide">Select frequency</label>
                  <div className="grid grid-cols-3 gap-1 xs:gap-2">
                    {frequencies.map((freq) => (
                      <Button 
                        key={freq.id} 
                        variant={selectedFrequency === freq.value ? "default" : "outline"} 
                        type="button" 
                        onClick={() => setSelectedFrequency(freq.value)}
                        className="text-[10px] xs:text-xs sm:text-body px-1 xs:px-2 sm:px-3 py-2 h-auto min-w-0 leading-tight"
                      >
                        {freq.value === "Legacy Giving" ? (
                          <span className="flex flex-col items-center">
                            <span>Legacy</span>
                            <span>Giving</span>
                          </span>
                        ) : (
                          freq.label
                        )}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="">
                  <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mb-2">
                    {amounts.map((amount) => (
                      <Button key={amount} variant={selectedAmount === amount ? "default" : "outline"} type="button" onClick={() => setSelectedAmount(amount)}>
                        ${amount}
                      </Button>
                    ))}
                    {/* Other option positioned next to last amount, spanning 2 columns */}
                    <input type="text" placeholder="Other" className="col-span-2 lg:col-span-2 px-4 py-1 bg-transparent border-2 border-[#009EE0] rounded-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#009EE0] focus:border-[#009EE0] transition-all duration-200" />
                  </div>
                </div>

                {/* Fee Coverage Checkbox */}
                <div className="flex items-start space-x-3 py-1 px-4 lg:ml-20">
                  <input type="checkbox" id="coverFees" checked={coverFees} onChange={(e) => setCoverFees(e.target.checked)} className="mt-1 w-5 h-5 text-[#009EE0] bg-transparent border-1 border-[#009EE0] rounded focus:ring-[#009EE0] focus:ring-1" />
                  <label htmlFor="coverFees" className="text-body text-white leading-relaxed">
                    {donateData.coverFeesText}
                  </label>
                </div>

                {/* Donate Button */}
                <Button variant="default" type="button" className="py-3 px-6 uppercase w-full lg:max-w-md lg:ml-20">
                  {donateData.donateButtonText}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="bg-[#4FB29E] text-white py-8 px-8">
          <div className="w-full md:max-w-lg mx-auto text-center items-center justify-center">
            <h2 className="text-semi-header font-bold mb-4 uppercase tracking-wide text-left md:text-center">{donateData.partner.title}</h2>
            <p className="text-body w-full md:max-w-[400px] mx-auto p-1 font-light leading-relaxed text-left">
              {donateData.partner.description}
            </p>
          </div>
        </div>

        {/* Key Facts Section */}
        <div className="bg-[#009EE0] text-white py-8 px-8">
          <div className="w-full px-0 md:max-w-md mx-auto ">
            <h2 className="text-header font-bold text-left md:text-center mb-5 lowercase">
              key <span className="font-light"> facts</span>{" "}
            </h2>

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
                      <p className={`${fact.textColor} leading-relaxed ${fact.uppercase ? "uppercase font-bold text-body tracking-wide" : "text-body"}`}>
                        {fact.id % 2 !== 0 && <span className="mr-2 text-lg ">• </span>}
                        {fact.text}
                      </p>
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