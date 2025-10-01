import Image from "next/image";
import { aboutData } from "@/lib/fakes/about-fakes";
import {
  BlueColoredBorder,
  ColoredBorder,
} from "@/components/sections/ColoredBorder";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row bg-[#4FB29E] relative overflow-hidden min-h-screen">
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
      <section className="flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center border-b-3 border-[#003683]">
          {/* Left - Image */}
          <div className="relative">
            {/* <div className="relative"> */}
            <Image
              src="/donate.png"
              alt="Dr. Mbonisi Malaba"
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="text-[#003683] space-y-6">
            <p className="text-4xl w-[60%]">
              <span className="text-7xl">meet the </span>
              <span className="font-bold text-7xl">surgeon </span>
              <span className="font-bold text-4xl">DR. MBONISI MALABA</span>
            </p>

            <div className="space-y-4">
              <p className="font-bold">{aboutData.surgeon.role}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-[80%]">
            {/* Family Photo - positioned on the right */}
            <Image
              src="/malaba-family.png"
              width={300}
              height={200}
              alt="Dr. Malaba with his family - a happy family of five standing together outdoors"
              className="float-right ml-8 mb-6 w-[65%] max-h-[500px]"
            />

            {/* Text Content - wraps around the image */}
            <div className="text-blue-900 text-lg leading-relaxed ">
              <p className="font-bold text-2xl">DR. MALABA</p>
              <p className="font-bold"> IS MARRIED WITH THREE CHILDREN.</p>
              <p>
                {" "}
                He is a Zimbabwean orthopaedic surgeon who relocated to Kenya in
                2015 to start and strengthen churches in East Africa and beyond.
                Whilst in Kenya he subspecialised in paediatric orthopaedics
                with the College of Surgeons of East, Central and Southern
                Africa (COSECSA). During his surgical training, he was awarded a
                number of prizes including the medal for best performing
                candidate in the COSECSA Orthopaedic (2017) and Paediatric
                Orthopaedic (2021) Examinations as well at the prestigious{" "}
              </p>
              <p className="font-bold">Gerald O´Sullivan Medal (2017)</p>
              <p>
                {" "}
                awarded by COSECSA and the Royal College of Surgeons of Ireland
                to the graduate with the highest overall mark across all
                surgical specialties. In 2022 he did a further one year{" "}
              </p>
              <p className="font-bold">
                subspecialist fellowship training in paediatric and adult limb
                reconstruction at the Royal London Hospital
              </p>
              <p> (one of the busiest trauma centres in Europe) and the </p>
              <p className="font-bold">Royal National Orthopaedic Hospital</p>
              <p> - a centre of excellence north of London. He </p>
              <p className="font-bold">pastors OneTribe Church</p>
              <p>
                {" "}
                in Nairobi, Kenya and through the Advance Movement serves and{" "}
              </p>
              <p className="font-bold">
                supports several dozen churches or church plants in East Africa
              </p>
              <p> as well as serving more broadly in the wider church.</p>
            </div>
          </div>
        </div>
      </section>
      <ColoredBorder />
      {/* The Hospital Section */}
      <section className="bg-[#4FB29E]">
        {/* Hospital Section */}
        <div className="text-white">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Left side - Text content */}
            <div className="p-12 px-40 w-full">
              <div className="flex justify-end items-end">
                <div className="w-full">
                  <h1 className="text-8xl text-heading font-light mb-8">
                    the{" "}
                    <span className="font-bold text-blue-900">hospital</span>
                  </h1>
                </div>
              </div>
              <Image
                src="/hospital-line.svg"
                width={600}
                height={400}
                alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
                className="relative z-10 bottom-10 right-50 w-[100vw] object-cover"
              />
              <div className="leading-relaxed space-y-4 text-blue-900 flex justify-end items-end">
                <p className="max-w-5xl">
                  <span className="font-bold">Kijabe Hospital</span> is a
                  renowned center of excellence in healthcare and medical
                  training, serving patients from across Kenya and beyond.
                  Nestled on the scenic escarpment overlooking the{" "}
                  <span className="font-bold">Great Rift Valley</span>, it
                  combines{" "}
                  <span className="font-bold">
                    world-class care with a vibrant teaching environment
                  </span>{" "}
                  that equips the next generation of African healthcare
                  professionals. Located in the welcoming village of Kijabe, the
                  hospital forms part of a unique medical community alongside
                  another neighbouring mission hospital, fostering collaboration
                  and innovation in a serene, picturesque setting.
                </p>
              </div>
            </div>

            {/* Right side - Hospital aerial image */}
            <div className="">
              <Image
                src="/hospital-1.png"
                width={600}
                height={400}
                alt="Aerial view of Kijabe Hospital complex nestled in the Great Rift Valley landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <BlueColoredBorder />
    </div>
  );
}
