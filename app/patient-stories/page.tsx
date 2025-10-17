// import Mboniso from "@/public/mbonisi.png";
import Bovin from "@/public/bovin.png";
import Moses from "@/public/moses.png";
import Doris from "@/public/doris.png";
import Image from "next/image";
import { storiesData } from "@/lib/fakes/stories-fakes";
import { PatientStoriesSection } from "@/components/sections/PatientStoryHeader";

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
          <div className="w-full lg:w-1/2 bg-[#66B2B2] flex items-center p-6 lg:p-8 order-2 lg:order-1">
            <div className="w-full flex flex-col items-end">
              <h2 className="text-semi-header font-bold text-white flex justify-end mb-2 lg:mb-3 tracking-widest">
                {patientTestimonies[0].name}
              </h2>

              <p
                className="text-4xl italic text-white mb-4 lg:mb-6 w-full max-w-5xl"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                <span className="text-6xl mr-2">“</span>{patientTestimonies[0].testimonial}<span className="text-6xl -ml-1">”</span>
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
            <div className="w-[70%] h-full relative">
              <Image
                src={patientTestimonies[0].image}
                alt={patientTestimonies[0].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-[30%] h-full relative">
              <Image
                src="/click-here-blue.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>






      {/* Second story Section - MOSES */}
      <div className="bg-[#149ECC] flex flex-col lg:flex-row">
        {/* Image Section */}
        {/* <div className="w-full relative aspect-[16/9] flex lg:w-1/2 relative h-48 lg:h-96"> */}
        {/* <Image src="./click-here-yellow.svg" alt="" height={100} width={100} className="w-[20%] h-full hidden md:block"/> */}
        {/* <Image src="./click-here-yellow-sm.svg" alt="" height={1200} width={100} className="w-[22%] h-full"/> */}
        {/* <Image src="/click-here-yellow.png" alt="" height={100} width={100} className="w-[20%] h-full object-container" />
          <Image
            src={patientTestimonies[1].image}
            alt={patientTestimonies[1].name}
            className="w-[80%] h-full object-container"
          />
        </div> */}
        <div className="w-full flex aspect-[16/9] lg:w-1/2 relative">
          <div className="w-[30%] h-full relative">
            <Image
              src="/click-here-yellow.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[70%] h-full relative">
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
          <div className="w-full">
            <h2 className="text-semi-header font-bold text-white mb-2 lg:mb-3 tracking-widest">
              {patientTestimonies[1].name}
            </h2>

            <p
              className="text-4xl italic text-white mb-4 lg:mb-6"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              <span className="text-6xl mr-2">“</span>{patientTestimonies[1].testimonial} <br />
              {patientTestimonies[1].testimonialContinued}<span className="text-6xl -ml-1">”</span>
            </p>

            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6 w-full max-w-5xl">
              {patientTestimonies[1].fullStory}{" "}
              <span className="font-bold text-3xl">able to work again!</span>
            </p>
          </div>
        </div>
      </div>









      {/* Third story Section - Doris */}
      <div className="bg-[#193380] flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#193380] flex items-center  p-6 lg:p-8 order-2 lg:order-1">
          <div className="w-full flex flex-col items-end">
            <h2 className="text-semi-header flex justify-end font-bold text-white mb-2 lg:mb-3 tracking-widest">
              DORIS
            </h2>

            <p
              className="text-4xl italic text-white mb-4 lg:mb-6 w-full max-w-5xl"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              <span className="text-6xl mr-2">“</span>I see a beautiful me.<span className="text-6xl -ml-1">”</span>
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
          <div className="w-[70%] h-full relative">
            <Image
              src={Doris}
              alt="Doris"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[30%] h-full relative">
            <Image
              src="/click-here-green.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Image Section */}
        {/* <div className="w-full relative aspect-[16/9] flex lg:w-1/2 relative h-48 lg:h-96 order-1 lg:order-2">
          <Image
            src={Doris}
            alt="Doris"
            className="w-[80%] h-full object-container"
          /> */}
        {/* <Image src="/click-here-green.png" alt="" height={100} width={100} className="w-[20%] h-full object-container" /> */}
        {/* <Image src="./click-here-green.svg" alt="" height={100} width={100} className="w-[20%] h-full hidden md:block"/> */}
        {/* <Image src="./click-here-green-sm.svg" alt="" height={1200} width={100} className="w-[22%] h-full"/> */}
        {/* </div> */}
      </div>
    </div>
  );
}
