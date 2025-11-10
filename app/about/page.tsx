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
      <section className="flex flex-col lg:flex-row justify-end bg-[#4FB29E] relative">
        {/* left content */}
        <div className="flex flex-col justify-center items-center w-full lg:w-[60%] mr-10 lg:mr-0 xl:mr-5">
          <div className="relative text-white space-y-6 flex flex-col justify-center items-center w-full z-10">
            <div className="flex justify-center gap-2 w-full">
              <h1 className="z-10 w-full mx-5 md:mx:2">
                <div className="flex items-baseline gap-2 w-full">
                  <span className="font-bold text-white text-5xl md:text-6xl lg:text-8xl">
                    about
                  </span>
                  <span className="font-bold text-white text-5xl md:text-6xl lg:text-7xl">
                    us
                  </span>
                </div>
                <span className="font-bold text-white text-lg md:text-xl lg:text-3xl">
                  THE NEED
                </span>
              </h1>
            </div>
            <Image
              src="/question-mark.svg"
              alt="Question marks"
              width={300}
              height={400}
              className="opacity-60 absolute  items-center -z-10 top-1/2 transform -translate-y-1/4 hidden lg:block"
            />
            <p className="text-body lg:text-xl xl:text-2xl space-x-2 relative z-10 mx-5 md:mx:2">
              <span className="uppercase">There is a little known epidemic.</span> Conditions such as <span className="font-bold mr-0 text-[#003683]">childhood deformity<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> 
              infected fractures and neglected trauma cause massive suffering globally</span>. Every year<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0.5">,</span><span style={{ fontFamily: "Roboto" }}>30</span>million people sustain a new disability as a result of musculoskeletal injury. 
              Within that group<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0">,</span>
              <span style={{ fontFamily: "Roboto"}}>1.8</span>million sustain a fracture that later becomes infected<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0">,</span>
               making it both more expensive and more challenging to treat<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md mr-0">,</span> 
               and that could result in the loss of that limb. It is estimated that a country like <span className="font-bold text-[#003683]">Kenya has <span style={{ fontFamily: "Roboto"}}>12000</span> new fracture-related infections each year.</span>
               On top of this are the many cases of congenital childhood deformity and other neglected trauma. Sadly<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> 
               developing countries are disproportionately affected by these challenges because of poor infrastructure and a lack of access to limb reconstruction surgery.</p>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-[25%] flex-shrink-0 self-stretch flex items-stretch border-0 lg:border-red-500 xl:border-blue-500">
          <Image
            src="/abt-legs.svg"
            alt="leg"
            width={600}
            height={600}
            className="z-0 w-full h-full object-cover"
          />
        </div>
      </section>
      {/* The Answer Section */}
      <section className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* BOVIN BEFORE Section */}
        <div className="relative w-full lg:w-1/4 flex flex-col">
          <div className="bg-[#003683] text-white text-center py-4 flex-shrink-0">
            <h2 className="font-bold tracking-wide text-sm sm:text-base">
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
        <div className="bg-[#149ECC] text-white w-full lg:w-1/2 flex flex-col justify-center">
          <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-6 lg:space-y-8 h-full">
            {/* Background decorative image */}
            <Image
              src="/ticks-light.svg"
              alt="Decorative ticks"
              width={200}
              height={300}
              className="absolute right-4 sm:right-75 top-10 sm:top-52 opacity-20 z-0 w-32 sm:w-48 md:w-64 lg:w-100"
            />

            {/* Title */}
            <h1 className="relative z-10 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              THE ANSWER
            </h1>

            {/* Content with proper spacing */}
            <div className="relative z-10 space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-none lg:max-w-3xl">
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
        <div className="relative w-full lg:w-1/4 flex flex-col">
          {/* Header */}
          <div className="bg-[#003683] text-white text-center py-4 flex-shrink-0">
            <h2 className="font-bold tracking-wide text-sm sm:text-base">
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
      </section>
      {/* Vision Section */}
      <section className="bg-[#003683] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-header">{aboutData.vision.title}</h2>
              <div className="text-body leading-relaxed">
                <p>The vision of the Kijabe Limb Reconstruction Unit is a world where men<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span>
                 women and children <span className="font-bold text-[#DFFF80]">CAN ACCESS THE LIMB RECONSTRUCTION CARE THAT THEY NEED</span><span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span>
                  when they need it<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> regardless of where they were born or how much money they happen to have. Towards this end
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> we are developing a centre of excellence in Kijabe<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span> 
                  Kenya that trains <span style={{ fontFamily: "Roboto" }}>10</span> limb reconstruction surgeons from <span style={{ fontFamily: "Roboto" }}>10</span> sub-Saharan countries in the next <span style={{ fontFamily: "Roboto" }}>10</span> years<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="text-md">,</span>
                  <span className="font-bold text-[#DFFF80]">MULTIPLYING OUR IMPACT ACROSS THE CONTINENT.</span></p>
              </div>
            </div>

            <div className="flex justify-center">
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
