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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row bg-[#4FB29E] relative">
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 w-full lg:w-1/2 py-8 sm:py-12 lg:py-16">
          <div className="text-white space-y-6 sm:space-y-8 flex flex-col justify-center items-center w-full z-10 max-w-3xl">
            <div className="flex justify-center gap-2 w-full">
              <h1 className="z-10 w-full max-w-2xl">
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
              className="opacity-60 absolute items-center z-0 top-70 left-80 hidden lg:block"
            />
            <p className="text-body leading-relaxed max-w-2xl z-10">
              {(() => {
                const desc = aboutData.hero.description;
                const highlights = [
                  {
                    text: "childhood deformity, infected fractures and neglected trauma cause massive suffering globally",
                    className: "font-bold text-[#003683]",
                  },
                  {
                    text: "Kenya has 12 000 new fracture-related infections each year",
                    className: "font-bold text-[#003683]",
                  },
                ];

                // Function to highlight text
                const highlightText = (text: string): React.ReactNode[] => {
                  let result: React.ReactNode[] = [text];

                  highlights.forEach((highlight, highlightIndex) => {
                    result = result.flatMap((node, nodeIndex) => {
                      if (typeof node !== "string") return node;

                      const parts = node.split(highlight.text);
                      if (parts.length === 1) return node;

                      return parts.reduce<React.ReactNode[]>(
                        (acc, part, partIndex) => {
                          if (partIndex > 0) {
                            acc.push(
                              <span
                                key={`${highlightIndex}-${nodeIndex}-${partIndex}`}
                                className={highlight.className}
                              >
                                {highlight.text}
                              </span>
                            );
                          }
                          if (part) acc.push(part);
                          return acc;
                        },
                        []
                      );
                    });
                  });

                  return result;
                };

                return highlightText(desc);
              })()}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto relative flex-shrink-0">
          <Image
            src="/the-need.png"
            alt="leg"
            width={300}
            height={400}
            objectFit="cover"
            className="z-0 w-full h-full"
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
              src="/before.png"
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
                cutting edge of the treatment of limb deformities,
                fracture-related infection and poorly healing fractures.
              </p>

              <p>
                The Kijabe Limb Reconstruction Unit is an emerging centre of
                excellence based in Kijabe, Kenya and providing care for some of
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
              src="/after.png"
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
                {(() => {
                  const desc = aboutData.vision.description;
                  const one = "MULTIPLYING OUR IMPACT ACROSS THE CONTINENT.";
                  const two =
                    "CAN ACCESS THE LIMB RECONSTRUCTION CARE THAT THEY NEED.";

                  if (!desc) return desc;

                  // Split the description by the two texts to individually highlight them
                  const partsOne = desc.split(one);
                  const result = [];

                  for (let i = 0; i < partsOne.length; i++) {
                    const subPartsTwo = partsOne[i].split(two);

                    for (let j = 0; j < subPartsTwo.length; j++) {
                      result.push(subPartsTwo[j]);

                      // Insert highlight for second text if not last occurrence
                      if (j !== subPartsTwo.length - 1) {
                        result.push(
                          <span
                            key={`highlight-two-${i}-${j}`}
                            className="font-bold text-[#DFFF80]"
                          >
                            {two}
                          </span>
                        );
                      }
                    }

                    // Insert highlight for first text if not last occurrence
                    if (i !== partsOne.length - 1) {
                      result.push(
                        <span
                          key={`highlight-one-${i}`}
                          className="font-bold text-[#DFFF80]"
                        >
                          {one}
                        </span>
                      );
                    }
                  }

                  return result;
                })()}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/vision.png"
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
      <MeetSurgeonSection/>
      <ColoredBorder />
      {/* The Hospital Section */}
      <HospitalSection/>
      <BlueColoredBorder />
    </div>
  );
}
