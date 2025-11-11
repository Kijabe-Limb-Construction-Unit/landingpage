import Image from "next/image";
import { aboutData } from "@/lib/fakes/about-fakes";
import {
  BlueColoredBorder,
  ColoredBorder,
} from "@/components/sections/ColoredBorder";
import { HospitalSection } from "@/components/sections/HospitalSection";
import { MeetSurgeonSection } from "@/components/sections/MeetSurgeonSection";

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#4FB29E] relative">
        <div className="mx-auto w-full max-w-8xl flex flex-col md:justify-end lg:flex-row items-stretch">
          {/* left content */}
          <div className=" w-full mr-20 lg:w-1/2 flex flex-col justify-center min-h-[560px] lg:min-h-[720px]">
            <div className="relative text-white space-y-6 flex-1 flex flex-col justify-center my-5 py-10 md:my-0 items-center w-full z-10">
              <div className="flex justify-center gap-2 w-full">
                <h1 className=" z-10 w-full mx-5 md:mx:2">
                  <div className="flex items-baseline gap-2 w-full">
                    <span className="font-bold text-white text-7xl md:text-6xl lg:text-8xl">
                      about
                    </span>
                    <span className="font-bold text-white text-5xl md:text-6xl lg:text-7xl">
                      us
                    </span>
                  </div>
                  <span className="font-bold text-white text-3xl lg:text-4xl">
                    THE NEED
                  </span>
                </h1>
              </div>
              <Image
                src="/question-mark.svg"
                alt="Question marks"
                width={300}
                height={400}
                className="opacity-60 absolute items-center -z-10 top-1/2 transform -translate-y-1/4 hidden lg:block"
              />
              <p className="space-x-2 leading-relaxed space-y-5 relative z-10 mx-5 md:mx:2">
                <span className="uppercase">There is a little known epidemic.</span>Conditions such as <span className="font-bold mr-0 text-[#003683]">childhood deformity<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">, </span>
                  infected fractures and neglected trauma cause massive suffering globally</span>. Every year<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0.5">,</span> 30 million people sustain a new disability as a result of musculoskeletal injury.
                Within that group<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0">, </span>
                 1.8 million sustain a fracture that later becomes infected<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0">, </span>
                making it both more expensive and more challenging to treat<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0">, </span>
                and that could result in the loss of that limb. It is estimated that a country like <span className="font-bold text-[#003683]">Kenya has 12000 new fracture-related infections each year.</span>
                On top of this are the many cases of congenital childhood deformity and other neglected trauma<span className="text-md ml-1">.</span>Sadly<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">, </span>
                developing countries are disproportionately affected by these challenges because of poor infrastructure and a lack of access to limb reconstruction surgery.</p>
            </div>
          </div>
          {/* Image Section */}
          <div className="relative w-full lg:w-1/3 min-h-[560px] lg:min-h-[720px]">
            <Image
              src="/abt-legs.svg"
              alt="leg"
              width={1200}
              height={800}
              className="absolute inset-0 z-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* The Answer Section */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-8xl flex flex-col lg:flex-row items-stretch min-h-[560px] lg:min-h-[720px]">
        {/* BOVIN BEFORE Section */}
        <div className="relative w-full lg:w-1/4 flex flex-col min-h-[560px] lg:min-h-[720px]">
          <div className="bg-[#003683] text-white text-center py-4 flex-shrink-0">
            <h2 className="font-bold tracking-wide text-3xl lg:text-4xl">
              BOVIN BEFORE
            </h2>
          </div>
          {/* Image */}
          <div className="flex-1 relative">
            <Image
              src="/before.svg"
              alt="Patient before treatment"
              width={300}
              height={400}
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* THE ANSWER Section */}
        <div className="bg-[#149ECC] text-white w-full lg:w-1/2 flex flex-col justify-center min-h-[560px] lg:min-h-[720px]">
          <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-6 lg:space-y-8 h-full flex-1">
            {/* Background decorative image */}
            <Image
              src="/ticks-light.svg"
              alt="Decorative ticks"
              width={200}
              height={300}
              className="absolute right-[5rem] sm:right-75 top-[10rem] sm:top-52 md:left-65 lg:right-25 xl:right-55 opacity-20 z-0 w-55 sm:w-48 md:w-69 lg:w-100"
            />

            {/* Title */}
            <h1 className="relative z-10 font-bold text-3xl lg:text-4xl mt-15 border lg:px-15  md:mt-0">
              THE ANSWER
            </h1>

            {/* Content with proper spacing */}
            <div className="relative z-10 sm:space-y-6 leading-relaxed space-y-5 max-w-none lg:max-w-3xl lg:px-15">
              <p>
                <span className="font-bold text-[#003683] px-1 py-0.5 rounded">
                  LIMB RECONSTRUCTION IS AN ESSENTIAL WEAPON IN ADDRESSING THIS
                  CRISIS.
                </span>{" "}
                This is a field within orthopaedic surgery that is at the
                cutting edge of the treatment of limb deformities<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">, </span>
                fracture-related infection and poorly healing fractures.
              </p>

              <p>
                The Kijabe Limb Reconstruction Unit is an emerging centre of
                excellence based in Kijabe<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> Kenya and providing care for some of
                the most challenging orthopaedic conditions.
              </p>
            </div>
          </div>
        </div>

        {/* BOVIN AFTER Section */}
        <div className="relative w-full lg:w-1/4 flex flex-col min-h-[560px] lg:min-h-[700px]">
          {/* Header */}
          <div className="bg-[#003683] text-white text-center py-4 flex-shrink-0">
            <h2 className="font-bold tracking-wide text-3xl lg:text-4xl">
              BOVIN AFTER
            </h2>
          </div>
          {/* Image */}
          <div className="flex-1 relative">
            <Image
              src="/after.svg"
              alt="Patient after treatment"
              width={300}
              height={400}
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="bg-[#003683] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl lg:text-4xl">{aboutData.vision.title}</h2>
              <div className="leading-relaxed">
                <p>The vision of the <span className="font-bold">Kijabe Limb Reconstruction Unit</span> is a world where men<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">, </span>
                  women and children <span className="font-bold text-[#DFFF80]">CAN ACCESS THE LIMB RECONSTRUCTION CARE THAT THEY NEED</span><span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">, </span>
                  when they need it<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> regardless of where they were born or how much money they happen to have. Towards this end
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> we are developing a centre of excellence in Kijabe<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">, </span>
                  Kenya that trains 10 limb reconstruction surgeons from 10 sub-Saharan countries in the next 10 years<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">, </span>
                  <span className="font-bold text-[#DFFF80]">MULTIPLYING OUR IMPACT ACROSS THE CONTINENT.</span></p>
              </div>
            </div>

            <div className="flex justify-center lg:w-lg lg:h-lg">
              <Image
                src="/vision.svg"
                alt="Map of Africa"
                width={300}
                height={400}
                objectFit="contain"
                className="drop-shadow-2xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <ColoredBorder />
      {/* Meet the Surgeon Section */}
      <MeetSurgeonSection />
      <ColoredBorder />
      {/* The Hospital Section */}
      <HospitalSection />
      <BlueColoredBorder pst={""} />
    </div>
  );
}
