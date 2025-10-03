// import Mboniso from "@/public/mbonisi.png";
import Bovin from "@/public/bovin.png";
import Moses from "@/public/moses.png";
import Doris from "@/public/doris.png";
import { Play } from "lucide-react";
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
      <div className="bg-[#66B2B2] min-h-[500px] flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#66B2B2] flex items-center p-6 lg:p-12 order-2 lg:order-1">
          <div className="w-full flex flex-col items-end">
            <h2 className="text-semi-header font-bold text-white flex justify-end mb-4 lg:mb-6 tracking-widest">
              {patientTestimonies[0].name}
            </h2>

            <p
              className="text-4xl italic text-white mb-4 lg:mb-6 flex w-full max-w-5xl"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              &quot;{patientTestimonies[0].testimonial}&quot;
            </p>

            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6 w-full max-w-5xl">
              {patientTestimonies[0].fullStory}{" "}
              <span className="font-bold text-3xl">
                Now he is happy and walking!
              </span>
            </p>

            <div className="flex justify-end">
              <div className="mx-5">
                <p className="text-white">Click here to</p>
                <p className="text-white">hear more</p>
              </div>
              <a
                href={patientTestimonies[0].youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 bg-white rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Play
                  className="w-5 h-5 lg:w-8 lg:h-8 text-gray-800 ml-1"
                  fill="currentColor"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto order-1 lg:order-2">
          <Image
            src={patientTestimonies[0].image}
            alt={patientTestimonies[0].name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Second story Section - MOSES */}
      <div className="bg-[#149ECC] min-h-[500px] flex flex-col lg:flex-row ">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
          <Image
            src={patientTestimonies[1].image}
            alt={patientTestimonies[1].name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#149ECC] flex items-center p-6 lg:p-12">
          <div className="w-full">
            <h2 className="text-semi-header font-bold text-white mb-4 lg:mb-6 tracking-widest">
              {patientTestimonies[1].name}
            </h2>

            <p
              className="text-5xl italic text-white mb-4 lg:mb-6"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              &quot;{patientTestimonies[1].testimonial} <br />
              {patientTestimonies[1].testimonialContinued}&quot;
            </p>

            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6 w-full max-w-5xl">
              {patientTestimonies[1].fullStory}{" "}
              <span className="font-bold text-3xl">able to work again!</span>
            </p>

            <div className="flex justify-start">
              <a
                href={patientTestimonies[1].youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 bg-white rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Play
                  className="w-5 h-5 lg:w-8 lg:h-8 text-gray-800 ml-1"
                  fill="currentColor"
                />
              </a>
              <div className="mx-5">
                <p className="text-white">Click here to</p>
                <p className="text-white">hear more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third story Section - Doris */}
      <div className="bg-[#193380] min-h-[500px] flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#193380] flex items-center p-6 lg:p-12 order-2 lg:order-1">
          <div className="w-full flex flex-col items-end">
            <h2 className="text-semi-header flex justify-end font-bold text-white mb-4 lg:mb-6 tracking-widest">
              DORIS
            </h2>

            <p
              className="text-5xl italic text-white mb-4 lg:mb-6 w-full max-w-5xl"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              &quot;I see a beautiful me.&quot;
            </p>

            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6 w-full max-w-5xl">
              Doris suffered from a multilevel leg deformity for 18 years,
              affecting her schooling and self-image and making her prone to
              falling while walking. Now she{" "}
              <span className="font-bold text-3xl">
                feels like a different person!
              </span>
            </p>

            <div className="flex justify-end">
              <div className="mx-5">
                <p className="text-white">Click here to</p>
                <p className="text-white">hear more</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 lg:w-20 lg:h-20 bg-white rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Play
                  className="w-5 h-5 lg:w-8 lg:h-8 text-gray-800 ml-1"
                  fill="currentColor"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto order-1 lg:order-2">
          <Image
            src={Doris}
            alt="Doris"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
