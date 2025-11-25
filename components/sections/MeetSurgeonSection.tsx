import Image from "next/image";
import { aboutData } from "@/lib/fakes/about-fakes";
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: [ '200', '600', '700'],
  style: ['normal', 'italic'],
});

export function MeetSurgeonSection() {
  return (
    <section className="flex flex-col justify-center items-center pt-0 pb-12">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Top - Image and Content Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center border-b-3 border-[#003683] mb-12">
          {/* Left - Image */}
          <div className="h-full relative -mx-4 sm:-mx-6 md:-mx-8 lg:mx-0">
            <Image
              src="/donate.png"
              alt="Dr. Mbonisi Malaba"
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="text-[#003683] space-y-4 sm:space-y-6 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 lg:py-12">
            <div className="w-full">
              <div className="leading-tight">
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">meet the </span>
                <span className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">surgeon</span>
              </div>
              <div className="mt-2">
                <span className={`font-bold text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl ${josefin.className}`}>DR. MBONISI MALABA</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-sm sm:text-base md:text-base lg:text-lg">{aboutData.surgeon.role}</p>
            </div>
          </div>
        </div>
      </div>
        {/* Bottom - Biography Section */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Family Photo - positioned on the right */}
          <Image
            src="/malaba-family.svg"
            width={300}
            height={200}
            alt="Dr. Malaba with his family - a happy family of five standing together outdoors"
            className="float-right ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 mb-6 hidden md:block w-[40%] sm:w-[42%] md:w-[45%] max-h-[550px]"
          />

          {/* small screen */}
          <Image
            src="/malaba-family.jpg"
            width={300}
            height={200}
            alt="Dr. Malaba with his family - a happy family of five standing together outdoors"
            className="float-right ml-4 mb-6 w-full md:hidden max-h-[550px]"
          />

          {/* Text Content - wraps around the image */}
          <div className="text-blue-900 leading-relaxed mt-12 sm:mt-16 text-xs sm:text-sm md:text-base lg:text-lg">
            <p className="pr-0 sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16 text-justify hyphens-auto">
              <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">DR. MALABA</span>
              <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                {" "}
                IS MARRIED WITH THREE CHILDREN.
              </span>{" "}
              He is a Zimbabwean orthopaedic surgeon who relocated to Kenya in
              2015 to start and strengthen churches in East Africa and beyond.
              Whilst in Kenya, he subspecialised in paediatric orthopaedics with
              the College of Surgeons of East, Central and Southern Africa
              <span className={`${josefin.className} font-light`}> (</span>COSECSA<span className={`${josefin.className} font-light`}>)</span> During his surgical training, he was awarded a number
              of prizes including the medal for best<span className={`${josefin.className} font-light`}>-</span>performing candidate in the
              COSECSA Orthopaedic <span className={`${josefin.className} font-light`}>(</span>2017<span className={`${josefin.className} font-light`}>)</span> and Paediatric Orthopaedic <span className={`${josefin.className} font-light`}>(</span>2021<span className={`${josefin.className} font-light`}>) </span>
              Examinations as well at the prestigious{" "}
              <span className={`${josefin.className} font-semibold`}>Gerald  O´Sullivan Medal</span><span style={{fontWeight: "bold" }}> (2017)</span>{" "}
              awarded by COSECSA and the Royal College of Surgeons of Ireland to
              the graduate with the highest overall mark across all surgical
              specialties. In 2022, he did a further one year{" "}
              <span className="font-bold">
                subspecialist fellowship training in paediatric and adult limb
                reconstruction at the Royal London Hospital
              </span>
              <span className={`${josefin.className} font-normal`}> (</span>one of the busiest trauma centres in Europe<span className={`${josefin.className} font-light`}>)</span> and the
              <span className="font-bold">
                Royal National Orthopaedic Hospital
              </span>
              <span> <span className={`${josefin.className} font-light`}>-</span> a centre of excellence north of London. He </span>
              <span className="font-bold">pastors OneTribe Church</span> in
              Nairobi, Kenya and through the Advance Movement serves and{" "}
              <span className="font-bold">
                supports several dozen churches or church plants in East Africa
              </span>{" "}
              as well as serving more broadly in the wider church.
            </p>
          </div>
        </div>
    </section>
  );
}
