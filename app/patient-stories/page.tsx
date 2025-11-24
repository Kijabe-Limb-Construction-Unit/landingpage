// import Mboniso from "@/public/mbon                <span className="text-5xl mr-2 font-normal">"</span>I feel so happy cause now I can walk.<span className="text-5xl ml-0.5 font-normal">"</span>si.png";
import Bovin from "@/public/bovin.png";
import Moses from "@/public/moses.png";
import Doris from "@/public/doris.png";
import Image from "next/image";
import { storiesData } from "@/lib/fakes/stories-fakes";
import { PatientStoriesSection } from "@/components/sections/PatientStoryHeader";
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
});
const patientTestimonies = storiesData.patients.map((patient) => ({
  ...patient,
  image: patient.name === "BOVIN" ? Bovin : Moses,
}));

export default function PatientStories() {
  return (
    <div className="min-h-screen bg-white">
      <PatientStoriesSection />
      {/* Fisrt story Section - BOVIN */}
        <div className="bg-[#66B2B2] flex flex-col lg:flex-row overflow-x-hidden">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 bg-[#4FB29E] flex items-center p-6 lg:p-8 order-2 lg:order-1">
            <div className="w-full flex flex-col items-endpx-5">
              <h2 className={`font-semibold text-white flex justify-end mb-2 lg:mb-3 tracking-widest ${josefin.className}`}>

                {patientTestimonies[0].name}
              </h2>

              <p
                className="text-4xl sm:text-5xl italic text-white mb-4 lg:mb-6 w-full font-bold max-w-5xl -ml-3"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                <span className="text-5xl mr-2 font-normal">“</span>I feel so happy cause now I can walk<span className="text-5xl ml-0.5 font-normal">.</span><span className="text-5xl -ml-1.5 font-normal">”</span>
              </p>

              <p className="text-body text-white leading-relaxed mb-4 lg:mb-6 w-full max-w-5xl">
                {patientTestimonies[0].fullStory}{" "}
                <span className="font-bold">
                  Now he is happy and walking!
                </span>
              </p>
            </div>
          </div>

          <div className="w-full flex aspect-[16/9] lg:w-1/2 order-1 lg:order-2">
            <div className="w-[80%] sm:w-[85%] lg:w-[50%] xl:w-[70%] h-full relative">
              <Image
                src={patientTestimonies[0].image}
                alt={patientTestimonies[0].name}
                fill
                className="object-cover"
              />
            </div>
            <a 
              href="https://youtu.be/fOJjvntwIoM"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40%] lg:w-[50%] xl:w-[40%] h-full relative block cursor-pointer"
            >
              <Image
                src="/click-here-blue.svg"
                alt="Click to watch Bovin's video"
                fill
                className="object-cover hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>
      {/* Second story Section - MOSES */}
      <div className="bg-[#149ECC] flex flex-col lg:flex-row">
        <div className="w-full flex aspect-[16/9] lg:w-1/2 relative">
          <a 
            href="https://youtu.be/FzLt01aMoBA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40%] lg:w-[50%] xl:w-[40%] h-full relative block cursor-pointer"
          >
            <Image
              src="/click-here-yellow.svg"
              alt="Click to watch Moses's video"
              fill
              className="object-cover hover:opacity-90 transition-opacity"
            />
          </a>
          <div className="w-[80%] sm:w-[85%] lg:w-[55%] xl:w-[75%] h-full relative"  >
            <Image
              src={patientTestimonies[1].image}
              alt={patientTestimonies[1].name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#149ECC] flex items-center p-3 lg:p-8">
          <div className="w-full px-5">
            <h2 className={`text-semi-header font-semibold text-white mb-2 lg:mb-3 tracking-widest ${josefin.className}`}>
              {patientTestimonies[1].name}
            </h2>

            <p
              className="text-4xl sm:text-5xl italic text-white mb-4 lg:mb-6 font-bold"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              <span className="text-5xl mr-2 font-normal">“</span>{patientTestimonies[1].testimonial} <br />
              {patientTestimonies[1].testimonialContinued}<span className="text-5xl -ml-1 font-normal">”</span>
            </p>

            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6 w-full max-w-5xl">
            Moses went from expecting an amputation after a leg fracture to being pain free and 
              <span className="font-bold text-3xl"> able to work again!</span>
            </p>
          </div>
        </div>
      </div>
      {/* Third story Section - Doris */}
      <div className="bg-[#193380] flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#193380] flex items-center  p-6 lg:p-8 order-2 lg:order-1">
          <div className="w-full flex flex-col items-end px-5">
            <h2 className={`text-semi-header flex justify-end font-semibold text-white mb-2 lg:mb-3 tracking-widest ${josefin.className}`}>
              DORIS
            </h2>

            <p
              className="text-4xl sm:text-5xl italic text-white mb-4 lg:mb-6 w-full max-w-5xl font-bold mr-3"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              <span className="text-5xl mr-2 font-normal">“</span>I see a beautiful me.<span className="text-5xl -ml-1.5 font-normal">”</span>
            </p>

            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6 w-full max-w-5xl">
              Doris suffered from a multilevel leg deformity for 18 years,
              affecting her schooling and self-image and making her prone to
              falling while walking. Now she{" "}
              <span className="font-bold text-3xl">
                feels like a different person!
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex aspect-[16/9] lg:w-1/2 order-1 lg:order-2">
          <div className="w-[80%] sm:w-[85%] lg:w-[55%] xl:w-[75%] h-full relative">
            <Image
              src={Doris}
              alt="Doris"
              fill
              className="object-cover"
            />
          </div>
          <a 
            href="https://youtu.be/q8fI15H71oQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40%] lg:w-[50%] xl:w-[40%] h-full relative block cursor-pointer"
          >
            <Image
              src="/click-here-green.svg"
              alt="Click to watch Doris's video"
              fill
              className="object-cover hover:opacity-90 h-96 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
