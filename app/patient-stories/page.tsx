import Mboniso from "@/public/mbonisi.png";
import Bovin from "@/public/bovin.png";
import Moses from "@/public/moses.png";
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
      {/* Top Section - D MBONISI MALABA */}
      <div className="bg-[#193380] min-h-[500px] flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
          <Image 
            src={Mboniso} 
            alt="Dr. Mbonisi Malaba" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 bg-white relative overflow-hidden flex items-center">
          {/* Speech bubble background for "stories" */}
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8 w-24 h-16 lg:w-32 lg:h-20 bg-[#DFFF80] rounded-full transform rotate-12"></div>
          
          <div className="relative z-10 p-6 lg:p-12 w-full">
        <h1 className="text-header mb-6 lg:mb-8 text-gray-800">
          {storiesData.hero.title?.split(' ')[0] || 'patient'} <span className="text-white bg-[#DFFF80] px-3 py-1 lg:px-4 lg:py-2 rounded-full text-semi-header">{storiesData.hero.title?.split(' ')[1] || 'stories'}</span>
        </h1>
            
            <h2 className="text-semi-header font-bold text-gray-800 mb-4 lg:mb-6 tracking-widest">
              {storiesData.hero.name}
            </h2>
            
            <p className="text-body italic text-gray-800 leading-relaxed mb-4 lg:mb-6" style={{ fontFamily: 'Caveat, cursive' }}>
              "{storiesData.hero.quote}"
            </p>
            
            <a 
              href={storiesData.hero.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Play className="w-5 h-5 lg:w-6 lg:h-6 text-white ml-1" fill="currentColor" />
            </a>
          </div>
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
              "{patientTestimonies[0].testimonial}"
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
        <div className="w-full lg:w-1/2 bg-[#DFFF80] flex items-center justify-center py-8 lg:py-0">
          <div className="relative">
            <Image 
              src={patientTestimonies[0].image} 
              alt={patientTestimonies[0].name} 
              className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - MOSES */}
      <div className="bg-[#193380] min-h-[500px] flex flex-col lg:flex-row">
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
              "{patientTestimonies[1].testimonial}"
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
    </div>
  );
}