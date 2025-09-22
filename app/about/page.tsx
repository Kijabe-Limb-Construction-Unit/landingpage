import Image from "next/image";
import { aboutData } from "@/lib/fakes/about-fakes";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex bg-[#4FB29E] relative overflow-hidden ">
        <div className="flex flex-col justify-between items-center align-middle  px-4 lg:px-8 w-[50%]">
          <div className="text-white space-y-8 flex flex-col justify-center items-center w-full z-10">
            <h1 className="text-header z-10">
              {aboutData.hero.title} {aboutData.hero.subtitle}
            </h1>
            <Image
              src="/question-mark.svg"
              alt="Question marks"
              width={300}
              height={400}
              className="opacity-60 absolute items-center z-0 top-100 left-100"
            />
            <p className="text-body leading-relaxed max-w-2xl z-10">
              {aboutData.hero.description}
            </p>
          </div>
        </div>
        <div className="w-[50%] h-full max-w-5xl">
          <Image
            src="/the-need.png"
            alt="leg"
            width={300}
            height={400}
            objectFit="cover"
            className="z-0 w-full h-full object-cover"
          />
        </div>
      </section>
      {/* The Answer Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
        {/* BOVIN BEFORE Section */}
        <div className="relative">
          <div className="bg-[#003683] text-white text-center py-4">
            <h2 className="font-bold tracking-wide">BOVIN BEFORE</h2>
          </div>
          {/* Image */}
          <Image
            src="/before.png"
            alt="Patient before treatment"
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* THE ANSWER Section */}
        <div className="bg-[#149ECC] text-white p-8 flex flex-col">
          <h2 className="font-bold my-5">THE ANSWER</h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <p className="my-5 font-bold text-[#003683]">
              LIMB RECONSTRUCTION IS AN ESSENTIAL WEAPON IN ADDRESSING THIS
              CRISIS.
            </p>{" "}
            <p>
              This is a field within orthopaedic surgery that is at the cutting
              edge of the treatment of limb deformities, fracture-related
              infection and poorly healing fractures.
            </p>
            <p>
              The Kijabe Limb Reconstruction Unit is an emerging centre of
              excellence based in Kijabe, Kenya and providing care for some of
              the most challenging orthopaedic conditions.
            </p>
          </div>
        </div>

        {/* BOVIN AFTER Section */}
        <div className="relative">
          {/* Header */}
          <div className="bg-[#003683] text-white text-center py-4">
            <h2 className="font-bold tracking-wide">BOVIN AFTER</h2>
          </div>
          {/* Image */}
          <Image
            src="/after.png"
            alt="Patient after treatment"
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
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
                className="drop-shadow-2xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Surgeon Section */}
      <section className="bg-white py-20 flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <p className="text-header">{aboutData.surgeon.title}</p>

              <div className="space-y-4">
                <p className="font-bold">{aboutData.surgeon.role}</p>
                {/* <div className="text-body leading-relaxed border">
                  {(() => {
                    const role = aboutData.surgeon.role;
                    const highlight = "Kijabe Limb Reconstruction Unit";
                    if (!role || !role.includes(highlight)) return role;

                    const parts = role.split(highlight);
                    const firstPart = parts[0];
                    const secondPart = parts[1]?.split(" ")[0] || "";

                    return (
                      <>
                        {firstPart}
                        <br />
                        {secondPart}{" "}
                        <p className="font-bold text-[#149ECC]">
                          Kijabe Limb <br /> Reconstruction Unit
                        </p>
                      </>
                    );
                  })()}
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] px-4 py-16">
          {/* Family Photo - positioned on the right */}
          <Image
            src="/malaba-family.png"
            width={300}
            height={200}
            alt="Dr. Malaba with his family - a happy family of five standing together outdoors"
            className="float-right ml-8 mb-6 w-[50%] h-auto"
          />

          {/* Text Content - wraps around the image */}
          <div className="text-blue-900 text-lg leading-relaxed">
            <p className="font-bold text-2xl">DR. MALABA</p>
            <p className="font-bold"> IS MARRIED WITH THREE CHILDREN.</p>
            <p>
              {" "}
              He is a Zimbabwean orthopaedic surgeon who relocated to Kenya in
              2015 to start and strengthen churches in East Africa and beyond.
              Whilst in Kenya he subspecialised in paediatric orthopaedics with
              the College of Surgeons of East, Central and Southern Africa
              (COSECSA). During his surgical training, he was awarded a number
              of prizes including the medal for best performing candidate in the
              COSECSA Orthopaedic (2017) and Paediatric Orthopaedic (2021)
              Examinations as well at the prestigious{" "}
            </p>
            <p className="font-bold">Gerald O´Sullivan Medal (2017)</p>
            <p>
              {" "}
              awarded by COSECSA and the Royal College of Surgeons of Ireland to
              the graduate with the highest overall mark across all surgical
              specialties. In 2022 he did a further one year{" "}
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
      </section>

      {/* Color Pattern Divider */}
      <section className="flex h-3">
        <div className="bg-[#149ECC] flex-1"></div>
        <div className="bg-[#4FB29E] flex-1"></div>
        <div className="bg-[#C7D886] flex-1"></div>
        <div className="bg-[#003683] flex-1"></div>
      </section>

      {/* The Hospital Section */}
      <section className="bg-[#4FB29E]">
        {/* Hospital Section */}
        <div className="bg-teal-500 text-white">
          <div className="flex">
            {/* Left side - Text content */}
            <div className="w-1/2 p-12">
              <h1 className="text-5xl font-light mb-8">
                the <span className="font-bold text-blue-900">hospital</span>
              </h1>

              <div className="text-lg leading-relaxed space-y-4">
                <p>
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
            <div className="w-1/2">
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
    </div>
  );
}
