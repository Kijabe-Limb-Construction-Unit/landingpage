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
    <section className="flex flex-col justify-center items-center mb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center border-b-3 border-[#003683] pb-12 sm:pb-0">
        {/* Left - Image */}
        <div className="h-full relative">
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
        <div className="text-[#003683] space-y-6 mx-5 lg:mx-0">
          <p className="w-full md:w-[85%]">
            <span className="text-5xl md:text-7xl">meet the </span>
            <span className="font-bold text-5xl md:text-7xl relative -top-0 md:-top-2 lg:-top-4 xl:-top-0">surgeon </span><br />
            <span className={`font-bold text-xl md:text-3xl ${josefin.className}`}>DR. MBONISI MALABA</span>
          </p>

          <div className="space-y-4">
            <p className="font-bold">{aboutData.surgeon.role}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end w-full max-w-8xl">
        <div className="w-full mx-auto">
          {/* Family Photo - positioned on the right */}
          <Image
            src="/malaba-family.png"
            width={300}
            height={200}
            alt="Dr. Malaba with his family - a happy family of five standing together outdoors"
            className="float-right ml-8 mb-6 w-[55%] max-h-[500px]"
          />

          {/* Text Content - wraps around the image */}
          <div className="text-blue-900 mx-5 lg:pl-[13rem] leading-relaxed mt-25">
            <p className="pr-0 lg:pr-[12rem]">
              <span className="font-bold text-4xl">DR. MALABA</span>
              <span className="font-bold text-2xl">
                {" "}
                IS MARRIED WITH THREE CHILDREN.
              </span>{" "}
              He is a Zimbabwean orthopaedic surgeon who relocated to Kenya in 
               2015 to start and strengthen churches in East Africa and beyond.
              Whilst in Kenya<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>,</span> he subspecialised in paediatric orthopaedics with
              the College of Surgeons of East<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>,</span> Central and Southern Africa
              <span className={`${josefin.className} font-light`}> (</span>COSECSA<span className={`${josefin.className} font-light`}>)</span> During his surgical training<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}className="text-md">,</span> he was awarded a number
              of prizes including the medal for best<span className={`${josefin.className} font-light`}>-</span>performing candidate in the
              COSECSA Orthopaedic <span className={`${josefin.className} font-light`}>(</span>2017<span className={`${josefin.className} font-light`}>)</span> and Paediatric Orthopaedic <span className={`${josefin.className} font-light`}>(</span>2021<span className={`${josefin.className} font-light`}>)</span>
              Examinations as well at the prestigious{" "}
              <span className={`${josefin.className} font-semibold`}>Gerald  O´Sullivan Medal</span><span style={{fontWeight: "bold" }}><span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}> (</span>2017<span style={{ fontFamily: "Arial, Helvetica, sans-serif"}}>)</span></span>{" "}
              awarded by COSECSA and the Royal College of Surgeons of Ireland to
              the graduate with the highest overall mark across all surgical
              specialties. In 2022<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>,</span> he did a further one year{" "}
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
              Nairobi<span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>,</span> Kenya and through the Advance Movement serves and{" "}
              <span className="font-bold">
                supports several dozen churches or church plants in East Africa
              </span>{" "}
              as well as serving more broadly in the wider church.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
