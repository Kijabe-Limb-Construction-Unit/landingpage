// import Mboniso from "@/public/mbonisi.png";
import Bovin from "@/public/bovin.png";
import Moses from "@/public/moses.png";
import Doris from "@/public/doris.png";
import { Play } from "lucide-react";
import Image from "next/image";
import { storiesData } from "@/lib/fakes/stories-fakes";

const patientTestimonies = storiesData.patients.map(patient => ({
  ...patient,
  image: patient.name === "BOVIN" ? Bovin : Moses
}));

export default function PatientStories() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white py-12 px-6 lg:py-16">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Left Message Bubble */}
          <div className="absolute -left-10 top-0 w-36 h-36 hidden lg:block">
            <Image
              src="/message-bubble.svg"
              alt=""
              width={64}
              height={64}
              className="w-full h-full"
            />
          </div>

          {/* Right Message Bubble */}
          <div className="absolute -right-20 top-0 w-16 h-16 hidden lg:block">
            <Image
              src="/message.svg"
              alt=""
              width={64}
              height={64}
              className="w-full h-full"
            />
          </div>

          <h1 className="text-[#003683] font-bold mb-4  text-4xl sm:text-5xl md:text-6xl lg:text-9xl">
            patient <span className="font-medium">stories</span>
          </h1>
          <p className="text-[#003683] font-bold">
            Click below <span className="font-sm text-xl">to hear some of our patients share their incredible</span>
            <br /><span className="hidden md:block font-bold text-4xl">stories of transformation!</span>
          </p>
        </div>
      </div>

      {/* Middle Section - BOVIN */}
      <div className="bg-[#66B2B2] min-h-[500px] flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#66B2B2] flex items-center p-6 lg:p-12">
          <div className="w-full">
            <h2 className="text-semi-header font-bold text-gray-800 mb-4 lg:mb-6 tracking-widest">
              {patientTestimonies[0].name}
            </h2>
            
            <p className="text-body italic text-white mb-4 lg:mb-6" style={{ fontFamily: 'Caveat, cursive' }}>
              {patientTestimonies[0].testimonial}
            </p>
            
            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6">
              {patientTestimonies[0].fullStory}
            </p>
            
            <div className="flex justify-end">
              <a 
                href={patientTestimonies[0].youtubeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Play className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800 ml-1" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0">
          <div className="relative">
            <Image 
              src={patientTestimonies[0].image} 
              alt={patientTestimonies[0].name} 
              className="w-full object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - MOSES */}
      <div className="bg-[#193380] min-h-[500px] flex flex-col lg:flex-row ">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
            <Image 
              src={patientTestimonies[1].image} 
              alt={patientTestimonies[1].name} 
              className="w-full h-full object-cover" 
            />
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#193380] flex items-center p-6 lg:p-12">
          <div className="w-full">
            <h2 className="text-semi-header font-bold text-white mb-4 lg:mb-6 tracking-widest">
              {patientTestimonies[1].name}
            </h2>
            
            <p className="text-body italic text-white mb-4 lg:mb-6" style={{ fontFamily: 'Caveat, cursive' }}>
              {patientTestimonies[1].testimonial}
            </p>
            
            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6">
              {patientTestimonies[1].fullStory}
            </p>
            
            <div className="flex justify-start">
              <a 
                href={patientTestimonies[1].youtubeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Play className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800 ml-1" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4FB29E] min-h-[500px] flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-[#4FB29E] flex items-center p-6 lg:p-12">
          <div className="w-full">
            <h2 className="text-semi-header font-bold text-white mb-4 lg:mb-6 tracking-widest">
              DORIS
            </h2>
            
            <p className="text-body italic text-white mb-4 lg:mb-6" style={{ fontFamily: 'Caveat, cursive' }}>
              I see a beautiful me.
            </p>
            
            <p className="text-body text-white leading-relaxed mb-4 lg:mb-6">
              Doris suffered from a multilevel leg deformity for 18 years, 
              affecting her schooling and self-image and making her 
              prone to falling while walking. Now she feels like 
              a different person!
            </p>
            
            <div className="flex justify-end">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Play className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800 ml-1" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
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